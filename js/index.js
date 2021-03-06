document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(MotionPathPlugin)

  checkInputFill()
  headerBurger()
  cases()
  caseSlider()
  clientsMarquee()
  costWorks()
  anchor()
  ourWork()
  popupScripts()
  goals()
  bannerAnim()
})

function checkInputFill() {
  const uiInputs = document.querySelectorAll('.ui-input')
  if (uiInputs) {
    for (const element of uiInputs) {
      const input = element.querySelector('input')
      input.value !== '' ? input.classList.add('filled') : input.classList.remove('filled')
      input.addEventListener('input', function () {
        input.value !== '' ? input.classList.add('filled') : input.classList.remove('filled')
      })
    }
  }
}

function ourWork() {
  $('.our-work__btn .ui-button').on('click', function () {
    $(this).parents('.our-work').find('.our-work__wrapper').toggleClass('our-work__wrapper--open')
    $(this).parents('.our-work').find('.our-work__item--hidden').fadeToggle()
    $(this).toggleText('Смотреть все', 'Свернуть')
  })
}

function costWorks() {
  $('.cost-works__btn .js-see-all').on('click', function () {
    $(this).parents('.cost-works__section').find('.cost-works__wrapper').toggleClass('cost-works__wrapper--open')
    $(this).toggleText('Смотреть все', 'Свернуть')
  })
}

function headerBurger() {
  $('.header__burger-btn').on('click', function () {
    if ($(this).hasClass('active')) {
      headerBurgerClose()
    } else {
      headerBurgerOpen()
    }
  })
  $('.header-overlay').on('click', function () {
    headerBurgerClose()
  })
}
function headerBurgerOpen() {
  $('html').addClass('ov-hidden')
  $('.header__burger-btn').addClass('active')
  $('.header-overlay').fadeIn()
  $('.header__burger').fadeIn()
}
function headerBurgerClose() {
  $('.header__burger-btn').removeClass('active')
  $('html').removeClass('ov-hidden')
  $('.header-overlay').fadeOut()
  $('.header__burger').fadeOut()
}

function anchor() {
  $('.js-anchor').on('click', function () {
    const _href = $(this).attr('href')
    if ($('.header__burger-btn').hasClass('active')) {
      headerBurgerClose()
    }
    $('html, body').animate({
      scrollTop: `${$(_href).offset().top}px`
    })
    return false
  })
}

function clientsMarquee() {
  const marqueeTime = 30000
  $('.clients__marquee--left').marquee({
    duration: marqueeTime,
    gap: 0,
    delayBeforeStart: -marqueeTime,
    direction: 'left',
    duplicated: true
  })
  $('.clients__marquee--right').marquee({
    duration: marqueeTime,
    gap: 0,
    delayBeforeStart: -marqueeTime,
    direction: 'right',
    duplicated: true
  })
}

function bannerAnim() {
  setTimeout(() => {
    gsap.to('.banner__decor-text', {
      motionPath: {
        path: '.banner__decor-svg .line1',
        align: '.banner__decor-svg .line1',
        autoRotate: true,
        alignOrigin: [0.5, 0.2],
        start: 0.43,
        end: 0.43
      },
      duration: 15,
      ease: 'none'
    })
  }, 100);
  setTimeout(() => {
    $('.banner__decor-tr--1').marquee({
      duration: 14000,
      gap: 0,
      delayBeforeStart: -14000,
      direction: 'left',
      duplicated: true
    })
  }, 500);

  setTimeout(() => {
    $('.banner__decor-tr--2').marquee({
      duration: 10500,
      gap: 0,
      delayBeforeStart: -10500,
      direction: 'left',
      duplicated: true
    })
  }, 500);

  setTimeout(() => {
    $('.banner__decor-tr--3').marquee({
      duration: 13500,
      gap: 0,
      delayBeforeStart: -13500,
      direction: 'left',
      duplicated: true
    })
  }, 500);

  setTimeout(() => {
    $('.banner__decor-tr--4').marquee({
      duration: 11000,
      gap: 0,
      delayBeforeStart: -11000,
      direction: 'left',
      duplicated: true
    })
  }, 500);
}

function caseSlider() {
  if ($(window).width() > 767) {
    const caseSwiper = new Swiper('.case-slider .swiper', {
      spaceBetween: 40,
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1340: {
          spaceBetween: 70,
        }
      }
    })
  }
}

function goals() {
  const goalsItem = $('.goals-item')
  goalsItem.on('click', function () {
    const activeIndex = $(this).index()
    $(this).siblings(goalsItem).removeClass('prev-active').removeClass('active')
    $(this).addClass('active')
    $(this).siblings(goalsItem).eq(activeIndex - 1).addClass('prev-active')
  })
}

function cases() {
  const tagItem = $('.case-tags__item')
  tagItem.on('click', function () {
    $(this).siblings(tagItem).removeClass('active')
    $(this).addClass('active')
  })

  if ($('.case-type').length) {
    const caseTypeSelect = document.querySelectorAll('.case-type__select select')
    const selectParent = caseTypeOther.parentElement
    const typeTag = $('.case-type__tag')
    $(caseTypeSelect).select2({
      minimumResultsForSearch: Number.POSITIVE_INFINITY,
      width: 'auto',
      dropdownAutoWidth: false,
      dropdownParent: selectParent,
      placeholder: function (){
        $(this).data('placeholder');
      }
    }).on('select2:select', function (e) {
      $(this).parents('.case-type').find(typeTag).removeClass('active')
      $(selectParent).addClass('active')
    })

    typeTag.on('click', function () {
      $(this).siblings().removeClass('active')
      $(this).addClass('active')
      $(caseTypeSelect).val(null).trigger('change');
    })
  }

  const caseItem = $('.case-item')
  $('.case-list__btn .ui-button').on('click', function () {
    $(this).parents('.case-list__btn').fadeOut(0)
    $(this).parents('.case-list').find('.case-item').removeClass('case-item--hidden case-item--mob-hidden')
  })
}

$.fn.extend({
  toggleText: function (textInitial, textSecondary) {
    return this.text(this.text() === textSecondary ? textInitial : textSecondary)
  }
})

function popupScripts() {
  Fancybox.bind('.js-popup', {
    hideScrollbar: true,
    touch: false,
    dragToClose: false,
    autoFocus: true,
    trapFocus: true,
    closeButton: false
  })

  Fancybox.defaults.ScrollLock = false
}
