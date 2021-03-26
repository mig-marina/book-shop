import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleHostStyleComponent } from './example-host-style.component';

describe('ExampleHostStyleComponent', () => {
  let component: ExampleHostStyleComponent;
  let fixture: ComponentFixture<ExampleHostStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleHostStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleHostStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
