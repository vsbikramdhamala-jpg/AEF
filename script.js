document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("counsellingModal");
  const openBtns = document.querySelectorAll(".open-modal");
  const closeBtn = document.querySelector(".close-btn");
  const form = document.getElementById("counsellingForm");

  // Open modal
  openBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "flex";
    });
  });

  // Close modal
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Handle Form Submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! Your counselling request has been submitted successfully.");
    modal.style.display = "none";
    form.reset();
  });
});
