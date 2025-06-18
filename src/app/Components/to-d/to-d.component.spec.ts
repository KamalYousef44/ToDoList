import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDComponent } from './to-d.component';

describe('ToDComponent', () => {
  let component: ToDComponent;
  let fixture: ComponentFixture<ToDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
