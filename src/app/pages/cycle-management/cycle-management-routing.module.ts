import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CycleManagementPage } from './cycle-management.page';

const routes: Routes = [
  {
    path: '',
    component: CycleManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CycleManagementPageRoutingModule {}
