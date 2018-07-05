import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfElseTernaryComponent } from './if-else-ternary.component';

describe('IfElseTernaryComponent', () => {
  let component: IfElseTernaryComponent;
  let fixture: ComponentFixture<IfElseTernaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfElseTernaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfElseTernaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
