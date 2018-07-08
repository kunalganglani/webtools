import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
@Component({
  selector: 'app-css-minify',
  templateUrl: './css-minify.component.html',
  styleUrls: ['./css-minify.component.css', './css/vendor/normalize.css', './css/home.css']
})
export class CssMinifyComponent implements OnInit {

  loadAPI: Promise<any>;

  constructor() {
    this.loadScripts();
      // this.loadAPI = new Promise((resolve) => {
      //     this.loadScript();
      //     resolve(true);
      // });
  }
  loadScripts() {
    const dynamicScripts = ['https://widgets.skyscanner.net/widget-server/js/loader.js'];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.type = 'text/javascript';
      node.src = dynamicScripts[i];
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }


  // public loadScript() {
  //     let isFound = false;
  //     const scripts = document.getElementsByTagName('script')
  //     for (let i = 0; i < scripts.length; ++i) {
  //         if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
  //             isFound = true;
  //         }
  //     }

  //     if (!isFound) {
  //         const dynamicScripts = ['https://widgets.skyscanner.net/widget-server/js/loader.js'];

  //         for (let i = 0; i < dynamicScripts .length; i++) {
  //             const node = document.createElement('script');
  //             node.src = dynamicScripts [i];
  //             node.type = 'text/javascript';
  //             node.async = false;
  //             node.charset = 'utf-8';
  //             document.getElementsByTagName('head')[0].appendChild(node);
  //         }

  //     }
  // }

  ngOnInit() {
  }

}


    // Optimizer.start();
    // dragDrop();
    // settings();
    // this.loadScripts();
    // require ('../../../assets/cleanCssJS/optimizer.js');
    // require ('../../../assets/cleanCssJS/dragDrop.js');
    // require ('../../../assets/cleanCssJS/settings.js');

    // declare let optimizer: any;
    // declare let dragDrop: any;
    // declare let settings: any;
  // import { Optimizer, dragDrop, settings } from './dragDrop';

  // loadScripts() {
  //   const dynamicScripts = ['./js/optimizer.js../../../../externalJS/optimizer.js',
  //   './js/optimizer.js../../../../externalJS/dragDrop.js',
  //    './js/optimizer.js../../../../externalJS/settings.js'];
  //   for (let i = 0; i < dynamicScripts.length; i++) {
  //     const node = document.createElement('script');
  //     node.type = 'text/javascript';
  //     node.src = dynamicScripts[i];
  //     node.async = false;
  //     node.charset = 'utf-8';
  //     document.getElementsByTagName('head')[0].appendChild(node);
  //   }
  // }
