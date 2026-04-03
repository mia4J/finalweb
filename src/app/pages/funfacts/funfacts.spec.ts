import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Funfacts } from './funfacts';

describe('Funfacts', () => {
  let component: Funfacts;
  let fixture: ComponentFixture<Funfacts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Funfacts],
    }).compileComponents();

    fixture = TestBed.createComponent(Funfacts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
