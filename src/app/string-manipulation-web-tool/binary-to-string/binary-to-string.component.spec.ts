import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinaryToStringComponent } from './binary-to-string.component';

describe('BinaryToStringComponent', () => {
  let component: BinaryToStringComponent;
  let fixture: ComponentFixture<BinaryToStringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinaryToStringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinaryToStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
