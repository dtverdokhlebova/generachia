document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(MotionPathPlugin)

  checkInputFill()
  bannerSlider()
  headerBurger()
  clientsMarquee()
  clientsMoreAnim()
  creativesAnim()
  effectivelyAnim()
  answerOnlineAnim()
  page404Anim()
  costWorks()
  anchor()
  ourWork()
  popupScripts()
  prices()
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
  $('.cost-works__btn .ui-button').on('click', function () {
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
    gap: 5,
    delayBeforeStart: -marqueeTime,
    direction: 'left',
    duplicated: true
  })
  $('.clients__marquee--right').marquee({
    duration: marqueeTime,
    gap: 5,
    delayBeforeStart: -marqueeTime,
    direction: 'right',
    duplicated: true
  })
}

function clientsMoreAnim() {
  const pathItem = '.clients__more-decor .line'
  gsap.to('.clients__more-decor .logo1', {
    duration: 12,
    repeat: -1,
    ease: 'none',
    motionPath: {
      path: pathItem,
      align: pathItem,
      autoRotate: true,
      alignOrigin: [0.5, 0.5]
    }
  })
  gsap.to('.clients__more-decor .logo2', {
    duration: 10,
    repeat: -1,
    ease: 'none',
    motionPath: {
      path: pathItem,
      align: pathItem,
      autoRotate: true,
      alignOrigin: [0.5, 0.5],
      start: 1,
      end: 0
    }
  })
}

function creativesAnim() {
  gsap.to('.creatives__decor .logo1', {
    duration: 15,
    repeat: -1,
    ease: 'none',
    motionPath: {
      path: '.creatives__decor .line1',
      align: '.creatives__decor .line1',
      autoRotate: true,
      alignOrigin: [0.5, 0.5],
      start: 1,
      end: 0
    }
  })
}

function effectivelyAnim() {
  gsap.to('.effectively__decor .logo1', {
    duration: 15,
    repeat: -1,
    ease: 'none',
    motionPath: {
      path: '.effectively__decor .line1',
      align: '.effectively__decor .line1',
      autoRotate: true,
      alignOrigin: [0.5, 0.5]
    }
  })
}

function bannerAnim() {
  gsap.to('.banner__decor-text', {
    motionPath: {
      path: '.banner__decor-svg .line1',
      align: '.banner__decor-svg .line1',
      autoRotate: true,
      // autoRotate: 5,
      alignOrigin: [0.5, 0.2],
      start: 0.43,
      end: 0.43
    },
    //   repeat: -1
    duration: 15,
    ease: 'none'
  })

  const marqueeTime2 = 14000
  $('.banner__decor-tr').marquee({
    duration: marqueeTime2,
    gap: 4,
    delayBeforeStart: -marqueeTime2,
    direction: 'left',
    duplicated: true
  })

  gsap.to('.banner__decor-svg .logo1', {
    duration: 15,
    repeat: -1,
    ease: 'none',
    motionPath: {
      path: '.banner__decor-svg .line1',
      align: '.banner__decor-svg .line1',
      autoRotate: true,
      alignOrigin: [0.5, 0.5]
    }
  })
}

function bannerSlider() {
  const bannerSwiper = new Swiper('.banner__slider', {
    speed: 400,
    spaceBetween: 0,
    slidesPerView: 1,
    autoplay: true,
    allowTouchMove: false,
    effect: 'creative',
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -400]
      },
      next: {
        translate: ['100%', 0, 0]
      }
    }
  })
}

function answerOnlineAnim() {
  const pathItem = '.answer-online__decor .line1'
  gsap.to('.answer-online__decor .logo1', {
    duration: 12,
    repeat: -1,
    ease: 'none',
    motionPath: {
      path: pathItem,
      align: pathItem,
      autoRotate: true,
      alignOrigin: [0.5, 0.5],
      start: 1,
      end: 0
    }
  })
  gsap.to('.answer-online__decor .logo2', {
    duration: 10,
    repeat: -1,
    ease: 'none',
    motionPath: {
      path: pathItem,
      align: pathItem,
      autoRotate: true,
      alignOrigin: [0.5, 0.5]
    }
  })
}

function page404Anim() {
  gsap.to('.page404__decor .logo1', {
    duration: 15,
    repeat: -1,
    ease: 'none',
    motionPath: {
      path: '.page404__decor .line1',
      align: '.page404__decor .line1',
      autoRotate: true,
      alignOrigin: [0.5, 0.5]
    }
  })
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

function prices() {
  $('.prices-item').on('click', function () {
    $(this).siblings('.prices-item').removeClass('prices-item--active')
    $(this).addClass('prices-item--active')
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
