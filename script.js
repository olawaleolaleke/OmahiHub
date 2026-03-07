// Marquee
const items = [
  "Food & Drinks","Electronics","Fashion","Books","Services","Housing",
  "General Goods","Creatives","Tutoring","Photography","Gadgets","Clothing",
  "Food & Drinks","Electronics","Fashion","Books","Services","Housing",
  "General Goods","Creatives","Tutoring","Photography","Gadgets","Clothing"
];
const track = document.getElementById('marqueeTrack');
items.forEach(item => {
  track.innerHTML += `<span class="marquee-item">
    <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor"><circle cx="4" cy="4" r="4"/></svg>
    ${item}
  </span>`;
});

// Buyer signup
function handleSignup() {
  const email = document.getElementById('emailInput').value.trim();
  if (!email || !email.includes('@')) { document.getElementById('emailInput').focus(); return; }
  document.getElementById('emailRow').style.display = 'none';
  document.getElementById('successMsg').style.display = 'flex';
  saveData('buyers', { email, date: new Date().toISOString() });
}
document.getElementById('emailInput').addEventListener('keydown', e => { if(e.key==='Enter') handleSignup(); });

// Category toggle
function toggleCat(el) { el.classList.toggle('selected'); }

// Vendor submit
function handleVendor() {
  const name     = document.getElementById('vName').value.trim();
  const phone    = document.getElementById('vPhone').value.trim();
  const email    = document.getElementById('vEmail').value.trim();
  const shop     = document.getElementById('vShop').value.trim();
  const location = document.getElementById('vLocation').value.trim();
  const cats     = [...document.querySelectorAll('.cat-item.selected')].map(el => el.dataset.val);

  if (!name || !phone || !email || !shop || !location) {
    alert('Please fill in all fields before submitting.');
    return;
  }
  if (cats.length === 0) {
    alert('Please select at least one product category.');
    return;
  }

  saveData('vendors', { name, phone, email, shop, location, categories: cats, date: new Date().toISOString() });
  document.getElementById('vendorFormInner').style.display = 'none';
  document.getElementById('vendorSuccess').style.display = 'block';
}

// ── Google Sheets via URL params (bypasses no-cors issue) ──
const SHEET_URL = 'https://script.google.com/macros/s/AKfycbz0KP_XPfdj8MVN6EH0bBaLW1240LsFHdBt4MnPzgJuysKFmg0q24SJ2T_72nfFvF19og/exec';

function saveData(type, entry) {
  // Build URL with query params — works perfectly with no-cors
  const params = new URLSearchParams({ type, ...entry });

  // For categories array, join as string
  if (entry.categories) {
    params.set('categories', entry.categories.join(', '));
  }

  const url = `${SHEET_URL}?${params.toString()}`;

  // Use an Image tag trick — fires GET request, no CORS issues at all
  const img = new Image();
  img.src = url;

  console.log('[Omahi Hub] Sending to Google Sheets:', type, entry);
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
revealEls.forEach(el => observer.observe(el));