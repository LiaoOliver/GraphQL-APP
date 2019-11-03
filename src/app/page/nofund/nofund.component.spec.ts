import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NofundComponent } from './nofund.component';

describe('NofundComponent', () => {
  let component: NofundComponent;
  let fixture: ComponentFixture<NofundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NofundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NofundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
