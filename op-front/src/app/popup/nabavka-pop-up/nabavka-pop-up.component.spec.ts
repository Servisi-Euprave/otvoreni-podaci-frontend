import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NabavkaPopUpComponent } from './nabavka-pop-up.component';

describe('NabavkaPopUpComponent', () => {
  let component: NabavkaPopUpComponent;
  let fixture: ComponentFixture<NabavkaPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NabavkaPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NabavkaPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
