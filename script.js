// Small pointer response on desktop; the UFO's main loop remains CSS-driven.
const sky = document.querySelector('.sky');
const craft = document.querySelector('.ufo');
if (sky && craft && matchMedia('(pointer:fine)').matches) {
  sky.addEventListener('pointermove', e => {
    const r = sky.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    craft.style.marginLeft = `${x * 12}px`;
    craft.style.marginTop = `${y * 8}px`;
  });
  sky.addEventListener('pointerleave', () => {
    craft.style.marginLeft = '0px';
    craft.style.marginTop = '0px';
  });
}
