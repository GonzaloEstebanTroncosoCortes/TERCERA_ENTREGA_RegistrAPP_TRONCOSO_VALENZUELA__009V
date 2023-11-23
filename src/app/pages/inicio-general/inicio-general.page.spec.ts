import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioGeneralPage } from './inicio-general.page';

describe('InicioGeneralPage', () => {
  let component: InicioGeneralPage;
  let fixture: ComponentFixture<InicioGeneralPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InicioGeneralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
