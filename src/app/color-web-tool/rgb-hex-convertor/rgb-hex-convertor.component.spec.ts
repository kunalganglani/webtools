import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RgbHexConvertorComponent } from './rgb-hex-convertor.component';

describe('RgbHexConvertorComponent', () => {
  let component: RgbHexConvertorComponent;
  let fixture: ComponentFixture<RgbHexConvertorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RgbHexConvertorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RgbHexConvertorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
