import { Component, OnInit, SystemJsNgModuleLoader, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-css-minify',
  templateUrl: './css-minify.component.html',
  styleUrls: ['./css-minify.component.css', './css/vendor/normalize.css', './css/home.css']
})
export class CssMinifyComponent implements OnInit, AfterViewInit {

  ngAfterViewInit(): void {
    this.loadScripts();
  }
  constructor() {
  }
  loadScripts() {
    const dynamicScripts = [
      'https://rawgit.com/kunalganglani/webtools/master/src/assets/cleanCSS/drag-drop.js',
      'https://rawgit.com/kunalganglani/webtools/master/src/assets/cleanCSS/optimizer.js',
      'https://rawgit.com/kunalganglani/webtools/master/src/assets/cleanCSS/settings.js'];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.type = 'text/javascript';
      node.src = dynamicScripts[i];
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

  ngOnInit() {
  }

}
