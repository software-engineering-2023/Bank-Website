const reportForm = document.getElementById('reportForm');
const submittedReport = document.getElementById('submittedReport');
const verificationMessage = document.getElementById('verificationMessage');

reportForm.addEventListener('submit', submitReport);

function submitReport(event) {
  event.preventDefault();

  const reportType = document.getElementById('reportType').value;
  const reportContent = document.getElementById('reportContent').value;

  submittedReport.innerHTML = `
    <h3>${reportType}</h3>
    <p>${reportContent}</p>
  `;

  verificationMessage.textContent = 'Report submitted successfully!';
  verificationMessage.style.color = 'green';

  document.getElementById('reportType').value = 'bug';
  document.getElementById('reportContent').value = '';
}
