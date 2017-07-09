import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Where your money goes';
    subtitle = 'Payments made by Chichester District Council to individual suppliers with a value over £500 made within October.';
}
