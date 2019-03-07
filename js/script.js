var oViewImage = document.querySelector('.view_image');
var aImages = Array.prototype.slice.call(document.querySelectorAll('.main_wraper > img'));
var aArrow = document.querySelectorAll('.view_wraper > a');

aImages.forEach(function(item, index) {
  item.addEventListener('click', function() {
    oViewImage.style.backgroundImage = 'url(' + this.src + ')';
    if (oSel = document.querySelector('.thumb-select')) {
      oSel.classList.remove('thumb-select')
    };
    this.classList.add('thumb-select');
    aArrow[0].classList.remove('thumb-hide');
    aArrow[1].classList.remove('thumb-hide');
    if (index == 0) {
      aArrow[0].classList.add('thumb-hide');
    }
    if (index == aImages.length - 1) {
      aArrow[1].classList.add('thumb-hide');
    }
  });
});

aArrow[0].addEventListener('click', function() {
  let i = aImages.length;
  while (i--) {
    if (aImages[i].classList.contains('thumb-select')) break;
  }
  if (i > 0) {
    aImages[i - 1].dispatchEvent(new Event('click'));
    if (aImages[i - 1].classList.contains('thumb-hide')) {
      aImages[i - 1].classList.remove('thumb-hide');
    }
  }
});

aArrow[1].addEventListener('click', function() {
  let i = aImages.length;
  while (i--) {
    if (aImages[i].classList.contains('thumb-select')) break;
  }
  if (i < aImages.length - 1) {
    aImages[i + 1].dispatchEvent(new Event('click'));
    if (i + 1 > 7) {
      aImages[i - 7].classList.add('thumb-hide');
    }
  }
});

aArrow[1].dispatchEvent(new Event('click'));