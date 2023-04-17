const categories = document.querySelectorAll(".category");
const activeImage = null;
categories.forEach(image => {
    image.addEventListener("click", () => {
        const categoryImgID = image.dataset.categoryimg;
        const categoryImg = document.getElementById(categoryImgID);
        categoryImg.classList.toggle("active");
    });
});