import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthMapComponent } from './fourth-map.component';

describe('FourthMapComponent', () => {
  let component: FourthMapComponent;
  let fixture: ComponentFixture<FourthMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FourthMapComponent]
    });
    fixture = TestBed.createComponent(FourthMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
