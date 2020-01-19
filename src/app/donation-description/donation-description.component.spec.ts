import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationDescriptionComponent } from './donation-description.component';

describe('DonationDescriptionComponent', () => {
  let component: DonationDescriptionComponent;
  let fixture: ComponentFixture<DonationDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
