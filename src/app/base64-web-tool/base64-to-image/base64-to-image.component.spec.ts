import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Base64ToImageComponent } from './base64-to-image.component';

describe('Base64ToImageComponent', () => {
  let component: Base64ToImageComponent;
  let fixture: ComponentFixture<Base64ToImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Base64ToImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Base64ToImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
