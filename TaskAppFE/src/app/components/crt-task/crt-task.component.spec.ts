import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrtTaskComponent } from './crt-task.component';

describe('CrtTaskComponent', () => {
  let component: CrtTaskComponent;
  let fixture: ComponentFixture<CrtTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrtTaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrtTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
