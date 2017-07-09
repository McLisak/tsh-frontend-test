import {Component, OnInit} from '@angular/core';
import {Payment} from '../payment';
import {Pagination} from '../pagination';
import {PaymentsService} from '../payments.service';
@Component({
    selector: 'app-payments',
    templateUrl: './payments.component.html',
    styleUrls: ['./payments.component.scss'],
    providers: [PaymentsService]
})
export class PaymentsComponent implements OnInit {

    payments: Payment[];
    selectedPayment: Payment;
    pagination: Pagination;

    query: string = "";
    rating: number = 0;
    pageLink: string = "";

    constructor(private paymentsService: PaymentsService) {

    }

    ngOnInit() {
        this.getPayments();

    }

    getPayments(): void {
        this.paymentsService
            .getPayments()
            .then(
                response => {
                    this.payments = response.payments;
                    this.pagination = response.pagination
                }
            );
    }

    selectPayment(payment: Payment) {
        console.log(this.pagination);
        this.selectedPayment = payment;
        console.log(this.selectedPayment);
    }

    search() {
        console.log(this.query, this.rating);
    }

    reset() {
        this.query = "";
        this.rating = 0;
    }

    setPage(page: string) {
        this.pageLink = page;
        console.log(this.pageLink);
    }
}
