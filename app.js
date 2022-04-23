function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.animation');
for (let elm of elements) {
  observer.observe(elm);
}



VANTA.HALO({
  el: ".section-3",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  baseColor: 0xde0000,
    backgroundColor: 0x90909,
  xOffset: 0.21,
  yOffset: 0.0,
  size: 1.20
})

