import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificacionAlumComponent } from './calificacion-alum.component';

describe('CalificacionAlumComponent', () => {
  let component: CalificacionAlumComponent;
  let fixture: ComponentFixture<CalificacionAlumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalificacionAlumComponent]
    });
    fixture = TestBed.createComponent(CalificacionAlumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
