import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const TEMPLATES_TO_EXPORT = [];

const COMPONENTS_TO_EXPORT = [];

@NgModule({
  imports: [CommonModule],
  exports: [...TEMPLATES_TO_EXPORT, ...COMPONENTS_TO_EXPORT],
  declarations: [...TEMPLATES_TO_EXPORT, ...COMPONENTS_TO_EXPORT],
})
export class SharedModule {}
