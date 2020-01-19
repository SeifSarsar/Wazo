import { LoginPageComponent } from "../app/login-page/login-page.component";
import { SignupPageComponent } from "../app/signup-page/signup-page.component";
import { HomePageComponent } from "../app/home-page/home-page.component";
import { ProfilePageComponent } from 'src/app/profile-page/profile-page.component';
import {LeaderboardComponent} from 'src/app/leaderboard/leaderboard.component';
export const routes = [
  { path: "", component: HomePageComponent },
  { path: "login", component: LoginPageComponent },
  { path: "signup", component: SignupPageComponent },
  { path: "profile/:id", component: ProfilePageComponent},
  { path: "leaderboard", component: LeaderboardComponent}
];

//ex :  { path: '', component: ProductListComponent },
