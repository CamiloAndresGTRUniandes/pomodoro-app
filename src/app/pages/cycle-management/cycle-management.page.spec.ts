import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CycleManagementPage } from './cycle-management.page';

describe('CycleManagementPage', () => {
  let component: CycleManagementPage;
  let fixture: ComponentFixture<CycleManagementPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CycleManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
