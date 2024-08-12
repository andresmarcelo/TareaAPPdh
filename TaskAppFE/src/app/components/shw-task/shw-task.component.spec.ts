import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShwTaskComponent } from './shw-task.component';

describe('ShwTaskComponent', () => {
  let component: ShwTaskComponent;
  let fixture: ComponentFixture<ShwTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShwTaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShwTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
