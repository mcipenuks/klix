interface MonthlyPaymentPayload {
    amount: number|string,
    language: string,
    brandId: string,
}

interface MonthlyPaymentResponse {
    commissionAmount: number,
    downPaymentAmount: number,
    financingProductType: FinancingProductType,
    gracePeriodPaymentCount: number,
    interestRate: number,
    merchantCountry: MerchantCountry,
    monthlySplitPaymentAmount: number,
    numberOfPayments: number,
    principalAmount: number,
}

type FinancingProductType = 'INSTALLMENT_CREDIT' | 'GRACE_PERIOD';
type MerchantCountry = 'LVA';