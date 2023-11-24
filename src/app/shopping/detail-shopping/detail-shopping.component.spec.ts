import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailShoppingComponent } from './detail-shopping.component';

describe('DetailShoppingComponent', () => {
  let component: DetailShoppingComponent;
  let fixture: ComponentFixture<DetailShoppingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailShoppingComponent]
    });
    fixture = TestBed.createComponent(DetailShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
