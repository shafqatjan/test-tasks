import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/app/shared/shared.module';

import { GenerateFormJsonComponent } from './generate-form-json.component';

describe('GenerateFormJsonComponent', () => {
  let component: GenerateFormJsonComponent;
  let fixture: ComponentFixture<GenerateFormJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateFormJsonComponent ],
      imports: [SharedModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateFormJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
