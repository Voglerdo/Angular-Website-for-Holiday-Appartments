import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  openGoogleMaps() {
    window.open(
      'https://www.google.de/maps/place/G%C3%A4stehaus+Gabi+und+Joachim+Vogler+Ferienwohnungen+in+Kornau+bei+Oberstdorf/@47.4054805,10.2418512,15z/data=!4m6!3m5!1s0x479c9b8b5e17e291:0x4fca7e2386b9a204!8m2!3d47.4054805!4d10.2418512!16s%2Fg%2F1tf7wpvm?hl=de&entry=ttu',
      '_blank'
    );
  }
}
