const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/tortie-cat.png") {
    myImage.setAttribute("src", "images/calico-cat.png");
  } else {
    myImage.setAttribute("src", "images/tortie-cat.png");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your nickname.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Cats are cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Cats are cool, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});
