import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Base64WebToolComponent } from './base64-web-tool.component';

describe('Base64WebToolComponent', () => {
  let component: Base64WebToolComponent;
  let fixture: ComponentFixture<Base64WebToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Base64WebToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Base64WebToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
