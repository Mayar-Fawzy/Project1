import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowApiDataComponent } from './show-api-data.component';

describe('ShowApiDataComponent', () => {
  let component: ShowApiDataComponent;
  let fixture: ComponentFixture<ShowApiDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowApiDataComponent]
    });
    fixture = TestBed.createComponent(ShowApiDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
