document.addEventListener("DOMContentLoaded", () => {
  function removeAnimationAfterRun() {
    // Remove the bounce animation class after it finishes
    const submitBtn = document.getElementById("submitBtn");
    if (submitBtn) {
      submitBtn.addEventListener("animationend", () => {
        submitBtn.classList.remove("animate__bounce");
      });
    }

    const getStartedBtn = document.getElementById("getStartedBtn");
    if (getStartedBtn) {
      getStartedBtn.addEventListener("animationend", () => {
        getStartedBtn.classList.remove("animate__bounce");
      });
    }
  }

  removeAnimationAfterRun();
});
