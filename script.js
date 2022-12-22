const faqContainer = document.querySelector(".faq");
const listContainer = document.querySelector("ul");
const questions = document.querySelectorAll(".question");
const arrows = document.querySelectorAll(".arrow");
const answers = document.querySelectorAll(".answer");

let displayedAnswers = 0;

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", () => {
    questions[i].classList.toggle("bold-question");
    answers[i].style.fontWeight = "400";
    answers[i].classList.toggle("hide");
    if (answers[i].classList.contains("hide")) {
      displayedAnswers--;
    } else if (!answers[i].classList.contains("hide")) {
      displayedAnswers++;
      answers[i].addEventListener("click", () => {
        answers[i].classList.remove("hide");
        questions[i].classList.add("bold-question");
        arrows[i].classList.add("flip-arrow");
      });
    }
    if (displayedAnswers === 0) {
      listContainer.style.overflowY = "hidden";
      arrows.forEach((arrow) => {
        arrow.style.marginRight = "0";
      });
      answers.forEach((answer) => {
        answer.style.marginRight = "0";
      });
    } else {
      listContainer.style.overflowY = "scroll";
      if (window.innerWidth >= 930) {
        arrows.forEach((arrow) => {
          arrow.style.marginRight = "20px";
        });
        answers.forEach((answer) => {
          answer.style.marginRight = "20px";
        });
      } else if (window.innerWidth < 930) {
        arrows.forEach((arrow) => {
          arrow.style.marginRight = "10px";
        });
        answers.forEach((answer) => {
          answer.style.marginRight = "10px";
        });
      }
    }
    arrows[i].classList.toggle("flip-arrow");
    if(window.innerWidth > 930) {
    faqContainer.style.height = "385px";
    listContainer.style.height = "285px";
    } else if (window.innerWidth < 930) {
        faqContainer.style.height = "310px";
    listContainer.style.height = "210px";
    }
  });
}
