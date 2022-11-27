// creating event listener for the name input
const inputName = document.getElementById('name')
inputName.addEventListener('keyup', () => {
    
    const cardName = document.querySelector('.card_name')

    cardName.textContent = ''

    cardName.appendChild(document.createTextNode(inputName.value))
})

// event listener for number input
const InputNumber = document.getElementById('number')

const numError = document.querySelector('.num_error')


InputNumber.addEventListener('keyup', (e) => {
    // console.log(e.key)
    if (isNaN(InputNumber.value)){

        numError.innerHTML = 'wrong format, numbers only';

        InputNumber.style.borderColor = 'rgba(255, 0, 0, 0.661)';

        return false
    }

    const cardNumber = document.querySelector('.cardNum')

    cardNumber.textContent = '';

    numError.textContent = '';

    InputNumber.style.borderColor = ''


    cardNumber.appendChild(document.createTextNode(InputNumber.value))
})

// event listener for month date
const monthInput = document.getElementById('date')

const dateError = document.querySelector('.date_error')

monthInput.addEventListener('keyup', () => {
    if(isNaN(monthInput.value)){
        
        dateError.innerHTML = 'wrong format, numbers only';

        monthInput.style.borderColor = 'rgba(255, 0, 0, 0.661)';

        return false

    }

    const cardMonth = document.getElementById('month');

    cardMonth.textContent = ''

    dateError.textContent = '';

    monthInput.style.borderColor = ''

    cardMonth.appendChild(document.createTextNode(monthInput.value))
})

// event listener for year day
const yearInput = document.getElementById('year_date')

    yearInput.addEventListener('keyup', () => {
    
    if(isNaN(yearInput.value)){
    
        dateError.innerHTML = 'wrong format, numbers only';

        yearInput.style.borderColor = 'rgba(255, 0, 0, 0.661)';

        return false

    }
    const cardYear = document.getElementById('year');

    cardYear.textContent = ''

    dateError.textContent = '';

    yearInput.style.borderColor = ''

    cardYear.appendChild(document.createTextNode(yearInput.value))
})

// event listener for cvc
const cvcInput = document.getElementById('cvc')

const cvcError = document.querySelector('.cvc_error')

cvcInput.addEventListener('keyup', () => {

    if(isNaN(cvcInput.value)){
    
        cvcError.innerHTML = 'wrong format, numbers only';

        cvcInput.style.borderColor = 'rgba(255, 0, 0, 0.661)';

        return false

    }
    const cardCvc = document.getElementById('_cvc')

    cardCvc.textContent = ''

    cvcError.innerHTML = '';

    cvcInput.style.borderColor = '';

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
