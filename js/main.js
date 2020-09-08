  $(document).ready(()=>{

    $('body, html').css('overflow','hidden');

    $('.preloader .animation-container').fadeOut(8000, ()=>{
      $('.preloader').fadeOut(1000,()=>{
        $('body, html').css('overflow','visible')
      })     
    });
  
    $('.carousel').carousel({
      interval: false
    })

    window.onscroll=()=>{
    
      // Add style to navbar when Scroll 
      if(window.pageYOffset >= 100){
        $('nav').css('border-bottom','1px solid #444');
      }else{
        $('nav').css('border-bottom','none');  
      }

      // Show-hide scroll to top button
      if(window.pageYOffset >= 350){
        $('.scrollTop_btn').css('display', 'block')    
      }else{
        $('.scrollTop_btn').css('display', 'none')      
      }
    }

    // next button to scroll to down 
    $('.arrow').on('click', ()=>{
      document.querySelector('.chairty_info').scrollIntoView({
        behavior:'smooth'
      })
    })

    // scroll top top
    $('.scrollTop_btn .fa').on('click', ()=>{
      $("html, body").animate({ scrollTop: 0 }, 600);
    })
    // increase number when arrive in statistics section 
    // let windowHeight = window.innerHeight;
    // let windowOffset = window.pageYOffset;
    // let StatSectionHeight = document.querySelector('.statistics').offsetHeight;
    // let statSectionTop = document.querySelector('.statistics').offsetTop;

    // if(windowOffset >= (statSectionTop + StatSectionHeight - windowHeight)){
    //   let numbers = document.querySelectorAll('.increase');
    //   numbers.forEach(number=>{
    //     let value = 0;
    //     number.innerText = value; 
    //     let interval = setInterval(() => {
    //       value = value + 120;
    //       number.innerText = value;
    //       if(value >= 1450){
    //         clearInterval(interval);
    //       }
    //     }, 200);
    //   })
    // }
  })