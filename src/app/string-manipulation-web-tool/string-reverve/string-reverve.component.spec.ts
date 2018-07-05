import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringReverveComponent } from './string-reverve.component';

describe('StringReverveComponent', () => {
  let component: StringReverveComponent;
  let fixture: ComponentFixture<StringReverveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringReverveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringReverveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
