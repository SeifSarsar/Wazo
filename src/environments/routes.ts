import { LoginPageComponent } from "../app/login-page/login-page.component";
import { SignupPageComponent } from "../app/signup-page/signup-page.component";
import { HomePageComponent } from "../app/home-page/home-page.component";
import { ProfilePageComponent } from "src/app/profile-page/profile-page.component";
import { LeaderboardComponent } from "src/app/leaderboard/leaderboard.component";
import { DonationPageComponent } from "src/app/donation-page/donation-page.component";

export const routes = [
  { path: "", component: HomePageComponent },
  { path: "login", component: LoginPageComponent },
  { path: "signup", component: SignupPageComponent },
  { path: "profile/:id", component: ProfilePageComponent },
  { path: "leaderboard", component: LeaderboardComponent },
  { path: "donation/:id", component: DonationPageComponent }
];

//ex :  { path: '', component: ProductListComponent },
