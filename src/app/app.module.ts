import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AgmCoreModule } from "@agm/core";
import { routes } from "../environments/routes";
import { environment } from "../environments/environment";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

//Components
import { GoogleMapsComponent } from "./component/google-maps/google-maps.component";
import { HomePageComponent } from "./component/home-page/home-page.component";
import { LoginPageComponent } from "./component/login-page/login-page.component";
import { SignupPageComponent } from "./component/signup-page/signup-page.component";
import { NavbarComponent } from './component/navbar/navbar.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { ProfilePageComponent } from './component/profile-page/profile-page.component';
import { DonationDescriptionComponent } from './component/donation-description/donation-description.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapsComponent,
    HomePageComponent,
    LoginPageComponent,
    SignupPageComponent,
    SidebarComponent,
    ProfilePageComponent,
    NavbarComponent,
    SidebarComponent,
    DonationDescriptionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
