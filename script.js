const reportSlider = document.getElementById('reportSlider');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const reportForm = document.getElementById('reportForm');

let currentSlide = 0;

prevButton.addEventListener('click', showPreviousReport);
nextButton.addEventListener('click', showNextReport);
reportForm.addEventListener('submit', submitReport);

function showPreviousReport() {
  if (currentSlide === 0) {
    currentSlide = reportSlider.childElementCount - 1;
  } else {
    currentSlide--;
  }
  updateSlider();
}

function showNextReport() {
  if (currentSlide === reportSlider.childElementCount - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  updateSlider();
}

function updateSlider() {
  const slideWidth = reportSlider.offsetWidth;
  reportSlider.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
}

function submitReport(event) {
  event.preventDefault();

  const reportType = document.getElementById('reportType').value;
  const reportContent = document.getElementById('reportContent').value;

  const newReport = document.createElement('div');
  newReport.classList.add('report');
  newReport.innerHTML = `
    <h2>Report ${reportSlider.childElementCount + 1}</h2>
    <p>${reportContent}</p>
  `;
  reportSlider.appendChild(newReport);

  document.getElementById('reportContent').value = '';

  // Automatically switch to the newly added report
  currentSlide = reportSlider.childElementCount - 1;
  updateSlider();
}

// Initially, update the slider to position the first report
updateSlider();
