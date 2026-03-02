// 轮播图功能优化版
window.onload = function () {
  // 获取轮播图元素
  var carousel = document.getElementById('carousel');
  var carouselItems = carousel.getElementsByClassName('carousel-item');
  var carouselIndicators = carousel.getElementsByClassName('carousel-indicators')[0];
  var currentIndex = 0;
  var interval;
  var isPaused = false;
  var nextBtn, prevBtn; // 将按钮变量提到外层

  // 统一轮播图图片尺寸
  function normalizeImageSizes() {
    var images = carousel.querySelectorAll('.carousel-image img');
    images.forEach(function (img) {
      // 设置统一的图片样式
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.objectFit = 'cover';
      img.style.borderRadius = '12px';
    });
  }

  // 创建轮播图指示器
  function createIndicators() {
    carouselIndicators.innerHTML = ''; // 清空现有指示器
    for (var i = 0; i < carouselItems.length; i++) {
      var indicator = document.createElement('div');
      indicator.className = 'carousel-indicator';
      if (i === 0) {
        indicator.className += ' active';
      }
      indicator.onclick = function () {
        var index = Array.prototype.indexOf.call(carouselIndicators.children, this);
        goToSlide(index);
      };
      carouselIndicators.appendChild(indicator);
    }
  }

  // 切换到指定轮播图
  function goToSlide(index) {
    // 移除所有轮播图的active类
    for (var i = 0; i < carouselItems.length; i++) {
      carouselItems[i].className = 'carousel-item';
    }
    // 移除所有指示器的active类
    var indicators = carouselIndicators.getElementsByClassName('carousel-indicator');
    for (var i = 0; i < indicators.length; i++) {
      indicators[i].className = 'carousel-indicator';
    }
    // 添加当前轮播图的active类
    carouselItems[index].className = 'carousel-item active';
    // 添加当前指示器的active类
    indicators[index].className = 'carousel-indicator active';
    // 更新当前索引
    currentIndex = index;
  }

  // 下一张轮播图
  function nextSlide() {
    if (!isPaused) {
      currentIndex = (currentIndex + 1) % carouselItems.length;
      goToSlide(currentIndex);
    }
  }

  // 上一张轮播图
  function prevSlide() {
    if (!isPaused) {
      currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
      goToSlide(currentIndex);
    }
  }

  // 自动轮播
  function startAutoSlide() {
    interval = setInterval(nextSlide, 5000);
  }

  // 暂停轮播
  function pauseAutoSlide() {
    isPaused = true;
    clearInterval(interval);
  }

  // 恢复轮播
  function resumeAutoSlide() {
    isPaused = false;
    startAutoSlide();
  }

  // 添加键盘控制
  function addKeyboardControl() {
    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') {
        prevSlide();
        pauseAutoSlide();
        setTimeout(resumeAutoSlide, 5000);
      } else if (e.key === 'ArrowRight') {
        nextSlide();
        pauseAutoSlide();
        setTimeout(resumeAutoSlide, 5000);
      }
    });
  }

  // 添加触摸滑动支持
  function addTouchSupport() {
    var startX = 0;
    var endX = 0;

    carousel.addEventListener('touchstart', function (e) {
      startX = e.touches[0].clientX;
    });

    carousel.addEventListener('touchmove', function (e) {
      endX = e.touches[0].clientX;
    });

    carousel.addEventListener('touchend', function () {
      var diffX = startX - endX;
      if (Math.abs(diffX) > 50) { // 最小滑动距离
        if (diffX > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
        pauseAutoSlide();
        setTimeout(resumeAutoSlide, 5000);
      }
    });
  }

  // 创建按钮
  function createButtons() {
    // 移除已存在的按钮
    var existingBtns = carousel.querySelectorAll('.carousel-btn');
    existingBtns.forEach(function (btn) {
      btn.remove();
    });

    // 创建前进按钮
    nextBtn = document.createElement('button');
    nextBtn.className = 'carousel-btn carousel-next';
    nextBtn.innerHTML = '›';
    nextBtn.onclick = function (e) {
      e.stopPropagation();
      nextSlide();
      pauseAutoSlide();
      setTimeout(resumeAutoSlide, 5000);
    };

    // 创建后退按钮
    prevBtn = document.createElement('button');
    prevBtn.className = 'carousel-btn carousel-prev';
    prevBtn.innerHTML = '‹';
    prevBtn.onclick = function (e) {
      e.stopPropagation();
      prevSlide();
      pauseAutoSlide();
      setTimeout(resumeAutoSlide, 5000);
    };

    // 添加到轮播图
    carousel.appendChild(nextBtn);
    carousel.appendChild(prevBtn);
  }

  // 初始化轮播图
  function initCarousel() {
    normalizeImageSizes();
    createIndicators();
    createButtons(); // 创建按钮
    startAutoSlide();
    addKeyboardControl();
    addTouchSupport();

    // 鼠标悬停时暂停轮播
    carousel.addEventListener('mouseenter', function () {
      pauseAutoSlide();
    });

    // 鼠标离开时继续轮播
    carousel.addEventListener('mouseleave', function () {
      resumeAutoSlide();
    });

    // 搜索逻辑
    var searchInput = document.querySelector('.search input');
    if (searchInput) {
      searchInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
          var keyword = this.value.trim();
          if (keyword === '') {
            alert('请输入搜索内容');
          } else {
            alert('正在为您寻找 [' + keyword + ']...');
          }
        }
      });
    }
  }

  // 执行初始化
  initCarousel();
};