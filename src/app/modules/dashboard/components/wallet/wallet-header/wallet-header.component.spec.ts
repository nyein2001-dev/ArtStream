import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletHeaderComponent } from './wallet-header.component';

describe('WalletHeaderComponent', () => {
  let component: WalletHeaderComponent;
  let fixture: ComponentFixture<WalletHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WalletHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WalletHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
