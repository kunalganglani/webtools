import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringCaseConvertorComponent } from './string-case-convertor.component';

describe('StringCaseConvertorComponent', () => {
  let component: StringCaseConvertorComponent;
  let fixture: ComponentFixture<StringCaseConvertorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringCaseConvertorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringCaseConvertorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
