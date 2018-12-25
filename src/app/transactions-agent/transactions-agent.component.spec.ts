import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsAgentComponent } from './transactions-agent.component';

describe('TransactionsAgentComponent', () => {
  let component: TransactionsAgentComponent;
  let fixture: ComponentFixture<TransactionsAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
