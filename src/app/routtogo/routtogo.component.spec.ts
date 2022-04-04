import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouttogoComponent } from './routtogo.component';

describe('RouttogoComponent', () => {
  let component: RouttogoComponent;
  let fixture: ComponentFixture<RouttogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouttogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouttogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
