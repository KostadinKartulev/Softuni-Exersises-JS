function solve() {
  let sectionElements = document.querySelectorAll('#quizzie section');
  let correctAnswers = 0;
  let totalAnswers = 0;
  let arrRightAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  for (let i = 0; i < sectionElements.length; i++) {
    let sectionElement = sectionElements[i];
    sectionElement.addEventListener('click', function (e) {
      let rightAnswer = arrRightAnswers[i];
      let nextSectionElement = sectionElements[i + 1];
      if (e.target.classList.contains('answer-text')) {
        if (e.target.textContent === rightAnswer) {
          correctAnswers++;
        }
        totalAnswers++;

        e.currentTarget.style.display = 'none';
        if (nextSectionElement !== undefined) {
          nextSectionElement.style.display = 'block';
        } else {
          let ulResultsElement=document.getElementById('results');
          ulResultsElement.style.display='block';
          let h1ResultElement=ulResultsElement.querySelector('h1');
          if (correctAnswers===totalAnswers) {
            h1ResultElement.textContent="You are recognized as top JavaScript fan!";
          } else {
            h1ResultElement.textContent=`You have ${correctAnswers} right answers`;
          }
        }

      }
    })
  }

}
