/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TitlelineComponent } from './titleline.component';

describe('TitlelineComponent', () => {
  let component: TitlelineComponent;
  let fixture: ComponentFixture<TitlelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitlelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
