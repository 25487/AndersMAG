const _maRechthoek_ = document.querySelector('#_maRechthoek_');
const coolecirkel = new TimelineMax({repeat:-6, repeatDelay:0.01});
coolecirkel .to(_maRechthoek_, 1.5, {rotation:"360", transformOrigin:"center", ease:Linear.easeNone});


  const rotatie = document.querySelector('.cls-6');
  TweenMax.to(rotatie, 5, {rotate: 2880, transformOrigin: "center"})
