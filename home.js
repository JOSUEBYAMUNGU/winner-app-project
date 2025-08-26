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