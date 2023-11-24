import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteShoppingComponent } from './delete-shopping.component';

describe('DeleteShoppingComponent', () => {
  let component: DeleteShoppingComponent;
  let fixture: ComponentFixture<DeleteShoppingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteShoppingComponent]
    });
    fixture = TestBed.createComponent(DeleteShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
