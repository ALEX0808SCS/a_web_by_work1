// 星级评分

const stars = document.querySelectorAll(".star");

stars.forEach((star, index) => {
  star.onclick = function () {
    stars.forEach((s, i) => {
      if (i <= index) {
        s.classList.add("active");
      } else {
        s.classList.remove("active");
      }
    });
  };
});

// 标签

const tags = document.querySelectorAll(".tag-group button");

tags.forEach((tag) => {
  tag.onclick = function () {
    this.classList.toggle("active");
  };
});

// 提交

document.getElementById("submitEvaluate").onclick = function () {
  alert("评价提交成功！");

  window.location.href = "myRepair.html";
};
