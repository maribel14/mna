import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaNutriologoComponent } from './pantalla-nutriologo.component';

describe('PantallaNutriologoComponent', () => {
  let component: PantallaNutriologoComponent;
  let fixture: ComponentFixture<PantallaNutriologoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaNutriologoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaNutriologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
