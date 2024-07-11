import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {ContentComponent} from './components/content/content.component';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {UsersComponent} from './pages/users/users.component';
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {HttpClientModule} from "@angular/common/http";
import {MessagesModule} from "primeng/messages";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {InputNumberModule} from "primeng/inputnumber";
import {DropdownModule} from "primeng/dropdown";
import {TableModule} from "primeng/table";
import {PaginatorModule} from "primeng/paginator";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        InputTextModule,
        FormsModule,
        ButtonModule,
        RippleModule,
        HttpClientModule,
        MessagesModule,
        BrowserAnimationsModule,
        InputNumberModule,
        DropdownModule,
        TableModule,
        PaginatorModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
