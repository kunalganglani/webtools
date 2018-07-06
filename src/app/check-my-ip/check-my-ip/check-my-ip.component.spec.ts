import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckMyIpComponent } from './check-my-ip.component';

describe('CheckMyIpComponent', () => {
  let component: CheckMyIpComponent;
  let fixture: ComponentFixture<CheckMyIpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckMyIpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckMyIpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
