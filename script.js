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
  // Create a button element
  const downloadButton = document.createElement("a");

  // Set the button attributes
  downloadButton.href = "./image/CV Semenov Illia Développeur.pdf"; // Replace with the actual path to your CV file
  downloadButton.download = "Semenov_Illia_CV.pdf"; // Replace with the desired name for the downloaded file
  downloadButton.textContent = "Download CV";
  downloadButton.classList.add("btn", "btn-info");

  // Append the button to the downloadButtonContainer
  const downloadButtonContainer = document.getElementById("downloadButtonContainer");
  downloadButtonContainer.appendChild(downloadButton);
}

// Call the function to create the download button
createDownloadButton();