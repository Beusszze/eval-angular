import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireCreationComponent } from './formulaire-creation.component';

describe('FormulaireCreationComponent', () => {
  let component: FormulaireCreationComponent;
  let fixture: ComponentFixture<FormulaireCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
