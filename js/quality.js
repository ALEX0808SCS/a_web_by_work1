// 用户评分分布

new Chart(document.getElementById("scoreChart"), {
  type: "bar",

  data: {
    labels: ["★★★★★", "★★★★", "★★★", "★★", "★"],

    datasets: [
      {
        label: "数量",

        data: [125, 62, 25, 8, 3],

        backgroundColor: "#2b7de9",
      },
    ],
  },

  options: {
    responsive: true,

    maintainAspectRatio: false,
  },
});

// 维修完成情况

new Chart(document.getElementById("qualityChart"), {
  type: "doughnut",

  data: {
    labels: ["按时完成", "超时完成"],

    datasets: [
      {
        data: [95, 5],
      },
    ],
  },

  options: {
    responsive: true,

    maintainAspectRatio: false,
  },
});
