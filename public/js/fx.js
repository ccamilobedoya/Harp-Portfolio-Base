var absoluteOffset = anime.timeline();

absoluteOffset
  .add({
    targets: '#item .item-back',
    translateX: '-100%',
    easing: 'easeOutExpo',
    offset: 100 // Starts at 1000ms of the timeline
  });
