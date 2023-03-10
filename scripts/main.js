const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/cyber-shades.jpg") {
    myImage.setAttribute("src", "images/blue-firefox.jpg");
  } else {
    myImage.setAttribute("src", "images/cyber-shades.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h4");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Call me by my chosen name: ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Call me by my chosen name: ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};
