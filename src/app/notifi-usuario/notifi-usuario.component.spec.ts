import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifiUsuarioComponent } from './notifi-usuario.component';

describe('NotifiUsuarioComponent', () => {
  let component: NotifiUsuarioComponent;
  let fixture: ComponentFixture<NotifiUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifiUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifiUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
