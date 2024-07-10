var isLazyLoad = 'Y';
var isRefresh = 'Y';
var countLimit = isRefresh === 'Y' ? 4 : 1;
var lazyLoad_fetchMarginPercent = 200;
var lazyLoad_renderMarginPercent = 100;
var intervelTime = 30; // refresh 주기 (초)
var isCheckViewablity = true; // 뷰어빌리티 체크 안할경우 false 로 변경
var view = 0;
var gamTime = 0;
var count = 0;
var isIntersectionObserverSet = false;
var timer = 0;
var noAdCnt = 0;
var isFirstReq = true;
var adoptagdfp = "ZXZhbChmdW5jdGlvbihwLGEsYyxrLGUsZCl7ZT1mdW5jdGlvbihjKXtyZXR1cm4oYzxhPycnOmUocGFyc2VJbnQoYy9hKSkpKygoYz1jJWEpPjM1P1N0cmluZy5mcm9tQ2hhckNvZGUoYysyOSk6Yy50b1N0cmluZygzNikpfTtpZighJycucmVwbGFjZSgvXi8sU3RyaW5nKSl7d2hpbGUoYy0tKXtkW2UoYyldPWtbY118fGUoYyl9az1bZnVuY3Rpb24oZSl7cmV0dXJuIGRbZV19XTtlPWZ1bmN0aW9uKCl7cmV0dXJuJ1xcdysnfTtjPTF9O3doaWxlKGMtLSl7aWYoa1tjXSl7cD1wLnJlcGxhY2UobmV3IFJlZ0V4cCgnXFxiJytlKGMpKydcXGInLCdnJyksa1tjXSl9fXJldHVybiBwfSgnNCA1PTV8fHt9OzUubD01Lmx8fFtdOzQgbT1tfHxDKGMsZCxnLGIpezQgZj0hMCxoPSIvL0IuRi5vL3EvIitiLGU9IkgiK2kuQSh5KmkuRCgpKSsxOy0xIT1iLkcoIi8vIikmJihmPSExKTs0IGE9My5FKCJ4Iik7YS4yKCJ3IixlKTthLjIoInAiLCJuIik7YS4yKCJyIiwwKTthLjIoInMiLDApO2EuMigidiIsMCk7YS4yKCJ1IiwwKTthLjIoInQiLDApO2EuMigieiIsZCk7YS4yKCJaIixnKTthLjIoIlgiLCJJIik7ZD0iPDkgaz1cJyIraCsiXCc+Vi85PiI7aihjPTMuNihjKSl7VShjLjIoIlkiLCJXIik7Yy5TKCk7KWMuTShjLlQpO2MuTChhKX1LIDggNztqKCJKIj09Yik4IDc7Zj8oYT0zLjYoZSksYj1hLk58fGEuTy4zLDchPWImJihiLlIoKSxiLlEoZCksYi5QKCkpKTooYT0zLjYoZSksYS5rPWIpfTsnLDYyLDYyLCd8fHNldEF0dHJpYnV0ZXxkb2N1bWVudHx2YXJ8Z29vZ2xldGFnfGdldEVsZW1lbnRCeUlkfG51bGx8cmV0dXJufHNjcmlwdHx8fHx8fHx8fE1hdGh8aWZ8c3JjfGNtZHxhZG9wQURzaG93fG5vbmV8Y2N8Ym9yZGVyfFJFfGZyYW1lQm9yZGVyfG1hcmdpbldpZHRofHBhZGRpbmdIZWlnaHR8cGFkZGluZ1dpZHRofG1hcmdpbkhlaWdodHxpZHxJRlJBTUV8MUU0fHdpZHRofGZsb29yfGNvbXBhc3N8ZnVuY3Rpb258cmFuZG9tfGNyZWF0ZUVsZW1lbnR8YWRvcHxpbmRleE9mfGFkb3BCfG5vfEFET1BfUEJVfGVsc2V8YXBwZW5kQ2hpbGR8cmVtb3ZlQ2hpbGR8Y29udGVudERvY3VtZW50fGNvbnRlbnRXaW5kb3d8Y2xvc2V8d3JpdGV8b3BlbnxoYXNDaGlsZE5vZGVzfGZpcnN0Q2hpbGR8Zm9yfDx8YWRzYnlhZG9wX3xzY3JvbGxpbmd8Y2xhc3N8aGVpZ2h0Jy5zcGxpdCgnfCcpLDAse30pKTs="
eval(atob(adoptagdfp));

// Add Func KV
function containsKeyword(keywords) {
  try {
    const foundKeywords = [];
    const contains = keywords.some(keyword => {
      const found = top.document.body.innerText.includes(keyword);
      if (found) foundKeywords.push(keyword);
      return found;
    });
    if (contains) {
      console.log('Keyword found Google ads will function normally. Keywords found:', foundKeywords);
    } else {
      console.log('No keywords found. Will proceed to passback.');
    }
    return contains;
  } catch (e) {
    console.error('ERROR: Unable to access top.document', e);
    return false;
  }
}

const keywords = [
  'โรงภาพยนต์',
  'ภาพยนตร์ไทย',
  'Major Cineplex',
  'ภาพยนตร์',
  'นักแสดงภาพยนตร์',
  'ภาพยนตร์ครอบครัว',
  'ภาพยนตร์แอนิเมชัน',
  'ภาพยนตร์แอ็คชั่น',
  'ภาพยนตร์ต่างประเทศ',
  'ซีรีส์',
  'ซีรีส์เกาหลี'
];

googletag.cmd.push(function () {
  googletag.defineSlot('/223513049,5363867/adopthailand/pantip_r_content_b1_336x280_gam360', [[336, 280]], 'div-apt-ad-F3KiVhBvrE').addService(googletag.pubads());
  if (isLazyLoad && isLazyLoad === 'Y') {
    googletag.pubads().enableLazyLoad({
      fetchMarginPercent: lazyLoad_fetchMarginPercent,
      renderMarginPercent: lazyLoad_renderMarginPercent,
      mobileScaling: 1.0
    });
  }
  // Set Google ADS Manager
  if (containsKeyword(keywords)) {
    googletag.pubads().setTargeting
      (
        'Keyword_Cinema',
        keywords);
  }
  // Set Google ADS Manager
  googletag.pubads().addEventListener('slotRequested', function (event) {
    console.log('g REQ');
    try {
      if (!isIntersectionObserverSet) {
        isIntersectionObserverSet = true;
        timer = setInterval(gamTimeTracker, 1000);
      }
    } catch (e) {
      console.log('ERROR : Can not use IntersectionObserver ', e);
    }
  });
  googletag.pubads().addEventListener('slotOnload', function (event) {
    console.log('g IMP');
  });
  googletag.pubads().enableSingleRequest();
  googletag.pubads().set("page_url", "pantip.com");
  googletag.pubads().addEventListener('slotRenderEnded', function (event) {
    count++;
    if (event.isEmpty) noAdCnt++;
    if (event.isEmpty && isFirstReq == true) {
      isFirstReq = false;
      console.log('360 pb');
      adopADshow('div-apt-ad-F3KiVhBvrE', 336, 280, '//compass.adop.cc/RD/2d6b751e-a81e-44ff-8ba4-60821dc2c7b8?type=iframe&loc=&size_width=336&size_height=280');
    } else {
      isFirstReq = false;
    }
  });
  googletag.pubads().addEventListener('slotVisibilityChanged', function (adopSlot) {
    view = adopSlot.inViewPercentage;
  });
  googletag.pubads().setTargeting("Keyword_Cinema", keywords);
  googletag.enableServices();
});

var gamTimeTracker = function () {
  gamTime++;
  if (count >= countLimit || noAdCnt >= 2) {
    clearInterval(timer);
    return;
  }
  if (gamTime >= intervelTime) {
    if (isCheckViewablity) {
      if (view > 20) {
        gamRefresh();
      }
    } else {
      gamRefresh();
    }
  }
}

function gamRefresh() {
  gamTime = 0;
  if (count >= countLimit) {
    clearInterval(timer);
    return;
  }
  googletag.pubads().refresh();
}
