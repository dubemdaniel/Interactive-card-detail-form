// creating event listener for the name input
const inputName = document.getElementById('name')
inputName.addEventListener('keyup', () => {
    
    const cardName = document.querySelector('.card_name')

    cardName.textContent = ''

    cardName.appendChild(document.createTextNode(inputName.value))
})

// event listener for number input
const InputNumber = document.getElementById('number')

InputNumber.addEventListener('keyup', (e) => {
    // console.log(e.key)
    

    const cardNumber = document.querySelector('.cardNum')

    cardNumber.textContent = ''

    cardNumber.appendChild(document.createTextNode(InputNumber.value))
})

// event listener for month date
const monthInput = document.getElementById('date')

monthInput.addEventListener('keyup', () => {

    const cardMonth = document.getElementById('month');

    cardMonth.textContent = ''

    cardMonth.appendChild(document.createTextNode(monthInput.value))
})

// event listener for year day
const yearInput = document.getElementById('year_date')

    yearInput.addEventListener('keyup', () => {

    const cardYear = document.getElementById('year');

    cardYear.textContent = ''

    cardYear.appendChild(document.createTextNode(yearInput.value))
})

// event listener for cvc
const cvcInput = document.getElementById('cvc')

cvcInput.addEventListener('keyup', () => {

    const cardCvc = document.getElementById('_cvc')

    cardCvc.textContent = ''

    

    cardCvc.appendChild(document.createTextNode(cvcInput.value))
})

// event listener for submit
const submitAll = document.getElementById('submit')

submitAll.addEventListener('submit', (e) => {

    const inputName = document.getElementById('name')

    inputName.value = ''

    if (inputName.value === ''){

        // const nameError = document.getElementById('name_error');

        // nameError.innerHTML = 'please input card name...'



        console.log('ur pa')
      }

    e.preventDefault
    
})



// myInput.oninput = function () {
//     if (this.value.length > 4) {
//         this.value = this.value.slice(0,4); 
//     }
// }
