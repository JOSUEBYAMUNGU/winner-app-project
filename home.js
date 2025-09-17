 // Défilement fluide
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    //nav
    
   let barmobile=document.querySelector('.barmobile')

   barmobile.addEventListener('click',
    ()=>{
      document.querySelector('.menu-mobile').classList.toggle('active-menu-mobile')
    }
   )




//back slide
const images = [
  "photo/josh1.jpg",
  "photo/josh2.jpg",
  "photo/josh3.jpg"
];

let slideIndex = 0;
const slideshowBg = document.querySelector('.slideshow-bg');

function showBgSlide() {
  slideshowBg.style.backgroundImage = `url('${images[slideIndex]}')`;
  slideIndex = (slideIndex + 1) % images.length;
  setTimeout(showBgSlide, 4000);
}

showBgSlide();