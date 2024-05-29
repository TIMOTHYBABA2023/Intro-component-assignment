const form = document.getElementById('form');
const button = document.getElementById('button');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');


console.log(firstName);

console.log(firstName, lastName, email, password);


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  console.log(fName, lName, emailVal, passwordVal);

  validateField(fName, firstName, '#input-div-firstname', 'First Name is required');
  validateField(lName, lastName, '#input-div-lastname', 'Last Name cannot be empty');
  validateEmailField(emailVal, email, '#input-div-email', 'Looks like this is not an email');
  validateField(passwordVal, password, '#input-div-password', 'Password is required');

});

function validateField(value, field, containerSelector, errorMessage) {
  const container = document.querySelector(containerSelector);
  const errorImage = container.querySelector('.error-image');
  let existingSpan = container.querySelector('.error-message');
  
  if (existingSpan) {
      existingSpan.remove();
  }

  if (value === '') {
      field.classList.add('error');
      errorImage.classList.add('show-error-image');
      const span = createAndAddSpan(errorMessage);
      container.appendChild(span);
  } else {
      field.classList.remove('error');
      errorImage.classList.remove('show-error-image');
  }
}

function validateEmailField(value, field, containerSelector, errorMessage) {
  const container = document.querySelector(containerSelector);
  const errorImage = container.querySelector('.error-image');
  let existingSpan = container.querySelector('.error-message');
  
  if (existingSpan) {
      existingSpan.remove();
  }

  if (!validateEmail(value) || value === '') {
      field.classList.add('error');
      errorImage.classList.add('show-error-image');
      const span = createAndAddSpan(errorMessage);
      container.appendChild(span);
  } else {
      field.classList.remove('error');
      errorImage.classList.remove('show-error-image');
  }
}

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function createAndAddSpan(text) {
  const span = document.createElement('span');
  span.classList.add('error-message');
  span.textContent = text;
  return span;
}








// console.log(firstName, lastName, email, password);

// function createErrorMessageSpan(text) {
//   const span = document.createElement('span');
//   span.classList.add('error-message');
//   span.textContent = text;
//   return span;
// }

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const fName = firstName.value;
//   const lName = lastName.value;
//   const emailVal = email.value;
//   const passwordVal = password.value;
//   console.log(fName, lName, emailVal, passwordVal);


//   // Check first name
//   if (fName === '') {
//     let existingSpan1 = document.querySelector('#input-div-firstname .error-message');
//     if (existingSpan1) {
//         existingSpan1.remove();
//     }
    
//       const span = createAndAddSpan('First Name is required');

//       // Append the span to the container div
//       const container = document.querySelector('#input-div-firstname');
//       container.appendChild(span);

//       firstName.classList.add('error');
//   } else {
//     firstName.classList.remove('error');
//   }
//   // Check last name

//   if (lName === '') {
//     let existingSpan2 = document.querySelector('#input-div-lastname .error-message');
//     if (existingSpan2) {
//     existingSpan2.remove();
// }
//     lastName.classList.add('error');

//     const lastNameErrorMessage = 'Name cannot be empty';
//     const lastnameSpan = createAndAddSpan(lastNameErrorMessage);

//     // Append the span to the container div
//     const lastNamecontainer = document.querySelector('#input-div-lastname');
//     lastNamecontainer.appendChild(lastnameSpan);
//   } else {
//     lastName.classList.remove('error');
//   }
//   // Check email
//   let existingSpan3 = document.querySelector('#input-div-email .error-message');
//   if (existingSpan3) {
//   existingSpan3.remove();
// }
//   if (!validateEmail(emailVal) || emailVal === '') {

     
//     email.classList.add('error');

//     const emailErrorMessage = 'Looks like this is not an email';
//     const span = createAndAddSpan(emailErrorMessage);

//     // Append the span to the container div
//     const emailContainer = document.querySelector('#input-div-email');
//     container.appendChild(emailContainer);
//   } else {
//     email.classList.remove('error');
//   }

//   // Check password

//   if (passwordVal === '') {
//     let existingSpan4 = document.querySelector('#input-div-password .error-message');
//     if (existingSpan4) {
//     existingSpan4.remove();
//   }
//     password.classList.add('error');

//     const firstNameErrorMessage = 'First name is required';
//     const span = createAndAddSpan(firstNameErrorMessage);

//     // Append the span to the container div
//     const container = document.querySelector('#input-div-password');
//     container.appendChild(span);
//   } else {
//     password.classList.remove('error');
//   }
// });

// //Validate email
// function validateEmail(email) {
//   var re =
//     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// }


// function createAndAddSpan() {

//   const span = document.createElement('span');
//     span.classList.add('error-message');
//     span.textContent = 'First Name cannot be empty';

//   return span;
// }



    

