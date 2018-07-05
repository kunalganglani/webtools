import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlEncodingComponent } from './url-encoding.component';

describe('UrlEncodingComponent', () => {
  let component: UrlEncodingComponent;
  let fixture: ComponentFixture<UrlEncodingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlEncodingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlEncodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
