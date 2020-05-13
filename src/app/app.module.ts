import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { CustomTextComponent } from './custom-text/custom-text.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CustomCheckboxComponent } from './custom-checkbox/custom-checkbox.component';
import { HeaderComponent } from './header/header.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CustomSelectComponent } from './custom-select/custom-select.component';
import { CustomTextareaComponent } from './custom-textarea/custom-textarea.component';
import { CustomDatepcikerComponent } from './custom-datepciker/custom-datepciker.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomTextComponent,
    CustomButtonComponent,
    CreateAccountComponent,
    CustomCheckboxComponent,
    HeaderComponent,
    SidebarComponent,
    UserProfileComponent,
    CustomSelectComponent,
    CustomTextareaComponent,
    CustomDatepcikerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
