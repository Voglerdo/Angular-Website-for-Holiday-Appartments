import { Component } from '@angular/core';
import { faMountain } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ferienwohnungen',
  templateUrl: './ferienwohnungen.component.html',
  styleUrls: ['./ferienwohnungen.component.scss']
})
export class FerienwohnungenComponent {
  faMountain = faMountain;
  activeTab = 'Rubihorn';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}