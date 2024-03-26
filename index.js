

function change_arabic() {

  const bodyElement = document.getElementById('body');
  if (bodyElement) {
    bodyElement.style.direction = "rtl";
  }

  const customerStoriesRightElements = document.querySelector('.customer-stories-right');
  if (customerStoriesRightElements) {
    customerStoriesRightElements.classList.add("arabic-customers");
    customerStoriesRightElements.classList.remove('right-column');
  }

  var ArabicAboutContainer = document.querySelector(".about-container");
  if (ArabicAboutContainer) {
    ArabicAboutContainer.classList.toggle("arabic-about-container");

    // If the element has the "english-about-container" class, remove it
    if (ArabicAboutContainer.classList.contains("english-about-container")) {
      ArabicAboutContainer.classList.remove("english-about-container");
    }
  }


  var ArabicAboutDescOne = document.querySelector(".desc-onee")
  if (ArabicAboutDescOne) {
    ArabicAboutDescOne.classList.toggle("arabic-desc-onee");

    if (ArabicAboutDescOne.classList.contains("english-desc-onee")) {
      ArabicAboutDescOne.classList.remove("english-desc-onee");
    }
  }


 var ArabicAboutDescTwo = document.querySelector(".desc-two")
  if (ArabicAboutDescTwo) {
    ArabicAboutDescTwo.classList.toggle("arabic-desc-two");

    if (ArabicAboutDescTwo.classList.contains("english-desc-two")) {
      ArabicAboutDescTwo.classList.remove("english-desc-two");
    }
  }

  var contactFormContainer = document.querySelector('.contact-form-container');
  if (contactFormContainer) {
    contactFormContainer.classList.add("arabic-contact-black");
    contactFormContainer.classList.remove('contact-form-container');
  }


  var contactFormContainer = document.querySelector('.ul-list');
  if (contactFormContainer) {
    contactFormContainer.classList.toggle("arabic-ul-list");

    // If the element has the "english-ul-list" class, remove it
    if (contactFormContainer.classList.contains("english-ul-list")) {
      contactFormContainer.classList.remove("english-ul-list");
    }
  }

  const innovativeCardsLeftColumn = document.querySelector(".innovative-cards .left-column");
  if (innovativeCardsLeftColumn) {
    innovativeCardsLeftColumn.classList.add("arabic-innovative-cards-left-column");
    innovativeCardsLeftColumn.classList.remove('english-innovative-cards-left-column');
  }


  const addedRealText = document.querySelector(".added-real-text");
  if (addedRealText) {
    addedRealText.classList.add("arabic-added-real-text");
    addedRealText.classList.remove('added-real-text');
  }

  const lastAddedCard = document.querySelector(".last-added-card");
  if (lastAddedCard) {
    lastAddedCard.classList.add("arabic-last-added-card");
    lastAddedCard.classList.remove('last-added-card');
  }

  const orangeCard = document.querySelector(".orange-card");
  if (orangeCard) {
    orangeCard.classList.add("arabic-orange-card");
    orangeCard.classList.remove('.orange-card');
    orangeCard.classList.remove('english-orange-card');
  }


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



  function change_english() {
    const bodyElement = document.getElementById('body');
    if (bodyElement) {
      bodyElement.style.direction = "ltr";
    }

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


    const customerStoriesRightElements = document.getElementsByClassName('arabic-customers');
    if (customerStoriesRightElements.length > 0) {
      customerStoriesRightElements[0].classList.add("english-customers");
      customerStoriesRightElements[0].classList.remove('arabic-customers');
    }


    const innovativeCardsLeftColumn = document.querySelector(".arabic-innovative-cards-left-column");
    if (innovativeCardsLeftColumn) {
      innovativeCardsLeftColumn.classList.add("english-innovative-cards-left-column");
      innovativeCardsLeftColumn.classList.remove('arabic-innovative-cards-left-column');
    }

    var englishContactFormContainer = document.querySelector('.contact-form-container');
    if (englishContactFormContainer) {
      englishContactFormContainer.classList.add("english-contact-black");
      contactFormContainer.classList.add("contact-form-container"); // Retain the generic class

      englishContactFormContainer.classList.remove('arabic-contact-black');
    }


    var contactFormContainer = document.querySelector('.ul-list');
    if (contactFormContainer) {
      contactFormContainer.classList.toggle("english-ul-list");

      // If the element has the "arabic-ul-list" class, remove it
      if (contactFormContainer.classList.contains("arabic-ul-list")) {
        contactFormContainer.classList.remove("arabic-ul-list");
      }
    }


    var ArabicAboutContainer = document.querySelector(".about-container");
    if (ArabicAboutContainer) {
      ArabicAboutContainer.classList.toggle("english-about-container");

      // If the element has the "english-about-container" class, remove it
      if (ArabicAboutContainer.classList.contains("arabic-about-container")) {
        ArabicAboutContainer.classList.remove("arabic-about-container");
      }
    }


    var EnglishAboutDescOne = document.querySelector(".desc-onee");
    if (EnglishAboutDescOne) {
      EnglishAboutDescOne.classList.toggle("english-desc-onee");

      if (EnglishAboutDescOne.classList.contains("arabic-desc-onee")) {
        EnglishAboutDescOne.classList.remove("arabic-desc-onee");
      }
    }


    var EnglishAboutDescTwo = document.querySelector(".desc-two")
  if (EnglishAboutDescTwo) {
    EnglishAboutDescTwo.classList.toggle("english-desc-twoo");

    if (EnglishAboutDescTwo.classList.contains("arabic-desc-two")) {
      EnglishAboutDescTwo.classList.remove("arabic-desc-two");
    }
  }

  }

    function appear() {
      document.querySelector(".ul-list").classList.toggle("display");
    }



    function showDiv(Div) {
      var x = document.getElementById(Div);
      let inputName = document.forms["contact-form"]["user_name"].value;
      let inputEmail = document.forms["contact-form"]["user_email"].value;
      let inputSubject = document.forms["contact-form"]["user_subject"].value;
      let inputMsg = document.forms["contact-form"]["message"].value;

      if (x.style.display == "none") {
        if (inputName != "" && inputEmail != "" && inputSubject != "" && inputMsg != "") {
          x.style.display = "block";
        }
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
        document.getElementById('contact-form').reset();
      }
    }



    function displayLanguageOptions() {
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

    languageToggle.addEventListener("click", function () {
      languageToggle.classList.toggle("active");
    });


    function welcoming() {
      console.log("hello");
    }
  