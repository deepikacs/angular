import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Enterdata1Component } from './enterdata1.component';

describe('Enterdata1Component', () => {
  let component: Enterdata1Component;
  let fixture: ComponentFixture<Enterdata1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Enterdata1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Enterdata1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
