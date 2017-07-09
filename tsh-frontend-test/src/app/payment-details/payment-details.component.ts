import {Component, OnInit} from '@angular/core';
import {Payment} from '../payment';
@Component({
    selector: 'app-payment-details',
    templateUrl: './payment-details.component.html',
    styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit {

    payment: Payment;

    constructor() {
    }

    ngOnInit() {
    }

    closeModal(){

    }


}
