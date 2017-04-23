import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//APP Components
import { UserComponent } from './user/user.component';
import { FeaturedComponent } from './featured/featured.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { FeaturedNewComponent } from './featured-new/featured-new.component';


const routes: Routes    = [
  {
    path: '',
    children: []
  },
  {
    path:                 'schedule',
    component:            ScheduleComponent
  },
  {
    path:                 'featured',
    component:            FeaturedComponent
  },
  {
    path:                 'login',
    component:            UserComponent
  },
  {
    path:                 'featurednew',
    component:            FeaturedNewComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
