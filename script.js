// Country details database for Page 3
const countryData = {
  uk: {
    title: "🇬🇧 Study in the United Kingdom",
    desc: "The UK offers world-renowned universities, short 1-year Master's options, and Graduate Route post-study work visas.",
    unis: ["University of Hertfordshire", "Coventry University", "University of Greenwich", "Ulster University"],
    reqs: "IELTS 6.0 - 6.5 (or PTE equivalent), min 55% in academics, academic reference letters.",
    counsellor: "Bikram Dhamala & Sita Adhikari"
  },
  australia: {
    title: "🇦🇺 Study in Australia",
    desc: "Australia provides excellent global rankings, high standards of living, and clear post-study work rights.",
    unis: ["Deakin University", "Swinburne University", "Western Sydney University", "La Trobe University"],
    reqs: "IELTS 6.0 - 6.5, min 60% in high school/bachelors, genuine student (GS) criteria verification.",
    counsellor: "Rohan Karki"
  },
  canada: {
    title: "🇨🇦 Study in Canada",
    desc: "Canada is top-ranked for affordable tuition, welcoming immigration frameworks, and Post-Graduation Work Permits (PGWP).",
    unis: ["Seneca College", "Humber College", "University of Canada West", "Conestoga College"],
    reqs: "IELTS 6.5 (no band less than 6.0), strong financial proofs, clear study plan Statement of Purpose.",
    counsellor: "Pooja Thapa"
  },
  nz: {
    title: "🇳🇿 Study in New Zealand",
    desc: "Experience high-quality practical education and safe living environments in top New Zealand institutes.",
    unis: ["University of Auckland", "AUT University", "Lincoln University", "Ara Institute"],
    reqs: "IELTS 6.0+, academic transcripts, financial proof for fees and NZD 20,000 yearly living expenses.",
    counsellor: "Rohan Karki"
  },
  japan: {
    title: "🇯🇵 Study in Japan",
    desc: "Top choice for high tech innovations, generous scholarship grants, and part-time work options during studies.",
    unis: ["Tokyo International University", "Kyoto University", "Waseda University", "Japanese Language Schools"],
    reqs: "JLPT N5/N4 certification or 150 hours of certified Japanese language study.",
    counsellor: "Kenji Sato"
  },
  skorea: {
    title: "🇰🇷 Study in South Korea",
    desc: "South Korea provides affordable tuition, cutting-edge technology programs, and GKS scholarships.",
    unis: ["Seoul National University", "KAIST", "Hanyang University", "Yonsei University"],
    reqs: "TOPIK Level 3+ or IELTS 5.5+ for English-medium degree programs.",
    counsellor: "Kenji Sato"
  }
};

// Switch SPA Page Tabs
function switchTab(pageId) {
  const sections = document.querySelectorAll('.page-section');
  sections.forEach(sec => sec.classList.remove('active'));

  const activeSec = document.getElementById('page-' + pageId);
  if (activeSec) {
    activeSec.classList.add('active');
  }

  const navBtns = document.querySelectorAll('.nav-btn');
  navBtns.forEach(btn => btn.classList.remove('active'));

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Country Tab Swapper for Page 3
function switchCountryTab(countryKey) {
  const tabBtns = document.querySelectorAll('.country-tabs .tab-btn');
  tabBtns.forEach(btn => btn.classList.remove('active'));
  
  if (event && event.target) {
    event.target.classList.add('active');
  }

  const data = countryData[countryKey];
  const box = document.getElementById('country-detail-box');

  let uniList = data.unis.map(u => `<li><i class="fa-solid fa-check" style="color:var(--gold);"></i> ${u}</li>`).join('');

  box.innerHTML = `
    <h3>${data.title}</h3>
    <p>${data.desc}</p>
    <br>
    <h4>Top Partner Universities:</h4>
    <ul style="list-style:none; margin: 10px 0;">${uniList}</ul>
    <br>
    <h4>General Requirements:</h4>
    <p>${data.reqs}</p>
    <br>
    <p><strong>Dedicated Counsellor:</strong> ${data.counsellor}</p>
    <br>
    <button class="btn btn-gold" onclick="openBookingModal('${countryKey}')">Book Consultation For ${countryKey.toUpperCase()}</button>
  `;
}

// Redirect from Home Card to Products
function selectDestination(countryKey) {
  switchTab('products');
  switchCountryTab(countryKey);
}

// Modal Handlers
function openBookingModal(countryKey = 'uk') {
  const modal = document.getElementById('bookingModal');
  const destSelect = document.getElementById('modal-dest-select');
  if (destSelect) {
    destSelect.value = countryKey;
  }
  modal.style.display = 'flex';
}

function closeBookingModal() {
  document.getElementById('bookingModal').style.display = 'none';
}

// Toggle FAQs
function toggleFaq(element) {
  element.classList.toggle('active');
}

// Form Handlers
function handleBookingSubmit(e) {
  e.preventDefault();
  alert('Thank you! Your counselling appointment has been booked. Our team will contact you shortly.');
  closeBookingModal();
}

function handleContactSubmit(e) {
  e.preventDefault();
  alert('Thank you for messaging Aurora Education! We will reply via email/phone soon.');
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  switchCountryTab('uk');
});
