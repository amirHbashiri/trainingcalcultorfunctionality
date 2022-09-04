var root = document.querySelector(":root");
let cs = getComputedStyle(root);
let btn = document.getElementById("standard");
var buttons = document.querySelector(".same");
let roots = document.querySelector("html");

btn.addEventListener("click", () => {
  if (roots.getAttribute("data") === "main") {
    roots.setAttribute("data", "blue");
  } else if (roots.getAttribute("data") === "blue") {
    roots.setAttribute("data", "yellow");
  } else if (roots.getAttribute("data") === "yellow") {
    roots.setAttribute("data", "green");
  } else if (roots.getAttribute("data") === "green") {
    roots.setAttribute("data", "main");
  }
  // if (cs.getPropertyValue("--main-color") === "gray") {
  //   document.documentElement.style.setProperty("--main-color", "blue");
  // } else if (cs.getPropertyValue("--main-color") === "blue") {
  //   document.documentElement.style.setProperty("--main-color", "yellow");
  // } else if (cs.getPropertyValue("--main-color") === "yellow") {
  //   document.documentElement.style.setProperty("--main-color", "purple");
  // } else if (cs.getPropertyValue("--main-color") === "purple") {
  //   document.documentElement.style.setProperty("--main-color", "gray");
  // }
});
const mainresult = document.querySelector(".current-operand");
const calculator = {
  firstNum: null,
  secondNum: null,
  operation: null,
};

const getResult = () => mainresult.textContent || "";

const operationBtn = document.querySelectorAll(".ops");
const numberBtn = document.querySelectorAll(".same");

const showNO = (digit) => {
  if (mainresult.textContent === "0") {
    mainresult.textContent = "";
  }

  mainresult.textContent = getResult() + digit;
};

operationBtn.forEach((el) => {
  el.addEventListener("click", () => {
    console.log("operation =", el.textContent);
  });
});

numberBtn.forEach((el) => {
  el.addEventListener("click", () => {
    // console.log("number =", el.textContent);
    showNO(el.textContent);
  });
});
