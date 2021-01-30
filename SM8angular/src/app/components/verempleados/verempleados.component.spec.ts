import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerempleadosComponent } from './verempleados.component';

describe('VerempleadosComponent', () => {
  let component: VerempleadosComponent;
  let fixture: ComponentFixture<VerempleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerempleadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerempleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
