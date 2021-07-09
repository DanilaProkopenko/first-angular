import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistItemModalComponent } from './wishlist-item-modal.component';

describe('WishlistItemModalComponent', () => {
  let component: WishlistItemModalComponent;
  let fixture: ComponentFixture<WishlistItemModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishlistItemModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
