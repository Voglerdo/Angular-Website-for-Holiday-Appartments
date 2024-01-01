import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BewertungenComponent } from './bewertungen.component';

describe('BewertungenComponent', () => {
  let component: BewertungenComponent;
  let fixture: ComponentFixture<BewertungenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BewertungenComponent]
    });
    fixture = TestBed.createComponent(BewertungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
