import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SalirAlumnoPage } from './salir-alumno.page';

describe('SalirAlumnoPage', () => {
  let component: SalirAlumnoPage;
  let fixture: ComponentFixture<SalirAlumnoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SalirAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
