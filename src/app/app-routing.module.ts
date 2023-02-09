import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'
import { DispalyComponent } from './dispaly/dispaly.component';



const routes: Routes = [
  // { path: '', component: AppComponent },
  {path:'display', component: DispalyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
