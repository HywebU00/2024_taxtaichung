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

  // lp右欄 高度偵聽
  $(window).on('load', function() {
      var rightBlockHeight = $('.right_block').height();
      var leftBlockHeight = $('.left_block').height();
      $('.lp').css('height', rightBlockHeight + 'px');
      $('.lp').css('min-height', leftBlockHeight + 'px');
  });

  // 卡片 申辦管道 btn-switch
  $('.btn-switch').click(function(){
    if ($(this).hasClass('act')) {
      $(this).removeClass('act');
      $(this).html('展開/OPEN');
      $(this).attr('name', '展開/OPEN');
      $(this).parents('.ctl').siblings('.content').css('display','none');
    } else {
      $(this).addClass('act');
      $(this).html('收合/CLOSE');
      $(this).attr('name', '收合/CLOSE');
      $(this).parents('.ctl').siblings('.content').css('display','block');
    }
  });

  // 進階限縮  _switchFilter
  $('._switchFilter').click(function(){
    if ($(this).hasClass('act')) {
      $(this).removeClass('act');
      $(this).html('展開/OPEN');
      $(this).attr('name', '展開/OPEN');
      $(this).siblings('.filter').removeClass('_hide');
    } else {
      $(this).addClass('act');
      $(this).html('收合/CLOSE');
      $(this).attr('name', '收合/CLOSE');
      $(this).siblings('.filter').addClass('_hide');
    }
  });

  // 頁籤 確認總值btn
  // _switch
  $('._switch').click(function(){
    $(this).next('.infoTip').css('display','block');
  })

  // 資訊展開
  $('.infoDisclosure ._switch').click(function(){
    var target = $(this).next('section');
    if (target.hasClass('show')) {
      target.removeClass('show');
    } else {
      target.addClass('show');
    }
    // $(this).next('section').addClass('show');
  })

  // 全功能服務櫃檯 儀表板
  $('.branchOffice .btn-info-switch').on('click', function () {
    const $infoBox = $(this).closest('.branchOffice').find('.infoBox');

    if ($infoBox.hasClass('_show')) {
      $infoBox.removeClass('_show');
    } else {
      $infoBox.addClass('_show');
    }
  });

  // sp19
  $('.lang-tabs button').on('click', function () {
    const targetId = $(this).attr('aria-controls');

    // 切換 tab 狀態
    $('.lang-tabs button').attr('aria-selected', 'false');
    $(this).attr('aria-selected', 'true');

    // 切換 panel 顯示
    $('.lang-panel').attr('hidden', 'hidden');
    $('#' + targetId).removeAttr('hidden');
  });
  
  // sp17
  const zoneList = ['Wenxin', 'Shalu', 'Fengyuan', 'Dongshi', 'Dongshan', 'Minquan', 'Dazhi', 'Datun'];
  let activeZone = '';

  // Hover highlight + map color
  zoneList.forEach(function (zone) {
    const $zoneEl = $('.branchMap .zone.' + zone);

    $zoneEl
      .on('click', function (e) {
        e.stopPropagation(); // 阻止冒泡，避免被 document click 清除
        activeZone = zone;

        $(this).find('path').css('fill', '#dda61f');
        $(this).siblings('.zone').find('path').css('fill', '#fff');

        const $card = $('.branchInfo .card._' + zone).clone();
        $('.branchMap .thisOfficInfo').html($card);
      });
  });

  // 點擊空白處（非 .branchMap）時清除選取
  $(document).on('click', function (e) {
    if (!$(e.target).closest('.branchMap').length) {
      $('.branchMap .zone path').css('fill', '');
      $('.branchMap .thisOfficInfo').empty();
      activeZone = '';
    }
  });

  /*-----------------------------------*/
  /////////////modal設定/////////////
  /*-----------------------------------*/
  $(function () {
    $("#modal1").hide(); //先隱藏視窗
    $(".modal").after('<div class="modal_overlay"></div>'); //新增透明底
    // $(".modal").prepend('<button type="button" class="close">關閉</button>'); //新增關閉按鈕
    $(".modal_overlay").hide(); //隱藏透明底
    //按鈕動作
    $("#openModal").click(function (e) {
      $(".modal_overlay").fadeIn(100);
      $(".modal").fadeIn(100);
      $("body").addClass("noscroll");
      e.preventDefault();
    });
    //關閉function
    function closeModal() {
      $("#modal1").hide();
      $(".modal_overlay").hide();
      $("body").removeClass("noscroll");
    }
    //點選關閉按鈕及透明底都可關閉
    $(".modal_overlay").click(closeModal);
    $(".modal .close_Modal").click(closeModal);
  });

  $(function () {
    $("#modal2").hide(); //先隱藏視窗
    $(".modal_scroll").after('<div class="modal_overlay"></div>'); //新增透明底
    // $(".modal").prepend('<button type="button" class="close">關閉</button>'); //新增關閉按鈕
    $(".modal_overlay").hide(); //隱藏透明底
    //按鈕動作
    $("#openModal_scroll").click(function (e) {
      $(".modal_overlay").fadeIn(100);
      $(".modal_scroll").fadeIn(100);
      $("body").addClass("noscroll");
      e.preventDefault();
    });
    //關閉function
    function closeModal() {
        $("#modal2").hide();
        $(".modal_overlay").hide();
        $("body").removeClass("noscroll");
    }
    //點選關閉按鈕及透明底都可關閉
    // $(".modal_overlay").click(closeModal);
    // $(".modal .close_Modal").click(closeModal);
    $(this).find('.close_Modal').click(closeModal);
  });

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
      390: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 2,
      },
      994: {
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
      300: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 2,
      },
      994: {
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
