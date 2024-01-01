import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { FerienwohnungenComponent } from './ferienwohnungen/ferienwohnungen.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTabsModule } from '@angular/material/tabs';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { TabViewModule } from 'primeng/tabview';
import { NebelhornComponent } from './nebelhorn/nebelhorn.component';
import { RubihornComponent } from './rubihorn/rubihorn.component';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { BewertungenComponent } from './bewertungen/bewertungen.component';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    KontaktComponent,
    FerienwohnungenComponent,
    FooterComponent,
    HomeComponent,
    NebelhornComponent,
    RubihornComponent,
    BewertungenComponent,

  ],
  imports: [
    BrowserModule,
     AppRoutingModule,
    // MatToolbarModule,
     MatIconModule,
     MatMenuModule,
     BrowserAnimationsModule,
     NgbModule,
     TabViewModule,
     NgbNavModule,
    // MatTabsModule,
     CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  faHome = faHome;
  faUser = faUser;
  faEnvelope = faEnvelope;
}
