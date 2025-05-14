function signup() {
  document.getElementById("sign-up-button");
  let newUser = JSON.parse(localStorage.getItem("user")) || [];

  let name = document.getElementById("userName").value;

  let email = document.getElementById("userEmail").value;

  let pass = document.getElementById("userPassword").value;
  
  let checkbox = document.getElementById("checkedBox").checked;

  // console.log({checkbox});

  if (!name) {
    return alert("name field required");
  }

  if (!email){
    return alert("email is required");
  }

  if (!pass){
    return alert("Password is required");
  }

  const user = {
    name: name,
    email: email,
    password: pass,
  };

  newUser.push(user);

  // Save the user object in localStorage as a JSON string
  localStorage.setItem("user", JSON.stringify(newUser));

  // Clean up input fields after saving
  alert("You have Signed in succesfully");
  switchToLogin();
  cleanUp();

}


// function handleCheckboxChange(event) {
//   const isChecked = event.target.checked; 
//   const output = document.getElementById("output");

//   if (isChecked) {
//     output.textContent = "Checkbox is checked!";
//     return true
//   } else {
//     output.textContent = "Checkbox is unchecked!"
//     return false;
//   }
  
// }

// Get references to the checkbox and signup button
const checkbox = document.getElementById('checkedBox');
const signUpButton = document.getElementById('sign-up-button');

// Function to toggle the "Signup" button's disabled state
checkbox.addEventListener('change', () => {
    signUpButton.disabled = !checkbox.checked; // Enable the button only if the checkbox is checked
});

// Optionally, disable the button on page load
document.addEventListener('DOMContentLoaded', () => {
    signUpButton.disabled = true; // Ensure button starts as disabled
});






// function cleanUp() {
//   document.getElementById("userName").value = "";
//   document.getElementById("userEmail").value = "";
//   document.getElementById("userPassword").value = "";
// }

function switchToLogin() {
  window.location = "/Quiz_app/login.html";
}
function backToLogin() {
  window.location = "/Quiz_app/index.html";
  // console.log("gg");
}



// Login Page
function login(){
  // document.getElementById("login-button");
  // console.log("called")
  let registeredUsers = JSON.parse(localStorage.getItem("user")) || [];

  let email = document.getElementById("userEmail").value;

  let pass = document.getElementById("userPassword").value;
  
  const user = {
    email: email,
    password: pass,
  };

  // find user from registeredUsers array
  let foundUser = registeredUsers.find(user => user.email === email && user.password === pass);
  
  if(!foundUser){
    alert("Please sign in")
    return
  }
  if(foundUser){
   alert("you have been logged in succesfully");
   localStorage.setItem("loggedinUser", JSON.stringify(foundUser));
   window.location.href="welcome.html";
  }
  
}

function startQuiz(){
  window.location = "/Quiz_app/Questions.html";
}


// let count =0;
// function questionSet(){
  
  
//   // arr[i] + 1



//   document.getElementById("newQuestion").innerHTML=a[count];
//   count++;
// }



// document.getElementById("next").addEventListener("click",questionSet);