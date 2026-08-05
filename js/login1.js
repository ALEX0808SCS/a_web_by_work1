// 获取表单
const loginForm = document.getElementById("loginForm");

// 登录事件
loginForm.addEventListener("submit", function (e) {
  // 阻止表单默认提交
  e.preventDefault();

  // 获取输入内容
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // 简单验证
  if (username === "") {
    alert("请输入用户名！");
    document.getElementById("username").focus();
    return;
  }

  if (password === "") {
    alert("请输入密码！");
    document.getElementById("password").focus();
    return;
  }

  // 模拟登录成功
  alert("登录成功！");

  // 跳转后台首页
  window.location.href = "/Admin/admin.html";
});

// 支持 Enter 键登录
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    loginForm.requestSubmit();
  }
});
