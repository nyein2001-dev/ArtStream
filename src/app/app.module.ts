import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { AuthComponent } from "./layouts/auth/auth.component";

import { LoginComponent } from "./layouts/auth/login/login.component";
import { RegisterComponent } from "./layouts/auth/register/register.component";

import { AuthNavbarComponent } from "./components/auth/auth-navbar/auth-navbar.component";
import { FooterSmallComponent } from "./components/auth/footers/footer-small/footer-small.component";

import { BoardComponent } from "./layouts/board/board.component";
import { HomeComponent } from "./layouts/board/home/home.component";
import { HeaderComponent } from "./components/board/header/header.component";
import { NavbarComponent } from "./components/board/navbar/navbar.component";
import { TabsComponent } from "./components/board/tabs/tabs.component";

@NgModule({
    declarations: [
        AppComponent,
        AuthComponent,
        LoginComponent,
        RegisterComponent,
        AuthNavbarComponent,
        FooterSmallComponent,
        BoardComponent,
        HomeComponent,
        HeaderComponent,
        NavbarComponent,
        TabsComponent
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }