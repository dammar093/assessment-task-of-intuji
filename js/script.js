
// function to increase progress bar width
function updateProgressBar() {
  const progressPercent = document.querySelectorAll('.progress-percentage');
  const progressBar = document.querySelectorAll('.progress-bar-fill');
  progressPercent.forEach((element, index) => {
    const value = element.innerHTML;
    progressBar[index].style.width = value;
  });
}

// call function on page load
window.onload = updateProgressBar;
