import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecoundMapComponent } from './secound-map.component';

describe('SecoundMapComponent', () => {
  let component: SecoundMapComponent;
  let fixture: ComponentFixture<SecoundMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecoundMapComponent]
    });
    fixture = TestBed.createComponent(SecoundMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
