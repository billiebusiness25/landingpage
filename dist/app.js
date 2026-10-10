const foods = [
  {name:'Soufflé Matcha',category:'snack',label:'CAMILAN',image:'photo-1528207776546-365bb710ee93'},
  {name:'Donat Jepang',category:'bread',label:'ROTI & PASTRY',image:'photo-1551024506-0bccd828d307'},
  {name:'Rice Bowl Geprek',category:'meal',label:'MAKANAN BERAT',image:'photo-1512621776951-a57141f2eefd'},
  {name:'Strawberry Waffle',category:'snack',label:'CAMILAN',image:'photo-1562376552-0d160a2f238d'},
  {name:'Kasutera Cake',category:'bread',label:'ROTI & PASTRY',image:'photo-1464305795204-6f5bbfc7fb81'},
  {name:'Es Kopi Susu',category:'drink',label:'MINUMAN',image:'photo-1461023058943-07fcbe16d735'}
];
function renderFoods(category = 'all') {
  document.querySelector('#food-grid').innerHTML = foods.filter(food => category === 'all' || food.category === category).map(food => `<article class="food-card"><div class="food-photo"><img src="https://images.unsplash.com/${food.image}?w=400&auto=format&fit=crop&q=80" alt="Ilustrasi ${food.name}" width="200" height="140"><span>↗</span></div><div class="food-info"><small>${food.label}</small><h3>${food.name}</h3></div></article>`).join('');
}
renderFoods();
document.querySelectorAll('[data-category]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-category]').forEach(other => { other.classList.remove('active'); other.setAttribute('aria-pressed','false'); });
  button.classList.add('active'); button.setAttribute('aria-pressed','true'); renderFoods(button.dataset.category);
}));
document.querySelector('[data-category="all"]').setAttribute('aria-pressed','true');
document.querySelectorAll('.faq-list details').forEach(details => details.addEventListener('toggle', () => {
  if (details.open) document.querySelectorAll('.faq-list details').forEach(other => { if(other !== details) other.open = false; });
}));
const dialog = document.querySelector('#checkout-dialog');
document.querySelector('#checkout-button').addEventListener('click', () => dialog.showModal());
document.querySelectorAll('.dialog-close, .dialog-dismiss').forEach(button => button.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', event => { if(event.target === dialog) { const bounds = dialog.getBoundingClientRect(); if(event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close(); } });
document.querySelector('#year').textContent = new Date().getFullYear();

// Two seamless preview rows; duplicate groups keep both edges filled while moving.
const previewGrid = document.querySelector('.preview-grid');
if (previewGrid) {
  const cards = [...previewGrid.children];
  const marquee = document.createElement('div');
  marquee.className = 'preview-marquee';
  marquee.setAttribute('aria-label', 'Preview isi paket dalam dua baris');
  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'marquee-toggle';
  toggle.textContent = 'Ⅱ Jeda animasi';
  toggle.setAttribute('aria-pressed', 'false');
  toggle.setAttribute('aria-controls', 'package-marquee');
  marquee.id = 'package-marquee';
  toggle.addEventListener('click', () => {
    const paused = marquee.classList.toggle('is-paused');
    toggle.setAttribute('aria-pressed', String(paused));
    toggle.textContent = paused ? '▷ Lanjutkan animasi' : 'Ⅱ Jeda animasi';
  });
  for (let rowIndex = 0; rowIndex < 2; rowIndex++) {
    const row = document.createElement('div');
    row.className = `marquee-row ${rowIndex === 0 ? 'marquee-right' : 'marquee-left'}`;
    const track = document.createElement('div');
    track.className = 'marquee-track';
    const orderedCards = rowIndex === 0 ? cards : [...cards.slice(2), ...cards.slice(0, 2)];
    for (let groupIndex = 0; groupIndex < 2; groupIndex++) {
      const group = document.createElement('div');
      group.className = 'marquee-group';
      if (groupIndex > 0 || rowIndex > 0) group.setAttribute('aria-hidden', 'true');
      for (let repeat = 0; repeat < 2; repeat++) {
        orderedCards.forEach(card => {
          const copy = card.cloneNode(true);
          if (repeat > 0) copy.setAttribute('aria-hidden', 'true');
          group.append(copy);
        });
      }
      track.append(group);
    }
    row.append(track);
    marquee.append(row);
  }
  previewGrid.replaceWith(toggle, marquee);
}
