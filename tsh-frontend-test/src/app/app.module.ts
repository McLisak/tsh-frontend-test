import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {PaymentsComponent} from './payments/payments.component';
import {KeysPipe} from './keys.pipe';

@NgModule({
    declarations: [
        AppComponent,
        PaymentsComponent,
        KeysPipe,
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}
