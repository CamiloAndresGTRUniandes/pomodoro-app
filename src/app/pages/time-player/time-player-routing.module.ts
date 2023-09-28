import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimePlayerPage } from './time-player.page';

const routes: Routes = [
  {
    path: '',
    component: TimePlayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimePlayerPageRoutingModule {}
