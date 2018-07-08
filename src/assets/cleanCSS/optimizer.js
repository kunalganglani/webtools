var blobURL = URL.createObjectURL(new Blob(['(',

  function () {
    var initialized = false

    onmessage = function (event) {
      switch (event.data.command) {
        case 'initialize':
          if (!initialized) {
            initialized = true
            importScripts('https://jakubpawlowicz.github.io/clean-css-builds/v4.1.11.js')
          }
          break
        case 'optimize':
          new CleanCSS(event.data.options).minify(event.data.input, function (error, output) {
            postMessage({
              command: 'optimized',
              id: event.data.id,
              error: error,
              output: output,
              saved: event.data.input.length - output.styles.length
            })
          })
      }
    }


  }.toString(),

  ')()'], { type: 'application/javascript' })),

  Optimizer = {
    options: null, // see setOptionsFrom in settings.js

    start: function () {
      this.worker = new Worker(blobURL)
      this.worker.onmessage = function (event) {
        switch (event.data.command) {
          case 'optimized':
            Optimizer.oncomplete(event.data.id, event.data.output, event.data.saved)
        }
      }
      this.worker.onerror = function (event) {
        console.error(event)
      }
    },

    initialize: function () {
      this.worker.postMessage({
        command: 'initialize'
      })
    },

    process: function (id, styles) {
      this.worker.postMessage({
        command: 'optimize',
        id: id,
        input: styles,
        options: this.options
      })
    },

    oncomplete: function () { /* noop */ }
  }

Optimizer.start()
