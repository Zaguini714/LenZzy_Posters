const filterButtons = document.querySelectorAll(".filter-button");
const posterCards = document.querySelectorAll(".poster-card");
const viewCount = document.querySelector("#view-count");

window.addEventListener("load", () => {
  setTimeout(() => {
    document.body.classList.remove("is-loading");
    document.body.classList.add("loader-done");
  }, 900);
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    posterCards.forEach((card) => {
      const categories = card.dataset.category.split(" ");
      const shouldShow = filter === "all" || categories.includes(filter);
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

if (viewCount) {
  const savedViews = Number(localStorage.getItem("lenzzPosterViews") || "0");
  const nextViews = savedViews + 1;

  localStorage.setItem("lenzzPosterViews", String(nextViews));
  viewCount.textContent = nextViews.toLocaleString();
}
