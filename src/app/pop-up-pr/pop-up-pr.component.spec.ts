import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpPr } from './pop-up-pr.component';

describe('PopUpPrComponent', () => {
  let component: PopUpPr;
  let fixture: ComponentFixture<PopUpPr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpPr ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpPr);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
