// selection
// const studentDiv = document.getElementById("student");

// const csitDiv = document.getElementsByClassName("csit");

// const allDivs = document.getElementsByTagName("div");

// const aakarPara = document.querySelector(".aakar");
// const allAakarPara = document.querySelectorAll(".aakar");

// console.log(allAakarPara[3].textContent);

// console.log(allDivs);

// console.log(allDivs[2].textContent);

// console.log(studentDiv, csitDiv);

// MODIFICATION ---------------------

// const teacherIDPara = document.getElementById("teacher");

// const yourNameDiv = document.getElementById("your-name");

// yourNameDiv.innerHTML = "<h1 >Bigyan Sapkota</h1/>";

// const helloIdVakoH1 = document.getElementById("hello");

// const unorderedList = document.getElementsByTagName("ul");

// to add element instead of this :
// unorderedList[0].innerHTML =
//   "<li>chyau</li><li>venta</li><li>vindi</li><li>masu</li>";

// use this :
// const masuKoLiTag = document.createElement("li");
// masuKoLiTag.textContent = "masu";

// add masu on bottom
// unorderedList[0].appendChild(masuKoLiTag);

// add masu on top
// unorderedList[0].prepend(masuKoLiTag);

// const allULElements = document.getElementsByTagName("ul");

// const newListElement = document.createElement("li");
// newListElement.textContent = "Cheese Balls";

// const secondNewListElement = document.createElement("li");
// secondNewListElement.textContent = "Coca Cola";

// console.log(typeof newListElement);

// allULElements[1].appendChild(newListElement);
// allULElements[1].appendChild(secondNewListElement);

// allULElements[1].append(newListElement, secondNewListElement);
// allULElements[0].prepend(newListElement);
// allULElements[0].prepend(secondNewListElement);

const containerDiv = document.getElementById("container");
const originalParagraph1 = document.getElementById("container-paragraph-1");
const originalParagraph2 = document.getElementById("container-paragraph-2");

// console.log(containerDiv);

// const newHeadingElement = document.createElement("h1");
// newHeadingElement.textContent = "This is my heading 1";

// containerDiv.replaceChild(newHeadingElement, originalParagraph);

// containerDiv.removeChild(originalParagraph2);
// originalParagraph2.remove()

// const img1 = document.getElementById("image-1");

// img1.setAttribute("class", "mero-image");
// img1.setAttribute("class", "mero-image mero-image-2");
// img1.setAttribute("src", "/assets/images/img-2.jpg");

// const image1AltText = img1.getAttribute("alt");

// console.log(image1AltText);

// const defaultName = document.getElementById("name");

// console.log(defaultName.value);

// const subscribed = true;

// if (!subscribed) {
//   clickMeButton.style.backgroundColor = "red";
//   clickMeButton.style.color = "white";
// }

// if (subscribed) {
//   clickMeButton.removeAttribute("disabled");
// }

const clickMeButton = document.getElementById("click-me");
const image1 = document.getElementById("image-1");

let isImageVisible = true;
clickMeButton.textContent = "Hide";

function buttonClickHandler() {
  if (isImageVisible) {
    // image visible case
    isImageVisible = false;
    clickMeButton.textContent = "Hide";
    image1.style.display = "inline";
  } else {
    // image invisible case
    isImageVisible = true;
    clickMeButton.textContent = "Show";
    image1.style.display = "none";
  }
}
