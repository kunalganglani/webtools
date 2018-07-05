import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlToQrCodeComponent } from './url-to-qr-code.component';

describe('UrlToQrCodeComponent', () => {
  let component: UrlToQrCodeComponent;
  let fixture: ComponentFixture<UrlToQrCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlToQrCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlToQrCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
