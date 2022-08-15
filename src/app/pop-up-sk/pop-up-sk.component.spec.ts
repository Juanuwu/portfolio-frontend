import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpSk } from './pop-up-sk.component';

describe('PopUpSkComponent', () => {
  let component: PopUpSk;
  let fixture: ComponentFixture<PopUpSk>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpSk ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpSk);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
