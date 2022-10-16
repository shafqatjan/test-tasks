import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraTaskComponent } from './extra-task.component';

describe('ExtraTaskComponent', () => {
  let component: ExtraTaskComponent;
  let fixture: ComponentFixture<ExtraTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtraTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
