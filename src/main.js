document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".input-form");
  const goal = document.getElementById("goal");
  const time = document.getElementById("goal-time");

  const resultGoal = document.querySelector(".result-group");
  const btnCont = document.querySelector(".btn-cont");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // ← 기본 새로고침 막기
    console.log(goal.value, time.value);

    // 결과 업데이트
    resultGoal.classList.add("active");
    btnCont.classList.add("active");

    const userGoal = document.querySelector(".user-goal");
    const userTime = document.querySelector(".user-time");
    let days = 10000;

    userGoal.textContent = goal.value;
    userTime.textContent = Math.round(days / +time.value);

    console.log(userGoal, userTime);

    // 입력칸 비우기
    form.reset();
    goal.focus();
  });
});
