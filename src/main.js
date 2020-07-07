const buttons = document.getElementById('buttons');
const adviceTime = document.createElement('p');
buttons.after(adviceTime);

buttons.onclick = function giveAdvice() {
  fetch('https://api.adviceslip.com/advice')
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      // return information if response status is 200
      }
      throw new Error('Resource not found');
    // throw error if response status fails
    })
    .then((data) => {
      const adviceReq = data.slip.advice;
      // set advice to variable for ease
      adviceTime.textContent = adviceReq;
    // display advice on page
    });
};
