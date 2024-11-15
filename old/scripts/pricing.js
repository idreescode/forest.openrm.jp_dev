const plans = document.querySelectorAll(
  ".fee-mobile .plan-card .plan-card-footer"
);

const otherPlans = document.querySelectorAll(".fee-mobile .plan-info");

plans.forEach((plan) => {
  plan.addEventListener("click", () => {
    const isOpen = plan.classList.contains("open");
    const planInfo = plan.parentElement.parentElement.children[1];

    if (!isOpen) {
      otherPlans.forEach((plan) => (plan.className = "hidden plan-info"));
      plans.forEach((plan) => plan.classList.remove("open"));
    }

    plan.classList.toggle("open");
    planInfo.classList.toggle("hidden");
  });
});
