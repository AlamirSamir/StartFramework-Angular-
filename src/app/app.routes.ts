import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProtfolioComponent } from './protfolio/protfolio.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path: "" , component:HomeComponent , title:"Home" },
    {path: "about", component:AboutComponent , title:"About"},
    {path: "contact", component:ContactComponent , title:"Contact"},
    {path: "protfolio", component:ProtfolioComponent, title:"Protfolio"},
    {path: "**" , component:NotFoundComponent , title: "Error404"}
];
