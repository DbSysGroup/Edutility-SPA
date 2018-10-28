// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// Angular Material
import { MaterialModule } from './material';

// Servies
import { AuthService } from './services/auth.service';
import { AuthguardService } from './services/authguard.service';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { CreateSetComponent } from './components/create-set/create-set.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthButtonsComponent } from './components/auth-buttons/auth-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    CreateSetComponent,
    LoginComponent,
    SignupComponent,
    AuthButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthService,
    AuthguardService,
    SignupComponent,
    LoginComponent
  ],
  bootstrap: [AppComponent],
  entryComponents: [ 
    LoginComponent,
    SignupComponent
  ]
})
export class AppModule { }
