import { Component, Prop, State, Watch, h } from '@stencil/core';
import { fetchMonthlyPayment } from 'api';
import { getComponentTranslations } from 'utils/translations';
import { formatText } from 'utils/formatting/formatting';
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
    @State() i18n;

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

    async componentWillLoad() {
        this.i18n = await getComponentTranslations('pay-later', this.language);
        this.fetchPayment();
    }

    render() {
        if (!this.paymentData) {
            return;
        }

        return (
            <div class={`pay-later-widget ${this.isLoading ? 'loading' : ''}`}>
                <klix-loader isVisible={this.isLoading}></klix-loader>
                <p innerHTML={formatText(this.i18n.installment_pay_within, this.paymentData.numberOfPayments, this.paymentData.monthlySplitPaymentAmount)}></p>
                <img class="pay-later-logo" src={logo} alt="klix pay later logo" height="40" />
            </div>
        );
    }
}
