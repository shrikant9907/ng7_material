import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {
  MatMenuModule,
  MatDialogModule,
  MatTabsModule,
  MatInputModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatCardModule,
  MatSidenavModule,
  MatButtonModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatButtonToggleModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatRadioModule,
  MatSliderModule,
  MatStepperModule,
  MatExpansionModule,
  MatChipsModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatTableModule,
  MatBadgeModule,
  MatSortModule,
  MatPaginatorModule,
  MatGridListModule,
  MatNativeDateModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LayoutComponent } from './layouts/layout/layout.component';

import { HttpService } from './services/http.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    HomeComponent,
    ProfileComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatMenuModule,
    MatDialogModule,
    MatTabsModule,
    MatInputModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSliderModule,
    MatStepperModule,
    MatExpansionModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTableModule,
    MatBadgeModule,
    MatSortModule,
    MatPaginatorModule,
    MatGridListModule,
    MatNativeDateModule
  ],
  providers: [
    HttpService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
