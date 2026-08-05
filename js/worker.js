function login() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;

  if (u && p) {
    window.location.href = "home.html";
  } else {
    alert("请输入工号和密码");
  }
}

function startWork() {
  alert("已开始处理该工单");
  window.location.href = "updateRepair.html";
}
// 创建地图

const map = L.map("map").setView([39.90923, 116.397428], 16);

// 加载地图

L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",

  {
    maxZoom: 19,

    attribution: "© OpenStreetMap",
  },
).addTo(map);

// 添加维修地点

L.marker([39.90923, 116.397428])

  .addTo(map)

  .bindPopup("维修地点")

  .openPopup();
