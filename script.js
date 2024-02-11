const theme = document.getElementById('theme');
const changeTheme = document.getElementById('mode');

changeTheme.onchange = (e) => {
  if (changeTheme.checked === true) {
    console.log("Checked")
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    window.localStorage.setItem('mode', 'light');
  } else {
    console.log("Not Checked")
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
    window.localStorage.setItem('mode', 'dark');
  }
}

const mode = window.localStorage.getItem('mode');
if (mode == 'dark') {
  changeTheme.checked = true;
  document.documentElement.classList.remove("light");
  document.documentElement.classList.add("dark");
}

if (mode == 'light') {
  changeTheme.checked = false;
  document.documentElement.classList.remove("dark");
  document.documentElement.classList.add("light");
}

function createDownloadButton() {
  const downloadButton = document.createElement("a");

  downloadButton.href = "./pdf/CV Semenov Illia Développeur.pdf";
  downloadButton.download = "Semenov_Illia_CV.pdf";
  downloadButton.textContent = "Download CV";
  downloadButton.classList.add("btn", "btn-info");

  const downloadButtonContainer = document.getElementById("downloadButtonContainer");
  downloadButtonContainer.appendChild(downloadButton);
}

createDownloadButton();

function updateCopyrightYear() {
  const currentYear = new Date().getFullYear();
  const copyrightElement = document.getElementById("copyright");
  const copyrightText = copyrightElement.textContent;
  const updatedCopyrightText = copyrightText.replace(/\d{4}/, currentYear);
  copyrightElement.textContent = updatedCopyrightText;
}

window.onload = updateCopyrightYear;