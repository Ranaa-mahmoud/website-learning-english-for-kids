const menuToggle = document.querySelector(".menu-toggle");
const menuBar = document.querySelector(".menu-bar");
const icon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", () => {
  menuBar.classList.toggle("active");
  if (menuBar.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
});

// دالة لتشغيل الصوت عند النقر على الحرف
function playSoundForAlphabets(alphabet) {
  const audio = new Audio(`sounds alphabets/${alphabet}.mp3`);
  audio.play().catch((error) => {
    console.error(`Error playing alphabet sound:`, error);
  });
}

// إضافة حدث click لكل زر في قسم الحروف
document.querySelectorAll(".alphabet").forEach(function (button) {
  button.addEventListener("click", function () {
    const alphabet = button.id;
    playSoundForAlphabets(alphabet);
  });
});

// دالة لتشغيل الصوت عند النقر على الصورة
function playSoundForImage(type, identifier) {
  let soundFile;

  if (type === "alphabet") {
    soundFile = `sounds alphabets/${identifier}.mp3`;
  } else if (type === "word") {
    soundFile = `sounds words/${identifier}.mp3`;
  } else if (type === "number") {
    soundFile = `sounds numbers/${identifier}.mp3`;
  }

  const audio = new Audio(soundFile);
  audio.play().catch((error) => {
    console.error(`Error playing ${type} sound:`, error);
  });
}

// إضافة حدث click لكل صورة (للكلمات والأرقام)
document.querySelectorAll("img").forEach(function (image) {
  image.addEventListener("click", function () {
    const type = image.dataset.type;
    const identifier = image.alt;
    playSoundForImage(type, identifier);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // دالة للتحقق من الإجابات وحساب النقاط لكل قسم
  function checkAnswers(section) {
    const buttons = section.querySelectorAll(".button");
    const resultElement = section.querySelector(".result");
    let correctAnswers = 0;
    let totalQuestions = 4;
    let answeredQuestions = new Set();

    // التحقق من الإجابات
    buttons.forEach((button) => {
      const selectedButton = button.closest("div").querySelector(".selected");
      const correctAnswer = button.getAttribute("data-answer");
      const questionId = button.getAttribute("data-question-id");

      if (selectedButton && !answeredQuestions.has(questionId)) {
        answeredQuestions.add(questionId);
        if (selectedButton.innerText === correctAnswer) {
          correctAnswers++;
          selectedButton.classList.add("correct");
        } else {
          selectedButton.classList.add("incorrect");
        }
      }
    });

    // تحديث الألوان للإجابات
    section.querySelectorAll(".button").forEach((button) => {
      if (button.classList.contains("selected")) {
        if (button.innerText === button.getAttribute("data-answer")) {
          button.style.backgroundColor = "green";
        } else {
          button.style.backgroundColor = "red";
        }
      }
    });

    // عرض النتيجة في القسم المحدد
    resultElement.innerHTML = `Your score: ${correctAnswers} out of ${totalQuestions}`;
  }

  // دالة لاختيار الإجابة
  function handleButtonClick(section) {
    const buttons = section.querySelectorAll(".button");
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        // إزالة الاختيار عن الأزرار الأخرى
        const group = button.closest("div");
        group
          .querySelectorAll(".button")
          .forEach((b) => b.classList.remove("selected"));

        // إضافة الكلاس 'selected' للزر الذي تم اختياره
        button.classList.add("selected");
        button.style.backgroundColor = "";
      });
    });
  }

  // التحقق من الإجابات عند الضغط على زر التحقق في كل قسم
  const checkAlphabetButton = document.querySelector(
    ".alphabet-exercises .checkAnswer"
  );
  const checkWordButton = document.querySelector(
    ".word-exercises .checkAnswer"
  );
  const checkNumberButton = document.querySelector(
    ".number-exercises .checkAnswer"
  );

  checkAlphabetButton.addEventListener("click", function () {
    const section = document.querySelector(".alphabet-exercises");
    checkAnswers(section);
  });

  checkWordButton.addEventListener("click", function () {
    const section = document.querySelector(".word-exercises");
    checkAnswers(section);
  });

  checkNumberButton.addEventListener("click", function () {
    const section = document.querySelector(".number-exercises");
    checkAnswers(section);
  });

  // إضافة حدث لكل قسم لاختيار الإجابة
  const alphabetSection = document.querySelector(".alphabet-exercises");
  const wordSection = document.querySelector(".word-exercises");
  const numberSection = document.querySelector(".number-exercises");

  handleButtonClick(alphabetSection);
  handleButtonClick(wordSection);
  handleButtonClick(numberSection);
});

// ScrollReveal animations//
ScrollReveal().reveal(".home-container", {
  duration: 2000,
  origin: "bottom",
  distance: "0",
  reset: true,
});
ScrollReveal().reveal(".overlay", {
  duration: 2000,
  origin: "bottom",
  distance: "0",
  delay: 200,
  reset: true,
});
ScrollReveal().reveal("h2", {
  duration: 2000,
  origin: "top",
  distance: "0",
  delay: 200,
  reset: true,
});
ScrollReveal().reveal(".about-image", {
  duration: 2000,
  origin: "left",
  distance: "60px",
  delay: 300,
  reset: true,
});
ScrollReveal().reveal(".about-content", {
  duration: 2000,
  origin: "top",
  distance: "70px",
  delay: 400,
  reset: true,
});

ScrollReveal().reveal("h1", {
  duration: 2000,
  origin: "top",
  distance: "60px",
  delay: 200,
  reset: true,
});
ScrollReveal().reveal("p", {
  duration: 2000,
  origin: "left",
  distance: "60px",
  delay: 300,
  reset: true,
});
ScrollReveal().reveal(".alphabets-container", {
  duration: 2500,
  origin: "top",
  distance: "50px",
  delay: 400,
  interval: 200,
  reset: true,
});
ScrollReveal().reveal(".images-container img,.numbers-images img", {
  duration: 2500,
  origin: "top",
  distance: "40px",
  delay: 600,
  interval: 200,
  reset: true,
});
ScrollReveal().reveal(
  ".alphabet-exercises, .word-exercises,.number-exercises",
  {
    duration: 2500,
    origin: "bottom",
    distance: "40px",
    delay: 500,
    interval: 400,
    reset: true,
  }
);
ScrollReveal().reveal(
  ".exercises-container,.words-container,.numbers-container",
  {
    duration: 2700,
    origin: "bottom",
    distance: "50px",
    delay: 400,
    interval: 200,
    reset: true,
  }
);
