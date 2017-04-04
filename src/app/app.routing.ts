import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { SuccessComponent } from './success/success.component';
import { FailureComponent } from './failure/failure.component';
import { ScenarioComponent } from './scenario/scenario.component';

const appRoutes: Routes = [
  {
    path: '',
    component: StartComponent
  },
  {
    path: 'failure',
    component: FailureComponent
  },
  {
    path: 'success',
    component: SuccessComponent
  },
  {
    path: 'scenario/:id',
    component: ScenarioComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
