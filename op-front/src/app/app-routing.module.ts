import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CompanyComponent } from './homepage/side-bar/company/company.component';
import { NabavkaComponent } from './homepage/side-bar/nabavka/nabavka.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'preduzece', component: CompanyComponent},
  {path: 'javne_nabavke', component: NabavkaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
