import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunfactDetailComponent } from './funfact-detail';

describe('FunfactDetail', () => {
  let component: FunfactDetailComponent;
  let fixture: ComponentFixture<FunfactDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunfactDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FunfactDetailComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
