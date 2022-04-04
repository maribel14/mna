import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroNutriologoComponent } from './registro-nutriologo.component';

describe('RegistroNutriologoComponent', () => {
  let component: RegistroNutriologoComponent;
  let fixture: ComponentFixture<RegistroNutriologoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroNutriologoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroNutriologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
