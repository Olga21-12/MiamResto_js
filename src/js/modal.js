document.addEventListener("DOMContentLoaded", function () {

    const modalEl = document.getElementById("customModal");
  if (modalEl) {
    const modal = new bootstrap.Modal(modalEl);

    [bookBtnHeader, bookBtnHome].forEach((btn) => {
      if (btn) {
        btn.addEventListener("click", () => modal.show());
      }
    });
  }
});