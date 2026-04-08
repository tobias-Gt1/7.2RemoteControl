const quizzes = [
  {
    id: 1,
    title: "Algemene quiz",
    description: "Een mix van vragen over verschillende onderwerpen.",
    questions: 10
  },
  {
    id: 2,
    title: "Taal & spelling",
    description: "Woordenschat, grammatica en taalgevoel.",
    questions: 15
  },
  {
    id: 3,
    title: "Geschiedenis",
    description: "Vragen over belangrijke momenten uit de geschiedenis.",
    questions: 12
  },
  {
    id: 4,
    title: "Wetenschap & natuur",
    description: "Biologie, scheikunde en natuurkunde.",
    questions: 18
  },
  {
    id: 5,
    title: "Aardrijkskunde",
    description: "Steden, landen, continenten en kaarten.",
    questions: 14
  },
  {
    id: 6,
    title: "Tech & internet",
    description: "Computers, apps, internet en digitale trends.",
    questions: 11
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("quizzesGrid");

  quizzes.forEach((quiz) => {
    const card = document.createElement("div");
    card.className = "quiz-card";
    card.innerHTML = `
      <h2>${quiz.title}</h2>
      <p>${quiz.description}</p>
      <p class="question-count">${quiz.questions} vragen</p>
      <button class="btn-select" data-id="${quiz.id}">Open quiz</button>
    `;
    grid.appendChild(card);
  });

  document.querySelectorAll(".btn-select").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const quizId = e.target.getAttribute("data-id");
      const quiz = quizzes.find((q) => q.id == quizId);
      alert(`Je hebt gekozen voor: ${quiz.title}`);
    });
  });
});
