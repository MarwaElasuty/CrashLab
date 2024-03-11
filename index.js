

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
    hide.style.display = "block";
  } else {
    hide.style.display = "none";
    // Apply blur on close
    var contactForm = document.getElementById("contact-form");
    contactForm.style.filter = "blur(20px)";
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



