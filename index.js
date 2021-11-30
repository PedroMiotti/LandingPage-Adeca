$(document).ready(function() {

  // Fixed navbar on Scroll
  let header = $('#navbar');
  let navbuttons = $('.navbuttons');
  let logoadeca = $('.logo-adeca');

  let sticky = header.offset().top;

  function navbarOnScroll() {

    if (window.pageYOffset > sticky) {
      navbuttons.addClass('navbuttons-sticky');
      logoadeca.addClass('logoadeca-sticky');
      header.addClass("navbar-sticky");
  
      $(".logo-adeca-img").attr("src","assets/adeca-verde-vetorizado.png");

    } 
    else {
      header.removeClass("navbar-sticky");
      navbuttons.removeClass('navbuttons-sticky')
      logoadeca.removeClass('logoadeca-sticky');

      $(".logo-adeca-img").attr("src","assets/adeca-preto-vetorizado.png");
    }
  }


    // Sidenav toggle
    let sidenav = $('.sidebar-container');
    let openBtt = $('.hamburguer-menu');
    let closeBtt = $('.close-sidenav');
    
    openBtt.click(() => {
      sidenav.addClass('toggle-sidenav');
  
    })
  
    closeBtt.click(() => {
      sidenav.removeClass('toggle-sidenav');
  
    })


  // Show modal on scroll
  function modalOnScroll() {
    let modal = $("#modal-conteudo");
    let overlay = $('#overlay-modal');
    let body = $('body');
    
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    
    if ($(document).scrollTop() > 700 && modal.attr("displayed") === "false") {
      modal.attr("displayed", "true");
      modal.removeClass('hide-modal');
      modal.addClass('modal-conteudo-container');

      overlay.removeClass('hide-overlay-modal');
      overlay.addClass('overlay-modal')
      overlay.css('top', `${scrollY}`)

      body.css('position', 'fixed');
      body.css('top', `-${scrollY}`)
      
    }
  }

  const closeModal = () => {
    let body = $('body');
    let modal = $("#modal-conteudo");
    let overlay = $('#overlay-modal');

    const scrollY = body.css('top');

    body.css('position', '');
    body.css('top', '');
    
    window.scrollTo(0, parseInt(scrollY || '0') * -1);

    modal.removeClass('modal-conteudo-container');
    modal.addClass('hide-modal');

    overlay.removeClass('overlay-modal')
    overlay.addClass('hide-overlay-modal');

  }

  // Close modal button
  let closeBttModal = $('#close-modal-btt');
  closeBttModal.click(() => {
    closeModal();
  })


  // Scroll to top button 
  $('#back-top-button').click(() => {
    window.scrollTo(0, 0);
  })


  window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
  });

  window.onscroll = () => {
    navbarOnScroll();
    modalOnScroll();
  }


  // toggle input inside modal
  let whatsChecked = $('#whats-radio');
  let emailChecked = $('#email-radio');

  let emailInput = $('#email-input');
  emailInput.addClass('hide-form-input')

  let telInput = $('#tel-input');
  
  emailChecked.click(() => {
    telInput.toggleClass('hide-form-input')
    emailInput.removeClass('hide-form-input')
  })
  
  whatsChecked.click(() => {
      emailInput.toggleClass('hide-form-input')
      telInput.removeClass('hide-form-input')
  })


    // Servicos card flip animation
    $('.button-flip-control1').click(function() {
      $('.planoNegocio-container').toggleClass('flipped');
      return false;
    });

    $('.button-flip-control2').click(function() {
        $('.viabilidadeEcon-container').toggleClass('flipped');
        return false;
      });

      $('.button-flip-control3').click(function() {
        $('.analiseSeg-container').toggleClass('flipped');
        return false;
      });

      $('.button-flip-control4').click(function() {
        $('.orgFinanceira-container').toggleClass('flipped');
        return false;
      });

      $('.button-flip-control5').click(function() {
        $('.elaboConteudo-container').toggleClass('flipped');
        return false;
      });
      
      // Carousel setup
      $('.carousel-slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrows : false,
            }
          }
        ]
      });
  });


