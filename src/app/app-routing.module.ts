import { PageComponent } from 'ibm-wch-sdk-ng';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
        path: '',
        redirectTo: '/home/',
        pathMatch: 'full'
      },
      {
        path: '**',
        component: PageComponent
      }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
