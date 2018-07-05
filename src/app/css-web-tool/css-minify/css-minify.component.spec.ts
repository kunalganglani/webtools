import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssMinifyComponent } from './css-minify.component';

describe('CssMinifyComponent', () => {
  let component: CssMinifyComponent;
  let fixture: ComponentFixture<CssMinifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssMinifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssMinifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
