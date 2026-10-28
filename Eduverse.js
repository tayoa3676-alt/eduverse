document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(
        ".sub-question-card-right h4"
    );

    questions.forEach(function (question) {
        question.addEventListener("click", function () {
            const card = question.parentElement;
            card.classList.toggle("active");
        });
    });
});