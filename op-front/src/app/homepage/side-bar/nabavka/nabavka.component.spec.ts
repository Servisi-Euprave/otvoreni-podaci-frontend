import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NabavkaComponent } from './nabavka.component';

describe('NabavkaComponent', () => {
  let component: NabavkaComponent;
  let fixture: ComponentFixture<NabavkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NabavkaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NabavkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
