document.addEventListener("DOMContentLoaded", fillUpThatDiv);


function fillUpThatDiv() {

  const myDiv = document.getElementById("playground");
  let me = {
    firstName: 'Rod',
    lastName: 'Nolan'
  };

  const paragraphTag = document.createElement("p");
  const innerSpanTag = document.createElement("span");

  paragraphTag.appendChild(innerSpanTag);

  innerSpanTag.innerHTML = `My name is: <strong>${me.firstName} ${me.lastName}</strong>`;

  myDiv.appendChild(paragraphTag);

}
