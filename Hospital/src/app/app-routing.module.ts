import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllFreeCheckupsComponent } from './admin/all-free-checkups/all-free-checkups.component';
import {AuthComponent} from './auth/auth.component';
import { OnlineConsultComponent } from './online-consult/online-consult.component';


const routes: Routes = [
      {path:'Auth',component:AuthComponent},
      {path:'Online-Consult',component:OnlineConsultComponent},
      {path:'All-FreeCheckups',component:AllFreeCheckupsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
