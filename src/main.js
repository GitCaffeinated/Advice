/* eslint-disable */
const buttons = document.getElementById('buttons');

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
  }).then((res) => res.json()).then((datas) => alert(datas)); */

buttons.onclick = function giveAdvice() {
  fetch('https://api.adviceslip.com/advice')
    .then(response => {
      alert('approved')
    }).catch(err => {
      alert('rejected');
    });
};
