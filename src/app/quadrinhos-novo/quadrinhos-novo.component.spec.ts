import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadrinhosNovoComponent } from './quadrinhos-novo.component';

describe('QuadrinhosNovoComponent', () => {
  let component: QuadrinhosNovoComponent;
  let fixture: ComponentFixture<QuadrinhosNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuadrinhosNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuadrinhosNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
