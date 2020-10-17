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

  window.onscroll = () => {
    navbarOnScroll();
  }
  
  
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
              dots: false
            }
          }
        ]
      });
  });



  /*autoplay: true,
        autoplaySpeed: 2000,*/
