import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'app-image-to-base64',
  templateUrl: './image-to-base64.component.html',
  styleUrls: ['./image-to-base64.component.css']
})
export class ImageToBase64Component implements OnInit {

  constructor() {
  }
  ngOnInit() {
    this.initializeConvertor();
  }
  initializeConvertor() {
    let processFiles = function (event) {
      event.stopPropagation();
      event.preventDefault();
      removeDropZoneClass();

      // FileList object of File objects
      let files = event.dataTransfer.files;
      let output = [];
      for (let i = 0, f; f = files[i]; i++) {
        let reader = new FileReader();

        // closure to capture file info
        reader.onload = (function (file, index) {
          return function (e) {
            let dataUri = e.target.result,
              base64 = dataUri.substr(dataUri.indexOf(',') + 1),
              textarea, image, figcaption;
            textarea = ['<textarea onfocus="this.select()">', base64, '</textarea>'].join('');
            if (file.type.match('image.*')) {
              if (dataUri.length > 32768) {
                figcaption = '<figcaption>In IE8, data URIs cannot be larger than 32,768 characters.</figcaption>';
              }
              image = ['<figure><img width="200px" height="200px" class="thumb" src="', dataUri, '" title="', file.name, '"/>',
                figcaption, '</figure>'].join('');
            }
            document.getElementById(['file_', index + 1].join('')).innerHTML += [image, textarea].join('');
          };
        })(f, i);

        // read file as data URI
        reader.readAsDataURL(f);

        let data = ['<li id="file_', i + 1, '"><h3>', f.name, '</h3><dl>',
          '<dt>Type</dt><dd>', f.type || 'n/a', '</dd>',
          '<dt>Size</dt><dd>', f.size, ' bytes</dd>',
          '<dt>Last Modified</dt><dd>', f.lastModifiedDate ? f.lastModifiedDate.toDateString() : 'n/a', '</dd>',
          '</dl></li>'].join('');

        output.push(data);
      }

      if (files.length) {
        document.getElementById('list').innerHTML = '<ol>' + output.join('') + '</ol>';
      }
    };

    const highlightDropZone = function (e) {
      e.stopPropagation();
      e.preventDefault();
      document.getElementById('drop_zone').setAttribute('class', 'highlight');
    };

    const removeDropZoneClass = function () {
      document.getElementById('drop_zone').removeAttribute('class');
    };

    // add event listeners if File API is supported
    const dropZone = document.getElementById('drop_zone');
    if ((<any>window).File && (<any>window).FileReader && (<any>window).FileList && window.Blob) {
      dropZone.addEventListener('drop', processFiles, false);
      dropZone.addEventListener('dragover', highlightDropZone, false);
      dropZone.addEventListener('dragenter', highlightDropZone, false);
      dropZone.addEventListener('dragleave', removeDropZoneClass, false);
      dropZone.innerHTML = 'Drop files here';
    } else {

      dropZone.innerHTML = 'The File APIs are not fully supported in this browser.';
      dropZone.className = 'highlight';
    }

    // change doc element class to show JS support
    const docEl = document.documentElement;
    docEl.className = docEl.className.replace('no-', '');
  }


}