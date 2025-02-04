function toggleCard(card) {
    const role = card.querySelector(".role");
    const socialIcons = card.querySelector(".social-icons");
  
    if (role.classList.contains("hidden")) {
      role.classList.remove("hidden");
      socialIcons.classList.remove("hidden");
    } else {
      role.classList.add("hidden");
      socialIcons.classList.add("hidden");
    }
  }
  
  

function scrollL(){
  
  const carousel = document.querySelector(".carousel");

    if (carousel) {
       //console.log("Current scrollLeft:", carousel.scrollLeft); // Debug current scroll position

        carousel.scrollBy({ left: -400, behavior: "smooth" }); // Correct negative scroll
       //console.log("Scrolled left by -400 pixels");
    } else {
        console.error("Carousel element not found");
    }
  
}

function scrollRight() {
    const carousel = document.querySelector(".carousel");
    carousel.scrollBy({ left: 250, behavior: "smooth" }); // Use 'left' for horizontal scrolling
}