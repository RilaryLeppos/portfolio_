function scrollPage() {
   const link = document.querySelectorAll(".js-menu a[href^='#']");
   function scrollToSectionSmooth(e){
      e.preventDefault();
      const href = e.currentTarget.getAttribute('href');
      const section = document.querySelector(href);
      section.scrollIntoView({
         behavior: 'smooth',
         block: 'start',
      });
   }

   link.forEach((e) =>{
      e.addEventListener('click', scrollToSectionSmooth);
   });
}
scrollPage();

const animationScroll = document.querySelectorAll('.js-scroll');

if(animationScroll.length) {

   const windowMetade = window.innerHeight * 0.6;
   function animaScroll() {

     animationScroll.forEach((a) => {
       const sectionTop = a.getBoundingClientRect().top;
       const isSectionVisible = (sectionTop - windowMetade) < 0;
       if(isSectionVisible)
         a.classList.add('ativo');
       else 
         a.classList.remove('ativo');
     });
   }

   animaScroll();
   window.addEventListener('scroll', animaScroll);
}

