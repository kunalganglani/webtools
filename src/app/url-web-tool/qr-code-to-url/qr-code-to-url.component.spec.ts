import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrCodeToUrlComponent } from './qr-code-to-url.component';

describe('QrCodeToUrlComponent', () => {
  let component: QrCodeToUrlComponent;
  let fixture: ComponentFixture<QrCodeToUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrCodeToUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrCodeToUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
