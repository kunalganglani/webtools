import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HexToStringComponent } from './hex-to-string.component';

describe('HexToStringComponent', () => {
  let component: HexToStringComponent;
  let fixture: ComponentFixture<HexToStringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HexToStringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HexToStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
