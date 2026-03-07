const items = ["Food & Drinks","Electronics","Fashion","Books","Services","Housing","General Goods","Creatives","Tutoring","Photography","Gadgets","Clothing","Food & Drinks","Electronics","Fashion","Books","Services","Housing","General Goods","Creatives","Tutoring","Photography","Gadgets","Clothing"];
  const track = document.getElementById('marqueeTrack');
  items.forEach(item => {
    track.innerHTML += `<span class="marquee-item"><span class="dot"></span>${item}</span>`;
  });

  function handleSignup() {
    const email = document.getElementById('emailInput').value.trim();
    if (!email || !email.includes('@')) { document.getElementById('emailInput').focus(); return; }
    document.getElementById('emailRow').style.display = 'none';
    document.getElementById('successMsg').style.display = 'flex';
    saveData('buyers', { email, date: new Date().toISOString() });
  }
  document.getElementById('emailInput').addEventListener('keydown', e => { if(e.key==='Enter') handleSignup(); });

  function toggleCat(el) { el.classList.toggle('selected'); }

  function handleVendor() {
    const name = document.getElementById('vName').value.trim();
    const phone = document.getElementById('vPhone').value.trim();
    const email = document.getElementById('vEmail').value.trim();
    const shop = document.getElementById('vShop').value.trim();
    const location = document.getElementById('vLocation').value.trim();
    const cats = [...document.querySelectorAll('.cat-item.selected')].map(el => el.dataset.val);
    if (!name || !phone || !email || !shop || !location) { alert('Please fill in all fields.'); return; }
    if (cats.length === 0) { alert('Please select at least one category.'); return; }
    saveData('vendors', { name, phone, email, shop, location, categories: cats, date: new Date().toISOString() });
    document.getElementById('vendorFormInner').style.display = 'none';
    document.getElementById('vendorSuccess').style.display = 'block';
  }

  const SHEET_URL = 'https://script.google.com/macros/s/AKfycbzIp3WLDok0c187igjmQfJfmgtJ-TMMeLOR1yjLIq-4FaOYtCfkhunibGtPBcbRXDPZHw/exec';
  function saveData(type, entry) {
    const params = new URLSearchParams({ type, ...entry });
    if (entry.categories) params.set('categories', entry.categories.join(', '));
    const img = new Image();
    img.src = `${SHEET_URL}?${params.toString()}`;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));