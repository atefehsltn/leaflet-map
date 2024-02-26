import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveRecordComponent } from './remove-record.component';

describe('RemoveRecordComponent', () => {
  let component: RemoveRecordComponent;
  let fixture: ComponentFixture<RemoveRecordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoveRecordComponent]
    });
    fixture = TestBed.createComponent(RemoveRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
