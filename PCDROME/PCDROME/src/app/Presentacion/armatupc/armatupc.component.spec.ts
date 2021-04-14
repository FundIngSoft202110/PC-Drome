import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmatupcComponent } from './armatupc.component';

describe('ArmatupcComponent', () => {
  let component: ArmatupcComponent;
  let fixture: ComponentFixture<ArmatupcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmatupcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmatupcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
