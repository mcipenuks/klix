import { Component, Prop, State, Watch, h } from '@stencil/core';
import { fetchMonthlyPayment } from 'api';
import logo from '../../assets/img/klix-pay-later-logo.svg';

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
            <div class={`pay-later-widget ${this.isLoading ? 'loading' : ''}`}>
                <klix-loader isVisible={this.isLoading}></klix-loader>
                <p>Pay within <strong>{ this.paymentData.numberOfPayments }</strong> months from <strong>€{this.paymentData.monthlySplitPaymentAmount} /mo</strong>.</p>
                <img class="pay-later-logo" src={logo} alt="klix pay later logo" height="40" />
            </div>
        );
    }
}
