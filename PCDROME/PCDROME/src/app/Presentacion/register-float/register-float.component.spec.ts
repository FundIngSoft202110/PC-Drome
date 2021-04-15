import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFloatComponent } from './register-float.component';

describe('RegisterFloatComponent', () => {
  let component: RegisterFloatComponent;
  let fixture: ComponentFixture<RegisterFloatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterFloatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFloatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
