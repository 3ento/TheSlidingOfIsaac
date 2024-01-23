document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("carousel");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
  
    let currentIndex = 0;
  
    function updateCarousel() {
      const translateYValue = -currentIndex * 50 + "%";
      carousel.style.transform = `translateY(${translateYValue})`;
    }
  
    function showPrev() {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    }
  
    function showNext() {
      const totalItems = document.querySelectorAll("#carousel-item").length;
      if (currentIndex < totalItems - 1) {
        currentIndex++;
        updateCarousel();
      }
    }
  
    function handleKeyDown(event) {
      // Check if the pressed key is the spacebar (keyCode 32)
      if (event.keyCode === 32) {
        showNext();
        document.getElementById("menu-sfx").play();
      }
    }
  
    prevBtn.addEventListener("click", showPrev);
    nextBtn.addEventListener("click", showNext);
  
    // Add touch events for swipe functionality
    let touchStartY;
  
    carousel.addEventListener("touchstart", function (e) {
      touchStartY = e.touches[0].clientY;
    });
  
    carousel.addEventListener("touchend", function (e) {
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchEndY - touchStartY;
  
      if (deltaY > 50) {
        showPrev();
      } else if (deltaY < -50) {
        showNext();
      }
    });
  
    // Add event listener for spacebar key press
    document.addEventListener("keydown", handleKeyDown);
  
    // Update the height of the container dynamically
    window.addEventListener("resize", function () {
      const itemHeight = document.querySelector("#carousel-item").offsetHeight;
      document.querySelector(".carousel-container").style.height = `${itemHeight}px`;
    });
  
    // Initial height adjustment
    const itemHeight = document.querySelector("#carousel-item").offsetHeight;
    document.querySelector(".carousel-container").style.height = `${itemHeight}px`;
  });