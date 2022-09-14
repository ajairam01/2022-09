function handleClick( event ) {
  // start main function
  console.log(event.target.id);
  console.log('performing search');
  // end main function

  // conditional section
  if (event.target.id === 'btn1') {
    console.log('showing results on page');
  } else if (event.target.id === 'btn2') {
    console.log('downloading results in excel');
  }
}

function genericHandler(event) {
  console.log(event.type);
}
function handleFormSubmisssion(event) {
  console.log(event.type);
  event.preventDefault();

  // setTimeout(() => {
  // }, 3000);

  console.log(document.getElementById('username').value);
  console.log(document.getElementById('password').value);

  // manually submit form data to some api endpoint
}

function handleFormReset (event) {
  console.log(event.type);
  event.preventDefault();
  const userResponse = confirm("ARE YOU SURE?");
  if (userResponse) {
    console.log('clear select form fields');
    document.getElementById('username').value = '';
  } else {
    console.log('do not clear each form field');
  }
}

function setup() {
  // const btn1 = document.getElementById("btn1");
  // btn1.addEventListener("click", handleClick);

  // const btn2 = document.getElementById("btn2");
  // btn2.addEventListener("click", handleClick);

  const parentDiv = document.getElementById('app');
  parentDiv.addEventListener('click', handleClick);


  const form = document.getElementById('form1');
  form.addEventListener('submit', handleFormSubmisssion);
  form.addEventListener('reset', handleFormReset);

}

document.addEventListener("DOMContentLoaded", setup);
