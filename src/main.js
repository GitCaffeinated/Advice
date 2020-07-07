/* eslint-disable */
const buttons = document.getElementById('buttons');
const adviceTime = document.createElement("p");
buttons.after(adviceTime);

buttons.onclick = function giveAdvice() {
  fetch('https://api.adviceslip.com/advice')
  .then(response => {
    if (response.status === 200) {
      return response.json();
    }
    throw new Error('Resource not found');
  })
  .then(data => {
    let adviceReq = data.slip.advice;
    adviceTime.textContent=adviceReq;
  })
}
