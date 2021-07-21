//get dom elements
const Buttons = document.querySelectorAll(".btn");
const operaterButtons = document.querySelectorAll(".opbtn");
let firstNumEl = document.querySelector(".firstNum");
let secondNumEl = document.querySelector(".secondNum");

selectFirstNum = () => {
  Buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      let secondNum = secondNumEl.textContent += e.target.textContent;
      return secondNum
    });
  });
};

let num = selectFirstNum();

selectSecondNum = () =>{
    operaterButtons.forEach(btn => {
        btn.addEventListener("click", secondNum => {
            firstNumEl.textContent = secondNum;
        })
    })
}

selectSecondNum(num);

//functions
add = (num1, num2) => {
  return num1 + num2;
};

subtract = (num1, num2) => {
  return num1 - num2;
};

multiply = (num1, num2) => {
  return num1 * num2;
};

divide = (num1, num2) => {
  return num1 / num2;
};

operate = (operater, num1, num2) => {
  if (operater == "+") {
    return add(num1, num2);
  } else if (operater == "-") {
    return subtract(num1, num2);
  } else if (operater == "*") {
    return multiply(num1, num2);
  } else if (operater == "/") {
    return divide(num1, num2);
  }
};



