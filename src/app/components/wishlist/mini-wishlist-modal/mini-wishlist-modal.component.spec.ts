import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniWishlistModalComponent } from './mini-wishlist-modal.component';

describe('MiniWishlistModalComponent', () => {
  let component: MiniWishlistModalComponent;
  let fixture: ComponentFixture<MiniWishlistModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniWishlistModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniWishlistModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
