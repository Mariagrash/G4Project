import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WithFillingsComponent } from './with-fillings/with-fillings.component';
import { NoFillingsComponent } from './no-fillings/no-fillings.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { BakerComponent } from './baker/baker.component';
import { CRUDComponent } from './crud/crud.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [

  {path: 'sign-in-component', component: SignInComponent},
  {path: 'sign-up-component', component: SignUpComponent},
  {path: 'with-fillings-component', component: WithFillingsComponent},
  {path: 'no-fillings-component', component: NoFillingsComponent},
  {path: 'home-component', component: HomeComponent},
  {path: 'admin-component', component: AdminComponent},
  {path: 'baker-component', component: BakerComponent},
  {path: 'crud-component', component: CRUDComponent},
  {path: 'user-cart/:price/:image/:name', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
