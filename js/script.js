
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


// function of chart
function createChart() {
  const ctx = document.getElementById('analyticsChart').getContext('2d');
  const analyticsChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      datasets: [
        {
          label: 'Label1',
          data: [12000, 15000, 8000, 18000, 10000, 20000, 14000],
          borderColor: '#4745a4',
          backgroundColor: 'rgba(0, 0, 255, 0.1)',
          fill: true,
          tension: 0.4,
        },
        {
          label: 'Label2',
          data: [6000, 8000, 7000, 11000, 7500, 13000, 9000],
          borderColor: '#f9ba33',
          backgroundColor: 'rgba(255, 165, 0, 0.1)',
          fill: true,
          tension: 0.4,
        },
      ]
    },
    options: {
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 5000,
            callback: function (value) {
              return value / 1000 + 'k';
            }
          },
        },
      }
    }
  });
}

createChart();


//// function to toggele menu
const menu = document.getElementById("menu")
const sidebar = document.getElementById("sidebar")
menu.addEventListener("click", () => {
  console.log(menu, sidebar)
  sidebar.classList.toggle("sidebar")
  sidebar.classList.toggle("active-menu")
})