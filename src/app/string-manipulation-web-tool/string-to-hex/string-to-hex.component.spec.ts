import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringToHexComponent } from './string-to-hex.component';

describe('StringToHexComponent', () => {
  let component: StringToHexComponent;
  let fixture: ComponentFixture<StringToHexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringToHexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringToHexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
