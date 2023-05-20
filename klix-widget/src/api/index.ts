export const API_BASE_URL = 'https://api.stage.klix.app';

export const fetchMonthlyPayment = async (payload: MonthlyPaymentPayload) => {
    try {
        const response = await fetch(`${API_BASE_URL}/financing/monthly-payment?amount=${payload.amount}&language=${payload.language}&b=${payload.brandId}`);
        console.warn(response);

        if (response.status === 200) { 
            return await response.json();
        } 

        return null;
    } catch (e) {
        // Handle errors if needed
        console.error(e);
    }
}