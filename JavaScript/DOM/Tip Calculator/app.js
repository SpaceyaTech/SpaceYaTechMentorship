// Add an event listener to the buttons
const buttons = Array.from(document.querySelectorAll('.tip-btn'))

// Lisening for a click event on all the buttons
buttons.forEach(button => {
        button.addEventListener('click', function(){ 
            const tipPercentage = parseInt(button.dataset.percentage) / 100;
            const billAmount = parseInt(document.querySelector('#bill-amount').value);
            const numberOfPeople = parseInt(document.querySelector('#number-of-people').value);          
            calculateTip(tipPercentage,billAmount,numberOfPeople);
        })    
})

function validateInput(){   
    const billAmount = parseInt(document.querySelector('#bill-amount').value);
    const numberOfPeople = parseInt(document.querySelector('#number-of-people').value);
    // checking whether the user has input the bill amount and number of people
    if(billAmount > 0 && numberOfPeople > 0){
        if(document.querySelector('#number-of-people').classList.contains('input-error')){
            document.querySelector('#number-of-people').classList.remove('input-error');
        }
        if(document.querySelector('#bill-amount').classList.contains('input-error')){
            document.querySelector('#bill-amount').classList.remove('input-error');
        }
        return true;
    } else {
        // This is a ternary operator
        // It's a shorthand for an if/else statement
        // "condition" ? "if true" : "if false"
        !billAmount > 0 ? document.querySelector('#bill-amount').classList.add('input-error') : document.querySelector('#bill-amount').classList.remove('input-error');
        !numberOfPeople > 0 ? document.querySelector('#number-of-people').classList.add('input-error') : document.querySelector('#number-of-people').classList.remove('input-error');
        return false;
    }  
}

function calculateTip(tipPercentage,billAmount,numberOfPeople) {
    if(validateInput()){
        const tipAmount = (billAmount * tipPercentage) / numberOfPeople;
        const totalAmount = (billAmount / numberOfPeople) + tipAmount;
        // Change the innerHTML of the tip amount
        document.querySelector('#tip-amount').innerHTML = `$${tipAmount.toFixed(2)}`;
        // Change the innerHTML of the total amount
        document.querySelector('#total-amount').innerHTML = `$${totalAmount.toFixed(2)}`;
    }
}

// Handling functionality for the custom input
// Listen for a focus event on the custom input
// Get the custom input element

const customInput = document.querySelector('#custom-tip')
customInput.addEventListener('keyup',(e)=>{
    if(!customInput.value){
      customInput.classList.add('input-error')
    }else{
        customInput.classList.remove('input-error')
        if(e.key === 'Enter' || e.key){
            if(customInput){
               const tipPercentage = parseInt(customInput.value) / 100;
               const billAmount = parseInt(document.querySelector('#bill-amount').value);
               const numberOfPeople = parseInt(document.querySelector('#number-of-people').value);
               calculateTip(tipPercentage,billAmount,numberOfPeople);
           }
        }
    }
    
})

// Add event listener for the reset button
document.querySelector(".btn-reset").addEventListener("click",()=>{
    document.querySelector('#tip-amount').innerHTML = '$0.00';
    // Change the innerHTML of the total amount
    document.querySelector('#total-amount').innerHTML = '$0.00';
    document.querySelector('#bill-amount').value = '';
    document.querySelector('#number-of-people').value = '';
    document.querySelector('#custom-tip').value = '';
})















