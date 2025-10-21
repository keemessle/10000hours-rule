const dialog = document.getElementById("dialog");
const showDialogBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");

showDialogBtn.addEventListener("click", () => {
  dialog.showModal();
  console.log("모달창 열림");
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});
