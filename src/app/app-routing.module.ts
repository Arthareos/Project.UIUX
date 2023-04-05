import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementHomepageComponent } from './components/management-homepage/management-homepage.component';

const routes: Routes = [
    { path: '', component: ManagementHomepageComponent },

    // otherwise redirect to 404
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
