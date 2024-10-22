(function () {
  'use strict';
  const mp = document.querySelector('.welcome');
  if (!mp) {
    return;
  }
  const imgsA = document.querySelectorAll('#scrollImgs .item');
  const img = document.querySelector('#scrollImgs');
  const count = 360 / imgsA.length;
  let documentHeight = document.body.clientHeight - window.innerHeight;
  let requestCheck = null;

  img.style.transform = `rotate3d(1, 0, 0, 0deg)`;
  imgsA.forEach((value, i) => {
    value.style.transform = `translateY(-50%) rotate3d(1, 0, 0, ${count * i}deg)`;

    value.addEventListener('click', async function (e) {
      // e.preventDefault();
      cancelAnimation();

      let nowScrollY = documentHeight / imgsA.length;

      window.scrollTo({
        top: nowScrollY * i + 2,
        behavior: 'smooth',
      });

      if (!requestCheck) {
        // requestAnimationFrame(checkDeg);
      }
    });

    value.addEventListener('keyup', function () {
      cancelAnimation();

      let nowScrollY = documentHeight / imgsA.length;

      window.scrollTo({
        top: nowScrollY * i + 1,
        behavior: 'smooth',
      });
    });
  });

  function cancelAnimation() {
    if (requestCheck) {
      cancelAnimationFrame(requestCheck);
      requestCheck = null;
    }
  }

  let lastScrollTop = 0;

  let check = 0;

  window.addEventListener('scroll', function () {
    let aa = (360 * window.scrollY) / documentHeight;
    console.log(window.scrollY, documentHeight);

    // if (window.scrollY < 1) {
    //   window.scrollTo({
    //     top: documentHeight - 1,
    //     behavior: 'instant',
    //   });
    // } else if (window.scrollY == documentHeight) {
    //   window.scrollTo({
    //     top: 1,
    //     behavior: 'instant',
    //   });
    // }
    if (window.scrollY == documentHeight) {
      window.scrollTo({
        top: 1,
        behavior: 'instant',
      });
    }

    img.style = `-webkit-transform: transform:rotate3d(1,0,0, -${aa}deg); transform: rotate3d(1,0,0, -${aa}deg)`;
  });

  let now = 0;

  requestAnimationFrame(checkDeg);
  function checkDeg() {
    const element = document.querySelector('#scrollImgs');

    now = window.scrollY + 1;
    window.scrollTo({
      top: now,
      behavior: 'instant',
    });
    requestCheck = requestAnimationFrame(checkDeg);
  }

  /////////////
  // TODO:
  // regenerate sprites when they dissapear
  // randomize x/y to positions

  let popCounter = 0;

  let $windowWidth = $(window).width();
  let $windowHeight = $(window).height();

  PIXI.utils.skipHello(); // remove pixi message in console log

  let app = new PIXI.Application($windowWidth, $windowHeight, { transparent: true, resolution: 1 });
  $('#canvas-container').append(app.view);

  let particleCount = 100;
  let particleColors = ['26a3ff', '13ce66', 'ff49db', 'af8dd1', '9162bf', 'ff7849', 'ffc82c'];
  let particleSettings;

  for (let i = 0; i < particleCount; i++) {
    particleSettings = {
      particleSize: 10,
      x: Math.floor(Math.random() * app.renderer.width),
      y: Math.floor(Math.random() * app.renderer.height),
      scale: Math.floor(Math.random() * 3) / 3,
      alpha: Math.random(),
      particleSpeed: Math.floor(Math.min(200, Math.random() * 1000)),
      color: particleColors[Math.floor(Math.random() * particleColors.length)],
    };
    createParticle(particleSettings);
  }

  function createParticle() {
    // GRAPHIC
    let graphic = new PIXI.Graphics(); // create graphic
    graphic.beginFill('0x' + particleSettings.color);
    graphic.drawCircle(0, 0, particleSettings.particleSize); // (x, y, radius) // gets scaled as a sprite later
    graphic.endFill();

    // TEXTURE
    let texture = graphic.generateCanvasTexture(); // create texture using graphic (scaleMode, resolution)
    texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST; // scale mode for pixelation

    // SPRITE
    let particleSprite = new PIXI.Sprite(texture); // create particle using texture
    particleSprite.interactive = true; // enable mouse and touch events
    particleSprite.buttonMode = false; // show hand cursor on mouseover
    particleSprite.anchor.set(0.5); // center anchor point
    particleSprite.blendMode = PIXI.BLEND_MODES.SCREEN;

    // console.log('createParticle')
    // console.log('_particleSpeed', _particleSpeed);

    // SET POSITIONING
    TweenMax.set(particleSprite, { pixi: { x: particleSettings.x, y: particleSettings.y, scale: particleSettings.scale, alpha: particleSettings.alpha } }, 0);
    TweenMax.to(
      particleSprite,
      particleSettings.particleSpeed,
      {
        pixi: { x: Math.floor(Math.random() * app.renderer.width), y: Math.floor(Math.random() * app.renderer.height) },
        ease: Power4.linear,
        onComplete: function () {
          console.log('onComplete');
          // popParticle();
        },
      },
      1
    );

    //
    function popParticle() {
      TweenMax.to(particleSprite, 0.3, { pixi: { scale: 3, alpha: 0 } }, 0);
    }

    // MOUSE EVENTS
    particleSprite.mouseover = function () {
      // TweenMax.to(particleSprite, 0.3, {pixi:{x:0, y:0}}, 0);
      popParticle();
      popCounter++;
      console.log('popCounter:', popCounter);
    };

    // ADD SPRITE TO STAGE
    app.stage.addChild(particleSprite);
  }

  if (document.querySelectorAll('[data-fancybox]').length > 0) {
    Fancybox.bind('[data-fancybox]', {});
  }
})();

(function () {
  const mp2 = document.querySelector('.mp2');
  if (!mp2) {
    return;
  }
  gsap.registerPlugin(ScrollTrigger);

  const targetUse = gsap.utils.toArray('.mainTarget');
  const scenes = gsap.utils.toArray('.section');
  const scenesBg = gsap.utils.toArray('.section .bg');

  // 判斷區塊用
  targetUse.forEach(function (section, i) {
    gsap.to(section, {
      opacity: 1,
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '100%',
        scrub: true,
        toggleClass: { targets: `.section.block${i + 1}`, className: 'active' },
      },
    });
    section.removeAttribute('style');
  });

  // 區塊
  scenes.forEach(function (section, i) {
    gsap.to(section, {
      opacity: 1,
      scrollTrigger: {
        trigger: `.mainTarget.block${i + 1}`,
        start: 'top top',
        end: '+=100',
        scrub: true,
      },
    });
    section.removeAttribute('style');
  });
  // 圓底
  scenesBg.forEach(function (section, i) {
    let sectionTl = gsap.timeline();
    sectionTl.to(section, {
      scale: 1,
      scrollTrigger: {
        trigger: `.mainTarget.block${i + 1}`,
        start: 'top top',
        end: '+=200',
        scrub: true,
        // markers: true,
      },
    });
    sectionTl.fromTo(
      section,
      {
        scale: 1,
      },
      {
        scale: 0,
        scrollTrigger: {
          trigger: `.mainTarget.block${i + 1}`,
          start: '95% top',
          end: '100%',
          scrub: true,
        },
      }
    );
    section.removeAttribute('style');
  });

  // 白圓底
  const block1PicBg = document.querySelector('.block1 .imgBg');
  let block1PicBgTl = gsap.timeline();
  block1PicBgTl.fromTo(
    block1PicBg,
    {
      scale: 1,
      opacity: 1,
    },
    {
      scale: 0,
      opacity: 0,
      scrollTrigger: {
        trigger: `.mainTarget.block1`,
        start: '50% top',
        end: '100%',
        scrub: true,
      },
    }
  );
  block1PicBg.removeAttribute('style');
  // 主圖
  const block1Pic = document.querySelector('.block1 .picBox .pic');
  let block1PicTl = gsap.timeline();
  block1PicTl.fromTo(
    block1Pic,
    {
      x: 0,
      opacity: 1,
    },
    {
      x: 200,
      opacity: 0,
      scrollTrigger: {
        trigger: `.mainTarget.block1`,
        start: '50% top',
        end: '100%',
        scrub: true,
      },
    }
  );
  block1Pic.removeAttribute('style');

  // 資訊區塊
  const block1Info = document.querySelector('.block1 .infoBox');
  let block1InfoTl = gsap.timeline();
  block1InfoTl.fromTo(
    block1Info,
    {
      x: 0,
      opacity: 1,
    },
    {
      x: -200,
      opacity: 0,
      scrollTrigger: {
        trigger: `.mainTarget.block1`,
        start: '50% top',
        end: '100%',
        scrub: true,
      },
    }
  );
  block1Info.removeAttribute('style');

  // 圓圈1
  const block1C = document.querySelector('.block1 .circle');
  let block1CTl = gsap.timeline();
  block1CTl.to(block1C, {
    rotation: 10,
    scrollTrigger: {
      trigger: `.mainTarget.block1`,
      start: '0% top',
      end: '150%',
      scrub: true,
    },
  });
  block1CTl.to(block1C, {
    opacity: 0,
    scrollTrigger: {
      trigger: `.mainTarget.block1`,
      start: '50% top',
      end: '100%',
      scrub: true,
    },
  });
  block1C.removeAttribute('style');

  // 圓圈2
  const block1C2 = document.querySelector('.block1 .circle2');
  let block1C2Tl = gsap.timeline();
  block1C2Tl.to(block1C2, {
    rotation: -10,
    scrollTrigger: {
      trigger: `.mainTarget.block1`,
      start: '0% top',
      end: '150%',
      scrub: true,
    },
  });
  block1C2Tl.to(block1C2, {
    opacity: 0,
    scrollTrigger: {
      trigger: `.mainTarget.block1`,
      start: '50% top',
      end: '100%',
      scrub: true,
    },
  });
  block1C2.removeAttribute('style');
  // 白圓底
  const block2PicBg = document.querySelector('.block2 .picBox .imgBg');
  let block2PicBgTl = gsap.timeline();
  block2PicBgTl.fromTo(
    block2PicBg,
    {
      scale: 0,
    },
    {
      scale: 1,
      scrollTrigger: {
        trigger: `.mainTarget.block2`,
        start: '15% top',
        end: '50%',
        scrub: true,
      },
    }
  );
  block2PicBgTl.fromTo(
    block2PicBg,
    {
      scale: 1,
    },
    {
      scale: 0,
      scrollTrigger: {
        trigger: `.mainTarget.block2`,
        start: '95% top',
        end: '100%',
        scrub: true,
      },
    }
  );
  block2PicBg.removeAttribute('style');
  // 主圖
  const block2Pic = document.querySelector('.block2 .picBox .pic');
  let block2PicTl = gsap.timeline();
  block2PicTl.fromTo(
    block2Pic,
    {
      x: 0,
      opacity: 0,
    },
    {
      x: -200,
      opacity: 1,
      scrollTrigger: {
        trigger: `.mainTarget.block2`,
        start: '100px top',
        end: '30%',
        scrub: true,
      },
    }
  );
  block2PicTl.fromTo(
    block2Pic,
    {
      x: -200,
      opacity: 1,
    },
    {
      x: 0,
      opacity: 0,
      scrollTrigger: {
        trigger: `.mainTarget.block2`,
        start: '95% top',
        end: '100%',
        scrub: true,
      },
    }
  );
  block2Pic.removeAttribute('style');
  // 資訊區塊
  const block2Info = document.querySelector('.block2 .infoBox');
  let block2InfoTl = gsap.timeline();
  block2InfoTl.fromTo(
    block2Info,
    {
      x: 0,
      opacity: 0,
    },
    {
      x: 200,
      opacity: 1,
      scrollTrigger: {
        trigger: `.mainTarget.block2`,
        start: '30% top',
        end: '50%',
        scrub: true,
      },
    }
  );
  block2InfoTl.fromTo(
    block2Info,
    {
      x: 200,
      opacity: 1,
    },
    {
      x: 0,
      opacity: 0,
      scrollTrigger: {
        trigger: `.mainTarget.block2`,
        start: '95% top',
        end: '100%',
        scrub: true,
      },
    }
  );
  block2Info.removeAttribute('style');

  // 圓圈1
  const block2C = document.querySelector('.block2 .circle');
  let block2CTl = gsap.timeline();
  block2CTl.to(block2C, {
    rotation: 45,
    scrollTrigger: {
      trigger: `.mainTarget.block2`,
      start: '0% top',
      end: '150%',
      scrub: true,
    },
  });
  block2CTl.to(block2C, {
    opacity: 0,
    scrollTrigger: {
      trigger: `.mainTarget.block2`,
      start: '95% top',
      end: '100%',
      scrub: true,
    },
  });
  block2C.removeAttribute('style');
  // 圓圈2
  const block2C2 = document.querySelector('.block2 .circle2');
  let block2C2Tl = gsap.timeline();
  block2C2Tl.to(block2C2, {
    rotation: 30,
    scrollTrigger: {
      trigger: `.mainTarget.block2`,
      start: '0% top',
      end: '150%',
      scrub: true,
    },
  });
  block2C2Tl.to(block2C2, {
    opacity: 0,
    scrollTrigger: {
      trigger: `.mainTarget.block2`,
      start: '95% top',
      end: '100%',
      scrub: true,
    },
  });
  block2C2.removeAttribute('style');

  // 區塊2
  // 區塊2 圓圈1
  const block3C = document.querySelector('.block3 .circle');
  gsap.to(block3C, {
    rotation: 45,
    opacity: 1,
    scrollTrigger: {
      trigger: `.mainTarget.block3`,
      start: '0% top',
      end: '150%',
      scrub: true,
    },
  });
  block3C.removeAttribute('style');

  // 區塊2 圓圈2
  const block3C2 = document.querySelector('.block3 .circle2');
  gsap.to(block3C2, {
    rotation: -20,
    opacity: 1,
    scrollTrigger: {
      trigger: `.mainTarget.block3`,
      start: '0% top',
      end: '150%',
      scrub: true,
    },
  });
  block3C2.removeAttribute('style');

  // 區塊2 圓圈3
  const block3C3 = document.querySelector('.block3 .dot3');
  gsap.to(block3C3, {
    scale: 1,
    opacity: 1,
    scrollTrigger: {
      trigger: `.mainTarget.block3`,
      start: '0% 100%',
      end: '50% 50%',
      scrub: true,
    },
  });
  block3C3.removeAttribute('style');

  // 區塊2 主圖
  const block3Pic = document.querySelector('.block3 .picBox .pic');
  gsap.to(block3Pic, {
    x: -100,
    opacity: 1,
    scrollTrigger: {
      trigger: `.mainTarget.block3`,
      start: '100px top',
      end: '30%',
      scrub: true,
    },
  });
  block3Pic.removeAttribute('style');
  // 資訊區塊
  const block3Info = document.querySelector('.block3 .infoBox');
  gsap.to(block3Info, {
    x: 100,
    opacity: 1,
    scrollTrigger: {
      trigger: `.mainTarget.block3`,
      start: '30% top',
      end: '50%',
      scrub: true,
    },
  });
  block3Info.removeAttribute('style');
})();

(function () {
  //無障礙用
  const block = document.querySelectorAll('.section');
  const body = document.querySelector('body');
  const windowScroll = body.offsetHeight - window.innerHeight;

  block.forEach((block, bi) => {
    const allTarget = block.querySelectorAll('a,button,input');
    const top = windowScroll / 4;
    allTarget.forEach((target, ti) => {
      target.addEventListener('keyup', function (e) {
        if (e.which === 9 && !e.shiftKey) {
          if (bi !== 0 && ti === 0) {
            window.scrollTo({
              top: top * (bi + 1) - window.innerHeight / 2,
              behavior: 'smooth',
            });
          }
        } else if (e.which === 9 && e.shiftKey) {
          if (ti === allTarget.length - 1 && bi !== 0) {
            window.scrollTo({
              top: top * (bi + 1) - window.innerHeight / 2,
              behavior: 'smooth',
            });
          } else {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          }
        }
      });
    });
  });
})();

(function () {
  const mobileBtn = document.querySelector('.mobileBtn');
  const menuBox = document.querySelector('.menuBox');
  mobileBtn.addEventListener('click', function () {
    mobileBtn.classList.toggle('active');
    menuBox.classList.toggle('active');
  });
})();
