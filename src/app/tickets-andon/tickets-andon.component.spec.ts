import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsAndonComponent } from './tickets-andon.component';

describe('TicketsAndonComponent', () => {
  let component: TicketsAndonComponent;
  let fixture: ComponentFixture<TicketsAndonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketsAndonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketsAndonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
