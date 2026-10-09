// All chart values below are deliberately illustrative placeholders.
// Replace them with verified aggregates from the selected dataset before sharing this page as completed work.
Chart.defaults.font.family = "'DM Sans', sans-serif";
Chart.defaults.color = "#7b8e91";
Chart.defaults.borderColor = "#e8eeeb";

const monthlyCtx = document.getElementById("monthlyChart");
new Chart(monthlyCtx, {
  type: "line",
  data: {
    labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    datasets: [
      { label: "On-time rate (illustrative %)", data: [82,84,81,85,83,79,80,82,86,84,87,85], yAxisID: "y", borderColor: "#14776d", backgroundColor: "rgba(20,119,109,.10)", fill: true, tension: .35, pointRadius: 2, borderWidth: 2 },
      { label: "Average arrival delay (illustrative min)", data: [14,12,16,11,13,19,17,15,10,12,9,11], yAxisID: "y1", borderColor: "#e6a34e", backgroundColor: "#e6a34e", tension: .35, pointRadius: 2, borderWidth: 2 }
    ]
  },
  options: {
    responsive: true, maintainAspectRatio: false,
    interaction: { mode: "index", intersect: false },
    plugins: { legend: { position: "bottom", labels: { usePointStyle: true, boxWidth: 7, padding: 18, font: { size: 10 } } }, tooltip: { callbacks: { footer: () => "Illustrative preview — not actual findings" } } },
    scales: {
      x: { grid: { display: false }, ticks: { font: { size: 10 } } },
      y: { min: 60, max: 100, title: { display: true, text: "On-time rate (%)", font: { size: 10 } }, ticks: { callback: v => v + "%" } },
      y1: { position: "right", grid: { drawOnChartArea: false }, title: { display: true, text: "Average delay (min)", font: { size: 10 } }, ticks: { font: { size: 9 } } }
    }
  }
});
new Chart(document.getElementById("timeChart"), {
  type: "bar",
  data: { labels: ["Early AM","Morning","Afternoon","Evening"], datasets: [{ label: "Delay rate (illustrative %)", data: [14,19,24,31], backgroundColor: ["#a9d8cb","#72bcae","#3c9589","#126c65"], borderRadius: 4, maxBarThickness: 35 }] },
  options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { callbacks: { footer: () => "Illustrative preview — not actual findings" } } }, scales: { x: { grid: { display: false }, ticks: { font: { size: 9 } } }, y: { beginAtZero: true, grid: { color: "#edf1ef" }, ticks: { callback: v => v + "%", font: { size: 9 } } } } }
});
new Chart(document.getElementById("causeChart"), {
  type: "doughnut",
  data: { labels: ["Carrier","Weather","Air traffic system","Late aircraft","Other"], datasets: [{ data: [32,18,22,23,5], backgroundColor: ["#126c65","#e6a34e","#6d9bb1","#91c9b7","#d8e3df"], borderWidth: 0, hoverOffset: 4 }] },
  options: { responsive: true, maintainAspectRatio: false, cutout: "66%", plugins: { legend: { position: "bottom", labels: { usePointStyle: true, boxWidth: 7, padding: 12, font: { size: 9 } } }, tooltip: { callbacks: { footer: () => "Illustrative preview — not actual findings" } } } }
});