import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementButtonComponent } from './management-button.component';

describe('ManagementButtonComponent', () => {
  let component: ManagementButtonComponent;
  let fixture: ComponentFixture<ManagementButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
