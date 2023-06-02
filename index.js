const allCode = document.querySelectorAll("code");

// Add copy icon to each code snippet
allCode.forEach((code) => {
  const copyIcon = document.createElement("i");
  copyIcon.classList.add("fas", "fa-copy", "copyIcon");
  code.parentElement.appendChild(copyIcon);
});

// Event click for copy icons with class name .copyIcon
const copyIcons = document.querySelectorAll(".copyIcon");
copyIcons.forEach((copyIcon, index) => {
  copyIcon.addEventListener("click", function () {
    const code = allCode[index].textContent;
    // Copy the code to the clipboard
    navigator.clipboard
      .writeText(code)
      .then(() => {
        Toastify({
          text: "Code copied",
          duration: 3000,
          close: true,
          gravity: "top",
        }).showToast();
      })
      .catch((error) => {
        console.error("Failed to copy code:", error);
      });
  });
});


