import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpExp } from './pop-up-exp.component';

describe('PopUpComponent', () => {
  let component: PopUpExp;
  let fixture: ComponentFixture<PopUpExp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpExp ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpExp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
