const galleryImages = document.querySelectorAll(".gallery-img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightbox-img");

galleryImages.forEach(image => {

    image.addEventListener("click", function(){

        lightbox.style.display = "flex";

        lightboxImage.src = this.src;

    });

});


document.getElementById("close").addEventListener("click", function(){

    lightbox.style.display = "none";

});


lightbox.addEventListener("click", function(event){

    if(event.target === lightbox){

        lightbox.style.display = "none";

    }

});
