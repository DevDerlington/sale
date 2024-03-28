document.getElementById("myForm").addEventListener("submit", function(event){
  // Get username, password & email VALUES
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value;

  //prevent default form submission
  event.preventDefault();



// RESET ERROR MESSAGES
document.getElementById('usernameError').textContent = '';
document.getElementById('passwordError').textContent = '';
document.getElementById('emailError').textContent = '';

// VALIDATION

let isValid = true;

if (username ===''){
  document.getElementById('usernameError').textContent = 'Username is required';
  isValid=false;
}

if (email ===''){
  document.getElementById('emailError').textContent = 'Your Email address is required';
  isValid=false;
}

if (password ===''){
  document.getElementById('passwordError').textContent = 'Password is required';
  isValid=false;
}
if (isValid){
  // IF FORM IS VALID SUBMIT
  alert('Form Successfully Submitted');
}




  // display an alert of username,password and email
  // alert("username: " + username + "n\Password: " + password + "email: " + email) ;

//   alert("Welcome  " + username + " Your \npassword is: " + password);
// console.log(username);
// console.log(password);
// console.log(email);

})
