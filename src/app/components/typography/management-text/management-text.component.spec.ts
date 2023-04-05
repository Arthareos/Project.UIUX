import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementTextComponent } from './management-text.component';

describe('ManagementTextComponent', () => {
  let component: ManagementTextComponent;
  let fixture: ComponentFixture<ManagementTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
