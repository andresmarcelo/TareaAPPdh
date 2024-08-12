import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnfTaskComponent } from './cnf-task.component';

describe('CnfTaskComponent', () => {
  let component: CnfTaskComponent;
  let fixture: ComponentFixture<CnfTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CnfTaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CnfTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
