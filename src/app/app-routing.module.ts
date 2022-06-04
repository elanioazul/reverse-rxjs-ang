import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PizarraComponent } from './components/pizarra/pizarra.component';
const appRoutes: Routes = [
  {
    path: 'reverse-obs',
    component: AppComponent
  },
  {
    path: 'normal-obs',
    component: PizarraComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      useHash: true,
      anchorScrolling: 'enabled'
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
