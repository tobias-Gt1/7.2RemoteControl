const hostForm = document.getElementById("host-form");

if (hostForm) {
  const preview = document.getElementById("preview");
  const previewText = document.getElementById("preview-text");

  hostForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(hostForm);
    const quizTitle = String(formData.get("quizTitle") || "").trim();
    const hostName = String(formData.get("hostName") || "").trim();

    previewText.textContent = `${hostName} heeft '${quizTitle}' klaarstaan op de laptop.`;
    preview.hidden = false;
  });
}
