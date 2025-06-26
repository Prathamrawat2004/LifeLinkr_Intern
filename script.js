let Questions = document.querySelectorAll(".faq-question");

Questions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;
    item.classList.toggle("open");
  });
});
