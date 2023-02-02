// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';


const dice = document.getElementById('dice')
const number = document.getElementById('number')
const advice = document.getElementById('advice')

const newAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then( data => {
    console.log(data.slip.advice)
      number.textContent = `advice #${data.slip.id}`
      advice.textContent = `"${data.slip.advice}"`
    });
}
newAdvice()

dice.addEventListener('click', () => {
    newAdvice()
})

  
