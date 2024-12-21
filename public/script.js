const pieCtx = document.getElementById('pieChart').getContext('2d');
new Chart(pieCtx, {
  type: 'pie',
  data: {
    labels: ['Completed', 'In Progress', 'Pending'],
    datasets: [{
      data: [60, 30, 10],
      backgroundColor: ['#4CAF50', '#FF9800', '#F44336'],
    }],
  },
});

const lineCtx = document.getElementById('lineChart').getContext('2d');
new Chart(lineCtx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Sales',
      data: [3, 5, 2, 8, 4],
      borderColor: '#4CAF50',
      borderWidth: 2,
    }],
  },
});