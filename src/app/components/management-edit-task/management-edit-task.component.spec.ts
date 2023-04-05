import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementEditTaskComponent } from './management-edit-task.component';

describe('ManagementEditTaskComponent', () => {
  let component: ManagementEditTaskComponent;
  let fixture: ComponentFixture<ManagementEditTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementEditTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementEditTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
