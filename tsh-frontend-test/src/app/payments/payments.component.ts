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
    missingPaymentsMsg = "Could not load payments. Please try again.";
    selectedPayment: Payment;
    pagination: Pagination;
    paymentDetailsModal = false;

    query: string = "";
    rating: number = 0;

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

    togglePaymentDetails(payment?: Payment) {
        if (payment) this.selectedPayment = payment;
        this.paymentDetailsModal = !this.paymentDetailsModal;
    }


    search() {
        this.pagination.current = 0;
        let params = {
            query: this.query,
            rating: this.rating
        };
        this.paymentsService.searchPayments(params)
            .then(
                response => {
                    this.payments = response.payments;
                    this.pagination = response.pagination;
                }
            );
    }

    setPage(page: any, jump?: number) {
        let params: any = {};
        if (jump) {
            page = parseInt(page) + jump;
        }
        if (page > 0) params.page = page;
        if (this.query.length > 0) params.query = this.query;
        if (this.rating != 0) params.rating = this.rating;
        this.paymentsService.searchPayments(params)
            .then(
                response => {
                    this.payments = response.payments;
                    this.pagination = response.pagination;
                }
            );
    }

    reset() {
        this.query = "";
        this.rating = 0;
        this.pagination.current = 0;
        this.getPayments();
    }

}
