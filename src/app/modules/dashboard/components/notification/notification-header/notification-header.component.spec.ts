import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationHeaderComponent } from './notification-header.component';

describe('NotificationHeaderComponent', () => {
  let component: NotificationHeaderComponent;
  let fixture: ComponentFixture<NotificationHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
