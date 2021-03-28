import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcDialogComponent } from './calc-dialog.component';

describe('CalcDialogComponent', () => {
  let component: CalcDialogComponent;
  let fixture: ComponentFixture<CalcDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
