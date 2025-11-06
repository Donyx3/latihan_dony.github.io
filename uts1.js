document.addEventListener("DOMContentLoaded", function() {
  const loadMoreBtn = document.getElementById("load-more-btn");
  const hiddenGallery = document.querySelector(".hidden-gallery");

  loadMoreBtn.addEventListener("click", function() {
    if (hiddenGallery.style.display === "none" || hiddenGallery.style.display === "") {
      hiddenGallery.style.display = "flex";
      loadMoreBtn.textContent = "Show Less";
    } else {
      hiddenGallery.style.display = "none";
      loadMoreBtn.textContent = "Load More";
    }
  });
});


