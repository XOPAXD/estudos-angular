import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveSearch2Component } from './reactive-search2.component';

describe('ReactiveSearch2Component', () => {
  let component: ReactiveSearch2Component;
  let fixture: ComponentFixture<ReactiveSearch2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveSearch2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveSearch2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
