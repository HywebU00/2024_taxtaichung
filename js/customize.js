// 自行加入的JS請寫在這裡
$(function () {

  // 熱門活動 頁籤切換，次項內容 寬度調整
  // $('.activeZone .tabBtn').click(function() {
  //   $('.activeSlider').slick('refresh');
  // })

  // 重要訊息 _toptip
  $('._toptip .btn._close').click(function(){
    $(this).parents('._toptip').fadeOut();
  })

  $('._toptip .btn._slideup').click(function(){
    if ($(this).hasClass('_hide')) {
      $(this).removeClass('_hide');
      $('.btn._slideup').html('收合/CLOSE');
      $('.btn._slideup').attr('name', '收合選單/CLOSE');
    } else {
      $(this).addClass('_hide');
      $('.btn._slideup').html('展開/OPEN');
      $('.btn._slideup').attr('name', '展開內容/OPEN');
    }
    $(this).siblings('._text').fadeToggle();
  })

  // 首頁輪播
  $('.mpSlider').slick({
    mobileFirst: true,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: false,
    fade: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    pauseOnHover: false,
    pauseOnFocus: false,
    customPaging: function (slider, i) {
      var title = $(slider.$slides[i]).find('img').attr('alt').trim();
      return $('<button type="button" aria-label="' + title + '"/>').text(title);
    },
  });

  // 廣告輪播
  $('.adSlider').slick({
    mobileFirst: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    arrow: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  });

  // 熱門專區 12格下面藍藍的
  $('.hotSlider').slick({
    mobileFirst: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    arrow: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  });

  // activeSlider
  // 熱門活動 頁籤塞slider
  // $('.activeSlider').slick({
  //   mobileFirst: true,
  //   dots: false,
  //   infinite: true,
  //   speed: 300,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   autoplay: false,
  //   arrow: true,
  //   lazyLoaded: true,
  //   lazyLoad: 'ondemand',
  //   ease: 'ease',
  //   responsive: [
  //     {
  //       breakpoint: 1200,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         arrows: true,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         arrows: true,
  //       },
  //     },
  //     {
  //       breakpoint: 575,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         arrows: true,
  //       },
  //     },
  //   ],
  // });

  // 影片輪播
  $('.ytSlider').slick({
    mobileFirst: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    arrow: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  });

  // search 輪播 - 
  $('.searchSlider').slick({
    mobileFirst: true,
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: false,
    nextArrow: false,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease'
  });

  // 燈箱slick+lightBox組合
  $('.cp_slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    pauseOnFocus: true,
    focusOnSelect: true,
    accessibility: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 545,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  //
  $('.cppic_slider').slick({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    // pauseOnHover: true,
    // pauseOnFocus: true,
    // focusOnSelect: true,
    // accessibility: true,
    // lazyLoad: 'ondemand',
    // ease: 'ease',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 545,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
  // cp_photo
  $('.Slider-for').on('init reInit afterChange', function (event, slick, currentSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.controls').html(i + '/' + slick.slideCount);
  });
  $('.Slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    swipe: false,
    swipeToSlide: false,
    lazyLoad: 'ondemand',
    asNavFor: '.Slider-nav',
    infinite: true,
  });
  $('.Slider-nav').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.Slider-for',
    dots: true,
    arrows: true,
    lazyLoad: 'ondemand',
    focusOnSelect: true,
    infinite: true,
  });

  // search
  // 物件1：.btnSearchOpen
  // 物件2：.search
  // search設定
  var main_search_mode = false;
  var _searchSwitch = $('.btnSearchOpen');
  // $('.search').hide();

  function main_searchToggle() {
    if (!main_search_mode) {
      $('.btnSearchOpen').addClass('_triggle');
      $('.search').addClass('_open');
      main_search_mode = true;
      // var isAndroid = /android/i.test(navigator.userAgent.toLowerCase());
      // if (isAndroid) {
      //   _window.off('resize');
      // }
    } else {
      $('.btnSearchOpen').removeClass('_triggle');
      $('.search').removeClass('_open');
      main_search_mode = false;
    }
  }
  _searchSwitch.off().on('click', function (e) {
    main_searchToggle();
  });
  // 如果點在外面
  $(document.body).on('click', function (e) {
    if (main_search_mode) {
      main_searchToggle();
      main_search_mode = false;
    }
  });
  $('.search, .btnSearchOpen').on('click', function (e) {
    e.stopPropagation();
  });

  // 1）滑鼠點擊：class 切換
  // $('.btnSearchOpen').on('click', function() {
  //   if ($(this).hasClass('_triggle')) {
  //     $('.btnSearchOpen').removeClass('_triggle');
  //     $('.search').removeClass('_open');
  //   } else {
  //     $('.btnSearchOpen').addClass('_triggle');
  //     $('.search').addClass('_open');
  //   }
  // });
  // 2）鍵盤遊走，.search 失去焦點關閉
  $('.btnSearchOpen').on('focus', function() {
    $(this).addClass('_triggle');
    $('.search').addClass('_open');
    $('.search').show();
  });
  $('.search').on('focusout', function(event) {
    // 判斷當前焦點是否在 .search 內部
    if (!$(event.relatedTarget).closest('.search').length) {
      $('.btnSearchOpen').removeClass('_triggle');
      $(this).removeClass('_open');
    }
  });
  // // 3）滑鼠點擊空白處：按鈕、.search 關閉
  // $(document).on('click', function(event) {
  //   // 檢查點擊是否發生在 .search 元素內或 .btnSearchOpen 元素上
  //   if (!$(event.target).closest('.search, .btnSearchOpen').length) {
  //     $('.btnSearchOpen').removeClass('_triggle');
  //     $('.search').removeClass('_open');
  //   }
  // });

  // password_toggle
  var passShow = false;
  $('.password_toggle').each(function (index, el) {
    $(this)
      .find('.btn-icon')
      .off()
      .click(function (e) {
        if (!passShow) {
          $(this).children('i').removeClass().addClass('i_show');
          $(this).parents('.password_toggle').find('input[type="password"]').attr('type', 'text');
          passShow = true;
          // console.log(passShow);
        } else {
          $(this).children('i').removeClass().addClass('i_hide');
          $(this).parents('.password_toggle').find('input[type="text"]').attr('type', 'password');
          passShow = false;
          // console.log(passShow);
        }
        e.preventDefault();
      });
  });
  //sticky sidebar
  // if ($('.stickySidebar').length > 0) {
  //   var stickySidebar = new StickySidebar('.stickySidebar', {
  //     containerSelector: '.main',
  //     topSpacing: 93,
  //     bottomSpacing: 0,
  //     minWidth: 768,
  //     resizeSensor: true,
  //   });
  // }
});

// 熱門活動 頁籤＋swiper
(function () {
  const activeSliderS1 = new Swiper('.activeSliderS1 .swiper', {
    slidesPerView: 3,
    spaceBetween: 0,
    loop: false,
    observer: true,
    observeParents: true,
    // 切換點
    pagination: {
      el: '.activeSliderS1 .swiperDots',
      bulletElement: 'button',
      clickable: true,
    },
    // 切換箭頭
    navigation: {
      nextEl: '.activeSliderS1 .nextSlider', //自行設定樣式
      prevEl: '.activeSliderS1 .prevSlider', //自行設定樣式
    },
    breakpoints: {
      500: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 3,
      },
    },
    on: {
      init: cleanButtonAttrUse(),
      observerUpdate: cleanButtonAttrUse(),
      setTranslate: cleanButtonAttrUse(),
      keyPress: cleanButtonAttrUse(),
      slideChange: cleanButtonAttrUse(),
    },
  });

  const activeSliderS2 = new Swiper('.activeSliderS2 .swiper', {
    slidesPerView: 3,
    spaceBetween: 0,
    loop: false,
    observer: true,
    observeParents: true,
    // 切換點
    pagination: {
      el: '.activeSliderS2 .swiperDots',
      bulletElement: 'button',
      clickable: true,
    },
    // 切換箭頭
    navigation: {
      nextEl: '.activeSliderS2 .nextSlider', //自行設定樣式
      prevEl: '.activeSliderS2 .prevSlider', //自行設定樣式
    },
    breakpoints: {
      500: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
    },
    on: {
      init: cleanButtonAttrUse(),
      observerUpdate: cleanButtonAttrUse(),
      setTranslate: cleanButtonAttrUse(),
      keyPress: cleanButtonAttrUse(),
      slideChange: cleanButtonAttrUse(),
    },
  });
  let allTarget = document.querySelectorAll('.tabContentGroup a,.tabContentGroup button');

  allTarget.forEach((item, i) => {
    item.addEventListener('keyup', function () {
      cleanButtonAttrUse();
    });
  });

  function cleanButtonAttrUse() {
    document.querySelectorAll('.nextSlider, .prevSlider').forEach(function (button) {
      button.removeAttribute('tabindex');
      button.removeAttribute('disabled');
      button.classList.remove('swiper-button-disabled');
      button.classList.remove('swiper-button-lock');
    });
  }
  // tab功能
  tabFunction({
    target: '.tabSet',
    openFirst: false, // 預設先展開所有內容，鍵盤的自動開合功能無效
    openSwitch: true, // 是否可開合/切換
    autoClose: true, // 自動關閉其他開啟內容
    modeSwitch: true, // 預設模式自動切換，尺寸以上tab功能，尺寸以下手風琴功能
    width: 767, // 尺寸以上tab功能，尺寸以下手風琴功能
    index: 0, // 預設開啟第幾個
  });
})();
