import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '@shared/shared.module';
import { throwIfAlreadyLoaded } from '@utils/module.utils';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, SharedModule.forRoot()],
  declarations: [],
  exports: [],
  entryComponents: [],
  providers: [],
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
