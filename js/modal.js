(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]",),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("modal-open")
  }

  window.addEventListener("keydown", (event) => {
    if (event.code === "Escape" && !refs.modal.classList.contains("is-hidden")) {
      toggleModal(false);
    }
  });

  window.addEventListener("click", (event) => {
    if (event.target === refs.modal) {
      toggleModal(false);
    }
  });
})();
