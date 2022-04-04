import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotinutriologoComponent } from './notinutriologo.component';

describe('NotinutriologoComponent', () => {
  let component: NotinutriologoComponent;
  let fixture: ComponentFixture<NotinutriologoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotinutriologoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotinutriologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
