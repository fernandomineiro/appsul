import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BPage } from './b.page';

describe('BPage', () => {
  let component: BPage;
  let fixture: ComponentFixture<BPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
