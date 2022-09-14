document.addEventListener("DOMContentLoaded", setupEventListeners);


function setupEventListeners() {
  console.log('setting up form submit event handler now');
  const myForm = document.getElementById("myForm");
  myForm.addEventListener("submit", handleSubmit);
}

  event.preventDefault();
  console.log(event.target);
  console.log(event.type);

  // console.log(event.target.fname.value);
  // console.log(event.target.lname.value);
  // console.log(event.target.password.value);
  // console.log(event.target.phone.value);

  const nodesOfInterest = ["INPUT", "SELECT"];
  const fieldsWithACheckedProperty = ['radio', 'checkbox'];
  const irrelevantButtons = ['reset', 'submit'];
  const { elements } = event.target;
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];

    if (nodesOfInterest.includes(element.nodeName)) {
      if (fieldsWithACheckedProperty.includes(element.type)) {
        // deal with toogle buttons
        console.log(`${element.name} ${element.type} ${element.value} ${element.checked}`);
      } else {
        // deal with everything else except the submit and reset button
        if (!irrelevantButtons.includes(element.type))
          console.log(`${element.name} ${element.type} ${element.value}`);
      }
    }
  }


  // send valid data to the server using
  // axios
  // fetch
  // HttpService
}

var fn = 'Rod';
var ln = "Nolan"
var myFullName = fn + ' ' + ln;
