document.querySelectorAll(".spoiler-item__trigger").forEach((item) => {
  item.addEventListener("click", () => {
    const parent = item.parentNode;
    parent.classList.toggle("spoiler-item_active");
  });
});
