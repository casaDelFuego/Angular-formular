import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormerEmployerComponent } from './former-employer.component';

describe('FormerEmployerComponent', () => {
  let component: FormerEmployerComponent;
  let fixture: ComponentFixture<FormerEmployerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormerEmployerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormerEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
