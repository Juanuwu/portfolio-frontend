import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpEd } from './pop-up-ed.component';

describe('PopUpComponent', () => {
  let component: PopUpEd;
  let fixture: ComponentFixture<PopUpEd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpEd ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpEd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
