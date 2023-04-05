import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementHomepageCardComponent } from './management-homepage-card.component';

describe('ManagementHomepageCardComponent', () => {
  let component: ManagementHomepageCardComponent;
  let fixture: ComponentFixture<ManagementHomepageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementHomepageCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementHomepageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
