(function () {
  const sliderContainer = document.querySelector('.slider-container');
  const images = sliderContainer.getElementsByTagName('img');
  let currentImageIndex = 0;

  function showImage(index) {
    for (let i = 0; i < images.length; i++) {
      images[i].style.display = 'none';
    }
    images[index].style.display = 'block';
  }

  function slideNext() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
  }

  function slidePrevious() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
  }

  function attachButtonEvents() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    prevBtn.addEventListener('click', slidePrevious);
    nextBtn.addEventListener('click', slideNext);
  }
  function updateClock() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    var clockElement = document.getElementById("clock");
    clockElement.textContent = hours + ":" + minutes + ":" + seconds;
  }

  attachButtonEvents();
  setInterval(slideNext, 10000);
  setInterval(updateClock, 1000);
})();



