import { ModuleWithComponentFactories, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const module = [
  RouterOutlet,
  RouterModule,
  ReactiveFormsModule,
  CommonModule,
  FormsModule,
]

@NgModule({
  declarations: [],
  imports: [
    module,CommonModule
  ], exports: [module]
})
export class SharedModule {}
