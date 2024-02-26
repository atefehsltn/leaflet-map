import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRecordComponent } from './create-record.component';

describe('CreateRecordComponent', () => {
  let component: CreateRecordComponent;
  let fixture: ComponentFixture<CreateRecordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateRecordComponent]
    });
    fixture = TestBed.createComponent(CreateRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
