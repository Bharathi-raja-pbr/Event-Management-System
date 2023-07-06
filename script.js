const username = document.getElementById('email')
const password = document.getElementById('password')



function switchForm(className, e) {
	e.preventDefault();
	const allForm = document.querySelectorAll('form');
	const form = document.querySelector(`form.${className}`);

	allForm.forEach(item=> {
		item.classList.remove('active');
	})
	form.classList.add('active');
}


const registerPassword = document.querySelector('form.register #password');
const registerConfirmPassword = document.querySelector('form.register #confirm-pass');

registerPassword.addEventListener('input', function () {
	registerConfirmPassword.pattern = `${this.value}`;
})









const database = {
    users : [
        {
            firstname  : "John",
            lastname  : "Smith",
            email : "jsmith@gmail.com",
            password : "pa$$word",
            dateofbirth : "01/01/1990",
            city  : "New York"
        },
		{
            firstname  : "Jane",
            lastname  : "Smith",
            email : "janesmith@gmail.com",
            password : "pa$$",
            dateofbirth : "02/02/2000",
            city  : "India"
        },
		{
            firstname  : "jack",
            lastname  : "Smith",
            email : "admin@gmail.com",
            password : "12345678",
            dateofbirth : "02/02/2000",
            city  : "India"
        },
		{
            firstname  : "bharathi",
            lastname  : "raja",
            email : "bharathi@gmail.com",
            password : "12345678",
            dateofbirth : "02/02/2000",
            city  : "India"
        }


    ]
}


let signin = false;

function checkValidLogin() {
  console.log(username.value, password.value);
  
  if (username.value === "admin@gmail.com" && password.value === "12345678") {
    alert(`Hello, ${username.value}! you are now logged in`);
    window.location.href = "./admin.html";
    signin = true;
    return;
  }

  database.users.forEach((user) => {
    if (user.email === username.value && user.password === password.value) {
      alert('success');
      window.location.href = "./home.html";
      signin = true;
      return;
    }
  });

  if (!signin) {
    alert("Invalid Login");
  }
}
