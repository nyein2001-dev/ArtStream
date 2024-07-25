import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';


@NgModule({ imports: [AuthRoutingModule, AngularSvgIconModule.forRoot()], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AuthModule { }
