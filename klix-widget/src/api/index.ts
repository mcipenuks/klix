import { API_BASE_URL } from "../utils/env";

export const fetchMonthlyPayment = async (payload: MonthlyPaymentPayload): Promise<MonthlyPaymentResponse>|null => {
    try {
        const response = await fetch(`${API_BASE_URL}/financing/monthly-payment?amount=${payload.amount}&language=${payload.language}&b=${payload.brandId}`);

        if (response.status === 200) { 
            return await response.json();
        } 

        return null;
    } catch (e) {
        // Handle errors if needed
        console.error(e);
    }
}