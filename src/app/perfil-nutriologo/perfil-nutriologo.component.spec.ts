import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilNutriologoComponent } from './perfil-nutriologo.component';

describe('PerfilNutriologoComponent', () => {
  let component: PerfilNutriologoComponent;
  let fixture: ComponentFixture<PerfilNutriologoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilNutriologoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilNutriologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
