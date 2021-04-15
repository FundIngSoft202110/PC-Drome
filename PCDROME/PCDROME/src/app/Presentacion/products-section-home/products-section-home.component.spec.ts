import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsSectionHomeComponent } from './products-section-home.component';

describe('ProductsSectionHomeComponent', () => {
  let component: ProductsSectionHomeComponent;
  let fixture: ComponentFixture<ProductsSectionHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsSectionHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsSectionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
