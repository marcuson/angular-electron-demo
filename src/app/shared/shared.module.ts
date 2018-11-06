import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatCheckboxModule],
  exports: [CommonModule, MatButtonModule, MatCheckboxModule],
  declarations: [],
  entryComponents: [],
})
export class SharedModule {
  // This should only be called inside the CoreModule!
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
