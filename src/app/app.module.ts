import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { AuthComponent } from "./layouts/auth/auth.component";

import { LoginComponent } from "./layouts/auth/login/login.component";
import { RegisterComponent } from "./layouts/auth/register/register.component";

import { AuthNavbarComponent } from "./components/auth/auth-navbar/auth-navbar.component";

@NgModule({
    declarations: [
        AppComponent,
        AuthNavbarComponent,
        AuthComponent,
        LoginComponent,
        RegisterComponent,
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }