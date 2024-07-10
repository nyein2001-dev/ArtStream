
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoute } from "./app.routes";
import { AppComponent } from "./app.component";

import { AuthComponent } from "./layouts/auth/auth.component";

import { LoginComponent } from "./layouts/auth/login/login.component";
import { RegisterComponent } from "./layouts/auth/register/register.component";

import { IndexComponent } from "./layouts/index.component";

@NgModule({
    declarations: [
      AppComponent,
      AuthComponent,
      LoginComponent,
      RegisterComponent,
      IndexComponent,
    ],
    imports: [BrowserModule, AppRoute],
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule {}