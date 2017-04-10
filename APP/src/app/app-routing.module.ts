import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//APP Components
import { FeaturedComponent } from './featured/featured.component';
import { ScheduleComponent } from './schedule/schedule.component';

                        
const routes: Routes    = [
  {
    path: '',
    children: []
  },
  {
  path:                 'featured',
  component:            FeaturedComponent
  },

  {
    path:               'schedule',
    component:          ScheduleComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
