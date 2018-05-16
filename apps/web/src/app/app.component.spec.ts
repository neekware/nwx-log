import { TestBed, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';

import { CfgModule, AppCfg, CFG_OPTIONS } from 'pkgs/cfg';

import { AppComponent } from './app.component';

const AppEnv: AppCfg = {
  appName: '@nwx/cfg',
  production: false
};

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule, CfgModule.forRoot(AppEnv)],
      providers: [{ provide: CFG_OPTIONS, useValue: AppEnv }],
      declarations: [AppComponent]
    }).compileComponents();
  }));
  it('should create the @nwx/cfg', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title '@nwx/cfg'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('@nwx/cfg');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to @nwx/cfg!');
  }));
});
