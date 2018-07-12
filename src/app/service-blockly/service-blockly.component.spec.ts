import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBlocklyComponent } from './service-blockly.component';

describe('ServiceBlocklyComponent', () => {
  let component: ServiceBlocklyComponent;
  let fixture: ComponentFixture<ServiceBlocklyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceBlocklyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceBlocklyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
