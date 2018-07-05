import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptMinifyComponent } from './javascript-minify.component';

describe('JavascriptMinifyComponent', () => {
  let component: JavascriptMinifyComponent;
  let fixture: ComponentFixture<JavascriptMinifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavascriptMinifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptMinifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
