document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".registration-form-block__cardholdername");
  const cardnumberInput = document.querySelector(".registration-form-block__cardnumber");
  const mmInput = document.querySelector(".registration-form-block__mm");
  const yyInput = document.querySelector(".registration-form-block__yy");
  const cvcInput = document.querySelector(".registration-form-block__cvc");

  let cardholderSpan;
  let cardnumberSpan;
  let mmSpan;
  let yySpan;
  let cvcSpan;

  mmInput.addEventListener("blur", validateMonthYearField);
  yyInput.addEventListener("blur", validateMonthYearField);
  cvcInput.addEventListener("blur", validateMonthYearField);
  cardnumberInput.addEventListener("blur", validateInputType);

  input.addEventListener("change", (event) => {
    const value = event.target.value;

    cardholderSpan = cardholderSpan || document.querySelector("#card-block__cardholdername");
    cardholderSpan.textContent = value;
  });


  cardnumberInput.addEventListener("change", (event) => {
    const value = event.target.value;
    let res = '';
    for(let i = 1; i <= value.length; i++){
      if(i % 4 === 0 && i < value.length){
        res += value[i-1] + ' ';
      }else{
        res += value[i-1];
      }
    }
    cardnumberSpan = cardnumberSpan || document.querySelector("#card-block__cardnumber");

    cardnumberInput.classList.add('error');
    cardnumberSpan.textContent = res;
  });


  yyInput.addEventListener("change", (event) => {
    const value = event.target.value;

    yySpan = yySpan || document.querySelector("#card-block__date-yy");

    yyInput.classList.add('error');
    yySpan.textContent = value;
  });


  mmInput.addEventListener("change", (event) =>{
    const value = event.target.value;

    mmSpan = mmSpan || document.querySelector("#card-block__date-mm");

    mmInput.classList.add('error');
    mmSpan.textContent = value;
  });


  cvcInput.addEventListener("change", (event) =>{
    const value = event.target.value;

    cvcSpan = cvcSpan || document.querySelector("#card-block__cvc");

    cvcInput.classList.add('error');
    cvcSpan.textContent = value;
  });

  function validateMonthYearField(event) {
    const target = event.target;

    if (target.value.trim() === '') {
      showError('Cant be blank', target);
      target.classList.add('error');
    } else {
      hideError(target);
    }
  }

  function validateInputType(event) {
    const target = event.target;

    if (isNaN(target.value)) {
      showError('Wrong format, numbers only', target);
    } else {
      hideError(target);
    }
  }


  function showError(errorMessage, target) {
    const parent = target.parentNode; // input-wrapper

    parent.classList.add('input-wrapper--error');

    const errorBlock = parent.querySelector('.error-message');

    if (errorBlock) {
      errorBlock.textContent = errorMessage;
    }
  }

  function hideError(target) {
    const parent = target.parentNode;

    parent.classList.remove('input-wrapper--error');

    const errorBlock = parent.querySelector('.error-message');

    if (errorBlock) {
      errorBlock.textContent = '';
    }
  }

  let form = document.querySelector('.form-block__posts');
  let inputs = document.querySelectorAll('.registration-form-block__cardholdername, .registration-form-block__cardnumber, .registration-form-block__mm, .registration-form-block__yy, .registration-form-block__cvc');

  form.onsubmit = function(e) {
    let error = false;

    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value == '') {
        inputs[i].classList.add('error');
        error = true
      }
      else {
        inputs[i].classList.remove('error');
      }
    }
    if (error) {
      e.preventDefault();
    }
  };

});