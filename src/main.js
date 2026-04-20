import './style.css'
import { calculateCompoundInterest } from './calc'

document.querySelector('#app').innerHTML = `
  <div class="card">
    <h1>Ränta-på-ränta-kalkylator</h1>

    <label for="startAmount">Startbelopp</label>
    <input id="startAmount" type="number" value="10000" />

    <label for="monthlySave">Månadssparande</label>
    <input id="monthlySave" type="number" value="500" />

    <label for="years">Antal år</label>
    <input id="years" type="number" value="10" />

    <label for="annualRate">Årsränta (%)</label>
    <input id="annualRate" type="number" value="7" />

    <button id="calculateBtn">Beräkna</button>

    <h2 id="result">Resultat: -</h2>
  </div>
`

document.querySelector('#calculateBtn').addEventListener('click', () => {
    const startAmount = Number(document.querySelector('#startAmount').value)
    const monthlySave = Number(document.querySelector('#monthlySave').value)
    const years = Number(document.querySelector('#years').value)
    const annualRate = Number(document.querySelector('#annualRate').value)

    try {
        const result = calculateCompoundInterest(startAmount, monthlySave, years, annualRate)
        document.querySelector('#result').textContent = `Resultat: ${result} kr`
    } catch (error) {
        document.querySelector('#result').textContent = `Fel: ${error.message}`
    }
})