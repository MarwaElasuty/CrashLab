

/* Send email to the user via EmailJS */

const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')


const sendEmail = (e) =>{
    e.preventDefault();
    emailjs.sendForm('service_u0t85ax', 'template_sq0onfo', '#contact-form', 'NGE7DmxLauJeUM9jb')
}

contactForm.addEventListener('submit', sendEmail)

 
function change_arabic() {
  // Body element using getElementById
  const bodyElement = document.getElementById('body');
  if (bodyElement) {
    bodyElement.style.direction = "rtl";
  }

  // Customer Stories Right using getElementsByClassName
  const customerStoriesRightElements = document.getElementsByClassName('customer-stories-right');
  if (customerStoriesRightElements.length > 0) {
    customerStoriesRightElements[0].classList.add("arabic-customers");
    customerStoriesRightElements[0].classList.remove('right-column');
  }

  // About Container using document.querySelector
  const aboutContainer = document.querySelector(".about-container");
  if (aboutContainer) {
    aboutContainer.classList.add("arabic-about-container");
    aboutContainer.classList.remove('about-container');
  }

  // Desc One and Two using getElementsByClassName with loop
  var descElements = document.getElementsByClassName('desc-onee');
  for (let i = 0; i < descElements.length; i++) {
    descElements[i].classList.add("arabic-desc-onee");
    descElements[i].classList.remove('desc-onee');
  }

  descElements = document.getElementsByClassName('desc-two');
  for (let i = 0; i < descElements.length; i++) {
    descElements[i].classList.add("arabic-desc-two");
    descElements[i].classList.remove('desc-two');
  }

  // Contact Form Container using getElementById (assuming unique ID)
  var contactFormContainer = document.getElementById('contact-form-container');
  if (contactFormContainer) {
    contactFormContainer.classList.add("arabic-contact-black");
    contactFormContainer.classList.remove('contact-form-container');
  }

  // Innovative Cards Left Column using CSS selector with document.querySelector
  const innovativeCardsLeftColumn = document.querySelector(".innovative-cards .left-column");
  if (innovativeCardsLeftColumn) {
    innovativeCardsLeftColumn.classList.add("arabic-innovative-cards-left-column");
    innovativeCardsLeftColumn.classList.remove('left-column');
  }

  // Added Real Text using document.querySelector with similar selector
  const addedRealText = document.querySelector(".added-real-text");
  if (addedRealText) {
    addedRealText.classList.add("arabic-added-real-text");
    addedRealText.classList.remove('added-real-text');
  }

  // Last Added Card using document.querySelector with similar selector
  const lastAddedCard = document.querySelector(".last-added-card");
  if (lastAddedCard) {
    lastAddedCard.classList.add("arabic-last-added-card");
    lastAddedCard.classList.remove('last-added-card');
  }

  // Added Value Cards paragraphs using document.querySelectorAll
  const addedValueCardsParagraphs = document.querySelectorAll(".added-value-cards p");
  addedValueCardsParagraphs.forEach((para) => {
    para.classList.add("arabic-added-value-cards");
    para.classList.remove('added-value-cards');
  });

  // About Us Flex using document.querySelector with complex selector
  const aboutUsFlexBefore = document.querySelector(".about-us-flex .first-left-img-flex::before");
  if (aboutUsFlexBefore) {
    aboutUsFlexBefore.classList.add("arabic-first-left-img-flex-before");
    aboutUsFlexBefore.classList.remove('about-us-flex .first-left-img-flex::before');
  }
}
// function change_arabic(){

//   document.getElementById('body').style.direction = "rtl";
//   document.querySelector(".customer-stories-right").classList.add("arabic-customers");
//   document.querySelector('.customer-stories-right').classList.remove('right-column');

//   document.querySelector(".about-container").classList.add("arabic-about-container");
//   document.querySelector('.about-container').classList.remove('about-container');

//   document.querySelector(".desc-onee").classList.add("arabic-desc-onee");
//   document.querySelector('.desc-onee').classList.remove('desc-onee');

//   document.querySelector(".desc-two").classList.add("arabic-desc-two");
//   document.querySelector('.desc-two').classList.remove('desc-two');

//   document.querySelector(".contact-form-container").classList.add("arabic-contact-black");
//   document.querySelector('.contact-form-container').classList.remove('contact-form-container');
  

//   document.querySelector(".innovative-cards .left-column").classList.add("arabic-innovative-cards-left-column");
//   document.querySelector('.innovative-cards .left-column').classList.remove('left-column');

//   document.querySelector(".added-real-text").classList.add("arabic-added-real-text");
//   document.querySelector('.added-real-text').classList.remove('added-real-text');

//   document.querySelector(".last-added-card").classList.add("arabic-last-added-card");
//   document.querySelector('.last-added-card').classList.remove('last-added-card');

  
//   document.querySelectorAll(".added-value-cards p").forEach((para)=>{
//     para.classList.add("arabic-added-value-cards");
//     para.classList.remove('added-value-cards');
//   });

//   document.querySelector(".about-us-flex .first-left-img-flex::before").classList.add("arabic-first-left-img-flex-before");
//   document.querySelector('.about-us-flex .first-left-img-flex::before').classList.remove('about-us-flex .first-left-img-flex::before');
//  }

  function change_english(){
    document.getElementById('body').style.direction = "ltr";
  }


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
  var contactForm = document.getElementById('contact-form');

  if (hide.style.display == "none"){  
  } else {
    hide.style.display = "none";
    // document.querySelector('input').value= ' ';  
    document.getElementById('contact-form').reset();

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



