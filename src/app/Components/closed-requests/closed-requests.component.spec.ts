import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedRequestsComponent } from './closed-requests.component';

describe('ClosedRequestsComponent', () => {
  let component: ClosedRequestsComponent;
  let fixture: ComponentFixture<ClosedRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClosedRequestsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ClosedRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
