import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KontaktComponent } from './kontakt/kontakt.component';

import { FerienwohnungenComponent } from './ferienwohnungen/ferienwohnungen.component';
import { HomeComponent } from './home/home.component';
import { BewertungenComponent } from './bewertungen/bewertungen.component';
import { RubihornComponent } from './rubihorn/rubihorn.component';
import { NebelhornComponent } from './nebelhorn/nebelhorn.component';
import { ImpressumComponent } from './impressum/impressum.component';


const routes: Routes = [
  { path: 'kontakt', component: KontaktComponent },
  { path: 'home', component: HomeComponent },
  { path: 'ferienwohnungen', component: FerienwohnungenComponent },
  { path: 'bewertungen', component: BewertungenComponent },
  { path: 'rubihorn', component: RubihornComponent },
  { path: 'nebelhorn', component: NebelhornComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  ]

;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
