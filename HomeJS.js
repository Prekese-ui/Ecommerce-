const dropdownButton = document.getElementById ("seasonal-button");
const dropdownMenu = document.getElementById ("seasonal-menu");

dropdownButton.addEventListener("click", function () {
    if (dropdownMenu.style.display === "block"){
        dropdownMenu.style.display = "none";
    }
    else{
        dropdownMenu.style.display = "block";
    }
});


document.addEventListener("click", (event) => {
    if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
      dropdownMenu.style.display = "none";
    }
  });


  const images = document.querySelectorAll('.carousel img');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  let currentIndex = 0;
  
  function updateCarousel() {
    images.forEach((img, index) => {
      img.classList.remove('active', 'prev', 'next');
      if (index === currentIndex) {
        img.classList.add('active');
      } else if (index === (currentIndex - 1 + images.length) % images.length) {
        img.classList.add('prev');
      } else if (index === (currentIndex + 1) % images.length) {
        img.classList.add('next');
      }
    });
  }
  
  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  });
  
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
  });
  
  // Initialize
  updateCarousel();


  


