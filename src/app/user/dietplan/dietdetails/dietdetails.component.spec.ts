import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietDetailsComponent } from './dietdetails.component';

describe('DietdetailsComponent', () => {
  let component: DietDetailsComponent;
  let fixture: ComponentFixture<DietDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DietDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
