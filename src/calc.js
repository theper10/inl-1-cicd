export function calculateCompoundInterest(startAmount, monthlySave, years, annualRate) {
    if (startAmount < 0 || monthlySave < 0 || years < 0 || annualRate < 0) {
        throw new Error('Värden kan inte vara negativa')
    }

    const months = years * 12
    const monthlyRate = annualRate / 100 / 12
    let total = startAmount

    for (let i = 0; i < months; i++) {
        total = total * (1 + monthlyRate) + monthlySave
    }

    return Number(total.toFixed(2))
}