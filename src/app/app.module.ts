import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppService } from './services/app.service';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    SharedModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
