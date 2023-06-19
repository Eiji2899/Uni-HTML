document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const description = document.querySelectorAll(".description");
    const currentTime = document.getElementById("current-time");
  
    let counter = 0;
    const slideWidth = slides[0].clientWidth;

    slider.style.transform = `translateX(${-slideWidth * counter}px)`;

    description[counter].style.display = "block";

    nextBtn.addEventListener("click", () => {
      if (counter >= slides.length - 1) return;
      counter++;
      slider.style.transform = `translateX(${-slideWidth * counter}px)`;
      resetDescriptionDisplay();
      description[counter].style.display = "block";
    });
  
    prevBtn.addEventListener("click", () => {
      if (counter <= 0) return;
      counter--;
      slider.style.transform = `translateX(${-slideWidth * counter}px)`;
      resetDescriptionDisplay();
      description[counter].style.display = "block";
    });

    function resetDescriptionDisplay() {
      description.forEach((desc) => {
        desc.style.display = "none";
      });
    }
  
    function updateCurrentTime() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      currentTime.textContent ="Current Time: " + `${hours}:${minutes}:${seconds}`;
    }

    setInterval(updateCurrentTime, 1000);

    updateCurrentTime();
  });
  