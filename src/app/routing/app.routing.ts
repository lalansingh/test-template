
import { Routes } from "@angular/router";
import { LoginComponent } from "../module/security/login/login.component";
import { LayoutComponent } from "../module/layout/portal-layout/layout.component";
import { ResolveService } from "./gards/resolve.service";
import { DashboardLayoutComponent } from "../module/layout/dashboard-layout/dashboard-layout.component";
import { DashboardComponent } from "../module/dashboard/dashboard.component";
import { HomeComponent } from "../module/home/home.component";
import { AboutUsComponent } from "../module/about-us/about-us.component";
import { ClientComponent } from "../module/client/client.component";
import { ContactComponent } from "../module/contact/contact.component";
import { ParentComponent } from "../module/custom-twoway-binding/parent/parent.component";

export const AppRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: '', component: LayoutComponent, data: { title: 'Layout Views' },
        children: [
            {
                path: 'custom-twoway-binding', component: ParentComponent, pathMatch: 'full'
                //,resolve: { account: ResolveService }
            },
            { path: 'home', component: HomeComponent, pathMatch: 'full' },
            { path: 'about', component: AboutUsComponent, pathMatch: 'full' },
            { path: 'client', component: ClientComponent, pathMatch: 'full' },
            { path: 'contact', component: ContactComponent, pathMatch: 'full' },
        ]
    },
    {
        path: '', component: DashboardLayoutComponent,
        children: [
            {
                path: 'dashboard', component: DashboardComponent, pathMatch: 'full'
            }
        ]
    },
    { path: '**', redirectTo: 'login' },
];
