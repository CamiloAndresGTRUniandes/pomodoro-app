import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimePlayerPage } from './time-player.page';

describe('TimePlayerPage', () => {
  let component: TimePlayerPage;
  let fixture: ComponentFixture<TimePlayerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TimePlayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
