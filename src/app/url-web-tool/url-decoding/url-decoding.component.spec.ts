import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlDecodingComponent } from './url-decoding.component';

describe('UrlDecodingComponent', () => {
  let component: UrlDecodingComponent;
  let fixture: ComponentFixture<UrlDecodingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlDecodingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlDecodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
