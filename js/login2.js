// ===========================
// 用户登录
// ===========================

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value.trim();

  // 手机号不能为空
  if (phone === "") {
    alert("请输入手机号！");

    return;
  }

  // 手机号格式
  if (!/^1\d{10}$/.test(phone)) {
    alert("请输入正确的11位手机号！");

    return;
  }

  // 密码不能为空
  if (password === "") {
    alert("请输入密码！");

    return;
  }

  // 登录成功提示
  alert("登录成功，欢迎使用市政设施报修平台！");

  // 跳转首页
  window.location.href = "/User/home.html";
});

// ===========================
// Enter 键登录
// ===========================

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    document.getElementById("loginBtn").click();
  }
});

// ===========================
// 输入框获得焦点效果
// ===========================

const inputs = document.querySelectorAll("input");

inputs.forEach(function (input) {
  input.addEventListener("focus", function () {
    input.style.background = "#f8fbff";
  });

  input.addEventListener("blur", function () {
    input.style.background = "#ffffff";
  });
});

// ===========================
// 页面加载动画
// ===========================

window.onload = function () {
  console.log("用户登录页面加载完成");
};

// ===========================
// 防止重复提交
// ===========================

let isSubmitting = false;

loginForm.addEventListener("submit", function (event) {
  if (isSubmitting) {
    event.preventDefault();

    return;
  }

  isSubmitting = true;

  setTimeout(function () {
    isSubmitting = false;
  }, 1000);
});
