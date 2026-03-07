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
    const name = document.getElementById('vName').value.trim();
    const phone = document.getElementById('vPhone').value.trim();
    const email = document.getElementById('vEmail').value.trim();
    const shop = document.getElementById('vShop').value.trim();
    const location = document.getElementById('vLocation').value;
    const cats = [...document.querySelectorAll('.cat-item.selected')].map(el => el.dataset.val);

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

  const SHEET_URL = 'https://script.google.com/macros/s/AKfycbySk0BatFri5VCi-iu0JeTgoXDOPHcZN9jT2devLzEgQk6BKvG7T8r0KzwJIj-OaBzoiQ/exec';

  async function saveData(key, entry) {
    try {
      await fetch(SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: key, ...entry })
      });
      console.log('[Omahi Hub] Sent to Google Sheets:', key, entry);
    } catch (err) {
      console.error('[Omahi Hub] Failed to send:', err);
    }
  }

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  revealEls.forEach(el => observer.observe(el));