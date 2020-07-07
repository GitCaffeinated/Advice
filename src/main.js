/* eslint-disable */
const buttons = document.getElementById('buttons');
const adviceTime = document.createElement("p");
buttons.after(adviceTime);

/* const requestURL = 'https://api.adviceslip.com/advice';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

 buttons.onclick = function giveAdvice() {
  const advice = request.response;
  const adviceSpace = document.createElement('p');
  adviceSpace.textContent = advice['slip.advice'];
  adviceSpace.appendChild(adviceSpace);
}; */

/* const data = {};
  fetch('https://api.adviceslip.com/advice', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json()).then((datas) => alert(datas)).catch(err => {
      console.log('rejected: ', err);
    });; */

buttons.onclick = function giveAdvice() {
  fetch('https://api.adviceslip.com/advice')
  .then(response => {
    console.log('Resolved: ', response);
    if (response.status === 200) {
      return response.json();
    }
    throw new Error('Resource not found');
  })
  .then(data => {
    console.log(data);
  })
}
