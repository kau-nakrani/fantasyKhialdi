// _BEGIN HEADER JS
$(window).scroll(function () {
  if ($(this).scrollTop() > 0) {
    $("header").addClass("fixed");
  } else {
    $("header").removeClass("fixed");
  }
});
// ENDS HEADER JS
// _BEGIN MOBILE MENU JS
$(document).ready(function () {
  $(".mobile-menu-ico").click(function () {
    $(".mobile-menu-wrap").addClass("mobile-menu-wrap-show");
  });

  $(".close-ico").click(function () {
    $(".mobile-menu-wrap").removeClass("mobile-menu-wrap-show");
  });
});

$(document).mouseup(function (e) {
  var popup = $(".mobile-menu-wrap");
  if (
    !$(".mobile-menu-ico").is(e.target) &&
    !popup.is(e.target) &&
    popup.has(e.target).length == 0
  ) {
    popup.removeClass("mobile-menu-wrap-show");
  }
});
$(document).ready(function () {
  $(".list-menu .link").click(function () {
    $(".mobile-menu-wrap").removeClass("mobile-menu-wrap-show");
  });
});
// _ENDS MOBILE MENU JS
// _BEGIN > ACCORDION SCRIPT < SHB
var acc = document.getElementsByClassName("fank-accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
// _ENDS > ACCORDION SCRIPT < SHB
// _BEGIN > PLAY FANTASY SECTION < SHB -->
var swiper = new Swiper(".play-fantasy-swiper", {
  slidesPerView: 1,
  spaceBetween: 32,
  slidesPerGroup: 1,
  loop: false,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 5000,
  },
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    375: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
    1200: {
      slidesPerView: 3.8,
      spaceBetween: 25,
    },
    1366: {
      slidesPerView: 3.8,
      spaceBetween: 32,
    },
  },
});
// _BEGIN > PLAY FANTASY SECTION < SHB -->
// _BEGIN > PLAY FANTASY SECTION MODAL < SHB -->
var modal = document.querySelector(".modal");
var trigger = document.querySelectorAll(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal(event) {
	modal.classList.toggle("show-modal");
	if(event){
		let video_url = event.currentTarget.dataset.vurl;
		var element = document.querySelector('.show-modal .play-fantasy-modal-body iframe').src= video_url;
	}	
}

function windowOnClick(event) {	
  if (event.target === modal) {
    toggleModal();
  }
}


trigger.forEach(el => el.addEventListener('click', event => {
	toggleModal(event);
}));


//trigger.addEventListener("click", toggleModal);
if(closeButton){
	closeButton.addEventListener("click", toggleModal);
}
window.addEventListener("click", windowOnClick);
// _BEGIN > PLAY FANTASY SECTION MODAL < SHB -->

// _BEGIN > WHY WE LOVE FANTASY KHILADI < SHB -->
  // Assign some jquery elements we'll need
  var $swiper = $(".why-we-love-fk-review");
  var $bottomSlide = null; // Slide whose content gets 'extracted' and placed
  // into a fixed position for animation purposes
  var $bottomSlideContent = null; // Slide content that gets passed between the
  // panning slide stack and the position 'behind'
  // the stack, needed for correct animation style

  var mySwiper = new Swiper(".why-we-love-fk-review", {
    spaceBetween: 1,
    slidesPerView: 3,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 0,
    autoplay: {
      delay: 4000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1.5,
      },
      992: {
        slidesPerView: 2.5,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });
// _ENDS > WHY WE LOVE FANTASY KHILADI < SHB -->