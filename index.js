

// function sendEmail() {

//   Email.send({
//       SecureToken: "dd899629-cca1-4ee2-8779-eafa408b00ce",
//       Host: "smtp.elasticemail.com",
//       Port: 2525,
//       Username: "marwa.mohamed8712000@gmail.com",
//       Password: "80FAF89EBB53CBB62E9A3BE538A03B876BBE",
//       To: 'esraamortada809@gmail.com',
//       From: 'marwa.mohamed8712000@gmail.com',
//       Subject: "This is the subject",
//       Body: "Name:" + document.getElementById('username').value +
//           "<br> Email: " + document.getElementById('useremail').value +
//           "<br> Phone: " + document.getElementById('usersub').value +
//           "<br> Message: " + document.getElementById('usermsg').value

//   }).then(
//       message => alert(message)
//   );
// }

/* Send email to the user via EmailJS */

// const contactForm = document.getElementById('contact-form'),
//     contactMessage = document.getElementById('contact-message')


// const sendEmail = (e) =>{
//     e.preventDefault();
//     emailjs.sendForm('service_u0t85ax', 'template_sq0onfo', '#contact-form', 'NGE7DmxLauJeUM9jb')
// }

// contactForm.addEventListener('submit', sendEmail)


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
  var contactFormContainer = document.querySelector('.contact-form-container');
  if (contactFormContainer) {
    contactFormContainer.classList.add("arabic-contact-black");
    contactFormContainer.classList.remove('contact-form-container');
  }

  // Navbar
  var contactFormContainer = document.querySelector('.ul-list');
  if (contactFormContainer) {
    contactFormContainer.classList.add("arabic-ul-list");
    contactFormContainer.classList.remove('ul-list');
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

  // Test Center orange card
  const orangeCard = document.querySelector(".test-center-background .orange-card");
  if (orangeCard) {
    orangeCard.classList.add("arabic-orange-card");
    orangeCard.classList.remove('test-center-background .orange-card');
    orangeCard.classList.remove('english-orange-card');

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

function change_english() {
  const bodyElement = document.getElementById('body');
  if (bodyElement) {
    bodyElement.style.direction = "ltr";
  }
  // document.getElementById('body').style.direction = "ltr";

  const orangeCard = document.querySelector(".test-center-background .orange-card");
  if (orangeCard) {
    orangeCard.classList.add("english-orange-card");
    orangeCard.classList.remove('arabic-orange-card');
  }

  const EnglishInnovativeCardsLeftColumn = document.querySelector(".innovative-cards .left-column");
  if (EnglishInnovativeCardsLeftColumn) {
    EnglishInnovativeCardsLeftColumn.classList.add("english-innovative-cards-left-column");
    EnglishInnovativeCardsLeftColumn.classList.remove("arabic-innovative-cards-left-column");
  }



  // if (contactFormContainer) {
  //   contactFormContainer.classList.add("contact-form-container");
  //   contactFormContainer.classList.remove('arabic-contact-black');
  // }

 
}






function appear() {
  document.querySelector(".ul-list").classList.toggle("display");
}



// function appear() {
//   const listElements = document.querySelectorAll(".mobile-menu, .arabic-ul-list");
//   listElements.forEach(element => element.classList.toggle("display"));
// }


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

  if (hide.style.display == "none") {
  } else {
    hide.style.display = "none";
    // document.querySelector('input').value= ' ';  
    document.getElementById('contact-form').reset();

  }
}


// $(document).ready(function () {
//   $(".customer-logos").slick({
//     slidesToShow: 6,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 300,
//     arrows: false,
//     dots: false,
//     pauseOnHover: false,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 4
//         }
//       },
//       {
//         breakpoint: 520,
//         settings: {
//           slidesToShow: 3
//         }
//       }
//     ]
//   });
// });


function displayLanguageOptions() {
  // #english-label
  // #arabic-label

  var dropdown = document.getElementsByClassName("section-dropdown")
  var arabicLabel = document.getElementById("arabic-label").onclick(() => {
    dropdown.style.display = "none";
  })
}




checkLang();

function checkLang() {
  if (localStorage.getItem('country')) {
    const country = JSON.parse(localStorage.getItem('country'));
    console.log(country);
    if (country.dir == 'rtl') {
      change_style();
    }
    document.body.dir = country.dir;
    console.log(JSON.parse(localStorage.getItem('country')));
  } else {
    const country = {
      lang: 'english',
      dir: 'ltr'
    }
    setLang(country);
  }
}


function setLang(country) {
  localStorage.setItem('country', JSON.stringify(country));
  document.body.dir = country.dir
}

function changeLang(direction) {
  console.log(direction);
  console.log(localStorage.getItem('country'));
  if (localStorage.getItem('country')) {
    let country = JSON.parse(localStorage.getItem('country'));
    console.log(direction);
    console.log(country.dir != direction);
    if (country.dir != direction) {

      country = {
        dir: direction
      }
      console.log(direction);
    }
    setLang(country);
  } else {
    const country = {
      lang: 'english',
      dir: 'ltr'
    }
    setLang(country);
  }
}


function mini_nav_language() {
 
  document.querySelector(".mini-nav-language").classList.toggle("display");
}


const languageToggle = document.querySelector(".language-toggle");
  const languageOptions = document.querySelector(".language-options");

  languageToggle.addEventListener("click", function() {
    languageToggle.classList.toggle("active");
  });