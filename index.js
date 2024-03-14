const swiperEl = document.querySelector('swiper-container')

    const params = {
      injectStyles: [`
      .swiper-pagination-bullet {
        width: 20px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        font-size: 18px;
        color: #000;
        opacity: 1;
        background: rgba(0, 0, 0, 0.2);
      }

      .swiper-pagination-bullet-active {
        color: #fff;
        background: #ffad00;
      }
      `],
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
    }

    Object.assign(swiperEl, params)

    swiperEl.initialize();

function appear() {
    document.querySelector(".ul-list").classList.toggle("display");
}


function showDiv(Div) {
  var x = document.getElementById(Div);
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


function formDiv(Div) {
  var formDiv = document.getElementById(Div);
  if (formDiv.style.display == "none") {
    formDiv.style.display = "block";
  } else {
    formDiv.style.display = "none";
  }
}


function hideDiv(Div) {
  var hide = document.getElementById(Div);
  
  if (hide.style.display == "none") {  
   
  } else {
    hide.style.display = "none";
    // document.querySelector('input').value= ' ';  
  }
}


$(document).ready(function () {
  $(".customer-logos").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 300,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });
});




