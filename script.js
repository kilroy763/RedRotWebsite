
var flkty = new Flickity( '.main-gallery', {
    // options
    cellAlign: 'left',
    contain: true
  });
  function openNav() {
    document.getElementById("auto11").style.width = "100%";
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    const body = document.body;
    body.style.overflow = 'hidden';
    body.style.top = `-${scrollY}`;
  }
  
  function closeNav() {
    document.getElementById("auto11").style.width = "0%";
    const body = document.body;
    
    body.style.overflow = '';
    body.style.top = '';
   
  }

  window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
  });
