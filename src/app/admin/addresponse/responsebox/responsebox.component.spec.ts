import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseboxComponent } from './responsebox.component';

describe('ResponseboxComponent', () => {
  let component: ResponseboxComponent;
  let fixture: ComponentFixture<ResponseboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponseboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
