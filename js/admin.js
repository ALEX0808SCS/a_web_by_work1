Chart.register(ChartDataLabels);
// ===========================
// 当前时间显示
// ===========================

function updateTime() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  const hour = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");
  const second = String(now.getSeconds()).padStart(2, "0");

  const week = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ];

  const timeText =
    year +
    "-" +
    month +
    "-" +
    day +
    " " +
    hour +
    ":" +
    minute +
    ":" +
    second +
    " " +
    week[now.getDay()];

  const welcome = document.querySelector(".welcome");

  if (welcome) {
    welcome.innerHTML =
      "欢迎使用市政设施管理系统&nbsp;&nbsp;&nbsp;&nbsp;" + timeText;
  }
}

updateTime();
setInterval(updateTime, 1000);

// ===========================
// 菜单高亮
// ===========================

const menuItems = document.querySelectorAll(".menu li");

menuItems.forEach(function (item) {
  item.addEventListener("click", function () {
    menuItems.forEach(function (li) {
      li.classList.remove("active");
    });

    item.classList.add("active");
  });
});

// ===========================
// 卡片点击
// ===========================

const cards = document.querySelectorAll(".card");

cards.forEach(function (card) {
  card.addEventListener("click", function () {
    const title = card.querySelector("h3").innerText;

    alert("当前查看：" + title);
  });
});

// ===========================
// 表格悬停效果
// ===========================

const rows = document.querySelectorAll("#repairTable tr");

rows.forEach(function (row) {
  row.addEventListener("mouseenter", function () {
    row.style.cursor = "pointer";
  });

  row.addEventListener("click", function () {
    const id = row.cells[0].innerText;
    const name = row.cells[1].innerText;
    const status = row.cells[3].innerText;

    alert("工单编号：" + id + "\n设施：" + name + "\n状态：" + status);
  });
});

// ===========================
// 数字增长动画
// ===========================

const numbers = document.querySelectorAll(".card p");

numbers.forEach(function (item) {
  const target = parseInt(item.innerText);

  let current = 0;

  const timer = setInterval(function () {
    current++;

    item.innerText = current;

    if (current >= target) {
      clearInterval(timer);
    }
  }, 25);
});

// ===========================
// 页面加载完成
// ===========================

window.onload = function () {
  console.log("后台管理系统加载完成");
};

// ===========================
// 退出登录（预留）
// ===========================

function logout() {
  const result = confirm("确定退出登录吗？");

  if (result) {
    window.location.href = "/Admin/index.html";
  }
}
//报修趋势（折线图）
new Chart(document.getElementById("lineChart"), {
  type: "line",
  data: {
    labels: ["1月", "2月", "3月", "4月", "5月", "6月"],
    datasets: [
      {
        label: "报修数量",
        data: [20, 18, 26, 30, 34, 30],
        borderColor: "#2b7de9",
        backgroundColor: "rgba(43,125,233,0.2)",
        fill: true,
        tension: 0.3,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});
//设施类型占比（饼图）
new Chart(document.getElementById("pieChart"), {
  type: "pie",
  data: {
    labels: ["正常设施", "维修中", "待维修"],
    datasets: [
      {
        data: [290, 20, 15],
        backgroundColor: ["#4CAF50", "#FF9800", "#F44336"],
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: "bottom",
      },

      datalabels: {
        color: "#fff",
        font: {
          weight: "bold",
          size: 14,
        },
        formatter: (value) => value,
      },
    },
  },
});
