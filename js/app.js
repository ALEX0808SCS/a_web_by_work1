/*
==========================================
市政设施管理系统 - 用户端
app.js
==========================================
*/

// 页面加载完成
document.addEventListener("DOMContentLoaded", function () {
  console.log("市政设施管理系统加载完成");
});

/*
==========================================
退出登录
==========================================
*/

function logout() {
  const result = confirm("确定退出登录吗？");

  if (result) {
    alert("已成功退出登录！");

    window.location.href = "/User/login.html";
  }
}

/*
==========================================
提交报修
==========================================
*/

const repairForm = document.getElementById("repairForm");

if (repairForm) {
  repairForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const type = document.getElementById("type").value;

    if (type === "请选择报修类型") {
      alert("请选择报修类型！");

      return;
    }

    alert("报修提交成功！\n工作人员将尽快进行处理。");

    window.location.href = "/User/home.html";
  });
}

/*
==========================================
查看工单详情
==========================================
*/

function viewRepair(id) {
  let message = "";

  switch (id) {
    case "RP2026001":
      message =
        "工单编号：" +
        id +
        "\n报修类型：路灯损坏" +
        "\n地点：人民路与中山路路口" +
        "\n状态：处理中" +
        "\n负责人：张师傅";

      break;

    case "RP2026002":
      message =
        "工单编号：" +
        id +
        "\n报修类型：井盖缺失" +
        "\n地点：文化广场" +
        "\n状态：已完成";

      break;

    case "RP2026003":
      message =
        "工单编号：" +
        id +
        "\n报修类型：垃圾桶损坏" +
        "\n地点：幸福公园" +
        "\n状态：已受理";

      break;

    case "RP2026004":
      message =
        "工单编号：" +
        id +
        "\n报修类型：道路破损" +
        "\n地点：建设大道" +
        "\n状态：待受理";

      break;

    case "RP2026005":
      message =
        "工单编号：" +
        id +
        "\n报修类型：绿化损坏" +
        "\n地点：滨江公园" +
        "\n状态：已完成";

      break;

    default:
      message = "暂无工单详情。";
  }

  alert(message);
}

/*
==========================================
修改资料
==========================================
*/

function editProfile() {
  alert("演示系统暂未开放修改资料功能。");
}

/*
==========================================
修改密码
==========================================
*/

function changePassword() {
  const pwd = prompt("请输入新的密码：");

  if (pwd === null) {
    return;
  }

  if (pwd.trim() === "") {
    alert("密码不能为空！");

    return;
  }

  alert("密码修改成功！（演示效果）");
}

/*
==========================================
返回首页
==========================================
*/

function goHome() {
  window.location.href = "/User/home.html";
}

/*
==========================================
页面跳转
==========================================
*/

function goRepair() {
  window.location.href = "/User/repair.html";
}

function goMyRepair() {
  window.location.href = "/User/myRepair.html";
}

function goProfile() {
  window.location.href = "/User/profile.html";
}

/*
==========================================
刷新页面
==========================================
*/

function refreshPage() {
  location.reload();
}

/*
==========================================
提示信息
==========================================
*/

function showMessage(message) {
  alert(message);
}

// 创建地图

const map = L.map("map").setView([31.2304, 121.4737], 13);

// 加载地图

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
}).addTo(map);

// Marker

let marker;
map.on("click", function (e) {
  const lat = e.latlng.lat;

  const lng = e.latlng.lng;

  // 删除旧Marker

  if (marker) {
    map.removeLayer(marker);
  }

  // 新Marker

  marker = L.marker([lat, lng]).addTo(map);

  // 保存坐标

  document.getElementById("latitude").value = lat;

  document.getElementById("longitude").value = lng;

  document.getElementById("address").value =
    "纬度：" + lat.toFixed(6) + "，经度：" + lng.toFixed(6);
});
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (pos) {
    const lat = pos.coords.latitude;

    const lng = pos.coords.longitude;

    map.setView([lat, lng], 16);
  });
}
