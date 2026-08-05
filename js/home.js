// ================================
// 用户首页 JS
// ================================

// 页面加载完成
window.onload = function () {
  console.log("用户首页加载完成！");
};

// ================================
// 退出登录
// ================================

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
  logoutBtn.addEventListener("click", function () {
    const result = confirm("确定要退出登录吗？");

    if (result) {
      window.location.href = "/User/login.html";
    }
  });
}

// ================================
// 我要报修
// ================================

function goRepair() {
  window.location.href = "/User/repair.html";
}

// ================================
// 我的报修
// ================================

function goHistory() {
  window.location.href = "/User/myRepair.html";
}

// ================================
// 公告通知
// ================================

function goNotice() {
  window.location.href = "/User/notice.html";
}

// ================================
// 个人中心
// ================================

function goProfile() {
  window.location.href = "/User/profile.html";
}
function goEvaluate() {
  window.location.href = "/User/evaluate.html";
}
