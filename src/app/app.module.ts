import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from "./shared/component/header/header.component";
import { FooterComponent } from "./shared/component/footer/footer.component";
import { LoginComponent } from "./module/security/login/login.component";
import { LayoutComponent } from './module/layout/portal-layout/layout.component';
import { AppComponent } from "./app-component/app.component";
import { AppRoutes } from "./routing/app.routing";
import { ResolveService } from "./routing/gards/resolve.service";
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { DashboardLayoutComponent } from './module/layout/dashboard-layout/dashboard-layout.component';
import { AboutUsComponent } from './module/about-us/about-us.component';
import { ClientComponent } from './module/client/client.component';
import { ContactComponent } from './module/contact/contact.component';
import { HomeComponent } from './module/home/home.component';
import { SubClientComponent } from './module/client/sub-client/sub-client.component';
import { SubjectDataSharingService } from "./shared/services/subject-data-sharing.service";
import { ParentComponent } from './module/custom-twoway-binding/parent/parent.component';
import { ChildComponent } from './module/custom-twoway-binding/child/child.component';
import { ChildAboutUsComponent } from './module/about-us/child-about-us/child-about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LayoutComponent,
    DashboardComponent,
    DashboardLayoutComponent,
    AboutUsComponent,
    ClientComponent,
    ContactComponent,
    HomeComponent,
    SubClientComponent,
    ParentComponent,
    ChildComponent,
    ChildAboutUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [ResolveService, SubjectDataSharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
