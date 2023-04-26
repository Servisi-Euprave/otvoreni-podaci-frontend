import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CompanyComponent } from './homepage/side-bar/company/company.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'preduzece', component: CompanyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
