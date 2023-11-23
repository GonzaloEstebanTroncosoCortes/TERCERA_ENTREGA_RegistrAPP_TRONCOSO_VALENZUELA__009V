import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AmburguesaPage } from './amburguesa.page';

describe('AmburguesaPage', () => {
  let component: AmburguesaPage;
  let fixture: ComponentFixture<AmburguesaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AmburguesaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
