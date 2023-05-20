import { Component, Prop, State, Watch, h } from '@stencil/core';
import { fetchMonthlyPayment } from 'api';

@Component({
    tag: 'klix-pay-later',
    styleUrl: 'pay-later.scss',
    shadow: true,
})

export class PayLater {
    @Prop() amount: string;
    @Prop() language: string;
    @Prop() brandId: string;

    @State() isLoading: boolean = false;
    @State() paymentData: MonthlyPaymentResponse = null;

    @Watch('amount')
    onAmountChanged() {
        this.fetchPayment();
    }

    async fetchPayment() {
        if (!this.isValidAttributes()) {
            return;
        }

        this.isLoading = true;

        this.paymentData = await fetchMonthlyPayment({
            amount: this.amount,
            language: this.language,
            brandId: this.brandId,
        });

        this.isLoading = false;
    }

    isValidAttributes() {
        if (!this.amount || !this.language || !this.brandId) {
            console.warn('[Klix] Make sure you provided all the required attributes: "amount", "language", "brand-id"');
            return false;
        }

        return true;
    }

    componentWillLoad() {
        this.fetchPayment();
    }

    render() {
        if (!this.paymentData) {
            return;
        }

        return (
            <div class={`pay-later-wrapper ${this.isLoading ? 'loading' : ''}`}>
                <div class="loader"></div>
                <p>Pay within 6 months without interest or repay within { this.paymentData.numberOfPayments } months from €{this.paymentData.monthlySplitPaymentAmount}/mo.</p>
            </div>
        );
    }
}
