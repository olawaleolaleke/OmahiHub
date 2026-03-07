// ── Marquee ──
const items = [
  "Food & Drinks","Electronics","Fashion","Books","Services","Housing",
  "General Goods","Creatives","Tutoring","Photography","Gadgets","Clothing",
  "Food & Drinks","Electronics","Fashion","Books","Services","Housing",
  "General Goods","Creatives","Tutoring","Photography","Gadgets","Clothing"
];
const track = document.getElementById('marqueeTrack');
items.forEach(item => {
  track.innerHTML += `<span class="marquee-item"><span class="dot"></span>${item}</span>`;
});

// ── Buyer signup ──
function handleSignup() {
  const email = document.getElementById('emailInput').value.trim();
  if (!email || !email.includes('@')) { document.getElementById('emailInput').focus(); return; }
  document.getElementById('emailRow').style.display = 'none';
  document.getElementById('successMsg').style.display = 'flex';
  saveData('buyers', { email, date: new Date().toISOString() });
}
document.getElementById('emailInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') handleSignup();
});

// ── Category toggle ──
function toggleCat(el) { el.classList.toggle('selected'); }

// ── Vendor submit ──
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

  saveData('vendors', {
    name, phone, email, shop, location,
    categories: cats.join(', '),
    date: new Date().toISOString()
  });

  document.getElementById('vendorFormInner').style.display = 'none';
  document.getElementById('vendorSuccess').style.display = 'block';
}

// ── Google Sheets via hidden iframe (most reliable, no CORS issues) ──
const SHEET_URL = 'https://script.google.com/macros/s/AKfycbymmWURNWd8Jo08kE-360yXXqGBrqXUNB_9PCNgzjusJ-3jLyvkboJPOREv6KN0q2t3YQ/exec';

function saveData(type, entry) {
  try {
    const params = new URLSearchParams({ type, ...entry });
    const url = `${SHEET_URL}?${params.toString()}`;

    // Method: hidden iframe — bypasses CORS completely, works on all browsers
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = url;
    document.body.appendChild(iframe);

    // Clean up after 10 seconds
    setTimeout(() => {
      if (iframe.parentNode) iframe.parentNode.removeChild(iframe);
    }, 10000);

    console.log('[Omahi Hub] Data sent to Sheets:', type, entry);

  } catch (err) {
    console.error('[Omahi Hub] Send failed:', err);
  }
}

// ── Scroll reveal ──
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));