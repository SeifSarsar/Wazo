import { LoginPageComponent } from "../app/component/login-page/login-page.component";
import { SignupPageComponent } from "../app/component/signup-page/signup-page.component";
import { HomePageComponent } from "../app/component/home-page/home-page.component";
import { ProfilePageComponent } from 'src/app/component/profile-page/profile-page.component';
import { DonationDescriptionComponent } from 'src/app/component/donation-description/donation-description.component';

export const routes = [
  { path: "", component: HomePageComponent },
  { path: "login", component: LoginPageComponent },
  { path: "signup", component: SignupPageComponent },
  { path: "profile", component: ProfilePageComponent},
  { path: "donation", component: DonationDescriptionComponent}
];

//ex :  { path: '', component: ProductListComponent },
