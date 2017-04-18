import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { FeaturedComponent } from './featured/featured.component';

import { FeaturedServiceService } from './services/featured-service.service';
import { ScheduleServiceService } from './services/schedule-service.service';
import { FeaturedNewComponent } from './featured-new/featured-new.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    FeaturedComponent,
    FeaturedNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [FeaturedServiceService, ScheduleServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
