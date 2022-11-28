// creating event listener for the name input
const inputName = document.getElementById('name')

const nameError = document.querySelector('.name_error')

inputName.addEventListener('keyup', () => {
    
    const cardName = document.querySelector('.card_name')

    cardName.textContent = ''

    nameError.innerHTML = ''

    inputName.style.borderColor = ""

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


    if(cardNumber.value >= 1 ){
        cardNumber.textContent = '';

    }else{
        cardNumber.textContent = '0000 0000 0000 0000';

    }

    
    numError.textContent = '';

    InputNumber.style.borderColor = ''

    let num = InputNumber.value

    let numSpace = num.match(/.{1,4}/g);

    cardNumber.innerHTML = numSpace.join(" ")


    // cardNumber.appendChild(document.createTextNode(InputNumber.value))
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

submitAll.addEventListener('click' , (e) => {

    if (!inputName.value) {
        nameError.innerHTML = "Can't be blank";
    
        inputName.style.borderColor = "rgba(255, 0, 0, 0.661)";

        return false;

      }else{
          nameError.innerHTML = ''

          inputName.style.borderColor = ""
      }
    
      if (!InputNumber.value) {
        //
        numError.innerHTML = "Can't be blank";
    
        InputNumber.style.borderColor = "rgba(255, 0, 0, 0.661)";
    
        return false;
      }
    
      if (!monthInput.value) {
        //
        dateError.innerHTML = "Can't be blank";
    
        monthInput.style.borderColor = "rgba(255, 0, 0, 0.661)";
    
        return false;
      }
    
      if (!yearInput.value) {
        //
        dateError.innerHTML = "Can't be blank";
    
        yearInput.style.borderColor = "rgba(255, 0, 0, 0.661)";
    
        return false;
      }
    
      if (!cvcInput.value) {
        //
        cvcError.innerHTML = "Can't be blank";
    
        cvcInput.style.borderColor = "rgba(255, 0, 0, 0.661)";
    
        return false;
      }

        const body = document.querySelector('.body')

        const thanks = document.querySelector('.thanks')
     
      body.style.display = 'none'

      thanks.style.display = 'block'


    e.preventDefault()
    
})



// myInput.oninput = function () {
//     if (this.value.length > 4) {
//         this.value = this.value.slice(0,4); 
//     }
// }
