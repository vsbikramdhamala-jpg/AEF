// Country details database for Page 3
const countryData = {
  uk: {
    title: "🇬🇧 Study in the United Kingdom",
    desc: "The UK offers world-renowned universities, short 1-year Master's options, and Graduate Route post-study work visas.",
    unis: ["University of Hertfordshire", "Coventry University", "University of Greenwich", "Ulster University"],
    reqs: "IELTS 6.0 - 6.5 (or PTE equivalent), min 55% in academics, academic reference letters.",
    counsellor: "Sudip Puri, Pratik Dhital, Samyog Rai, Bikram Dhamala, Sakuntala Puri, Sujata Katwal"
  },
  australia: {
    title: "🇦🇺 Study in Australia",
    desc: "Australia provides excellent global rankings, high standards of living, and clear post-study work rights.",
    unis: ["Deakin University", "Swinburne University", "Western Sydney University", "La Trobe University"],
    reqs: "IELTS 6.0 - 6.5, min 60% in high school/bachelors, genuine student (GS) criteria verification.",
    counsellor: "Sudip Puri, Pratik Dhital, Samyog Rai"
  },
  canada: {
    title: "🇨🇦 Study in Canada",
    desc: "Canada is top-ranked for affordable tuition, welcoming immigration frameworks, and Post-Graduation Work Permits (PGWP).",
    unis: ["Seneca College", "Humber College", "University of Canada West", "Conestoga College"],
    reqs: "IELTS 6.5 (no band less than 6.0), strong financial proofs, clear study plan Statement of Purpose.",
    counsellor: "Samyog Rai"
  },
  nz: {
    title: "🇳🇿 Study in New Zealand",
    desc: "Experience high-quality practical education and safe living environments in top New Zealand institutes.",
    unis: ["University of Auckland", "AUT University", "Lincoln University", "Ara Institute"],
    reqs: "IELTS 6.0+, academic transcripts, financial proof for fees and NZD 20,000 yearly living expenses.",
    counsellor: "Pratik Dhital, Bikram Dhamala, Mukesh Lamichhane"
  },
  japan: {
    title: "🇯🇵 Study in Japan",
    desc: "Top choice for high tech innovations, generous scholarship grants, and part-time work options during studies.",
    unis: ["Tokyo International University", "Kyoto University", "Waseda University", "Japanese Language Schools"],
    reqs: "JLPT N5/N4 certification or 150 hours of certified Japanese language study.",
    counsellor: "Sudip Puri, Mukesh Lamichhane, Sakuntala Puri, Sujata Katwal"
  },
  skorea: {
    title: "🇰🇷 Study in South Korea",
    desc: "South Korea provides affordable tuition, cutting-edge technology programs, and GKS scholarships.",
    unis: ["Seoul National University", "KAIST", "Hanyang University", "Yonsei University"],
    reqs: "TOPIK Level 3+ or IELTS 5.5+ for English-medium degree programs.",
    counsellor: "Sudip Puri, Mukesh Lamichhane, Sakuntala Puri"
  }
};

// Counsellors mapping database
const counsellorsData = [
  { name: "Sudip Puri", destinations: ["United Kingdom", "Japan", "South Korea", "Australia"] },
  { name: "Pratik Dhital", destinations: ["United Kingdom", "Australia", "New Zealand"] },
  { name: "Samyog Rai", destinations: ["Australia", "United Kingdom", "Canada"] },
  { name: "Bikram Dhamala", destinations: ["United Kingdom", "New Zealand"] },
  { name: "Mukesh Lamichhane", destinations: ["South Korea", "Japan", "New Zealand"] },
  { name: "Sakuntala Puri", destinations: ["United Kingdom", "Japan", "South Korea"] },
  { name: "Sujata Katwal", destinations: ["United Kingdom", "Japan"] }
];

// Key-to-Full Name helper for modal pre-selection
const countryKeyToFullName = {
  uk: "United Kingdom",
  australia: "Australia",
  canada: "Canada",
  nz: "New Zealand",
  japan: "Japan",
  skorea: "South Korea"
};

// Dynamic Counsellor Filtering Function
function filterCounsellors() {
  const destSelect = document.getElementById("modal-dest-select");
  const counsellorSelect = document.getElementById("modal-counsellor-select");
  
  if (!destSelect || !counsellorSelect) return;

  const selectedDestination = destSelect.value;

  // Reset options to default
  counsellorSelect.innerHTML = '<option value="Any Available Counsellor">Any Available Counsellor</option>';

  if (!selectedDestination) return;

  // Filter counsellors matching the selected country
  const matchingCounsellors = counsellorsData.filter(counsellor =>
    counsellor.destinations.includes(selectedDestination)
  );

  // Append matched counsellors as options
  matchingCounsellors.forEach(counsellor => {
    const option = document.createElement("option");
    option.value = counsellor.name;
    option.textContent = counsellor.name;
    counsellorSelect.appendChild(option);
  });
}

// Global Page Switcher Function
function switchTab(pageId, event) {
  if (event) {
    event.preventDefault();
  }

  // 1. Force hide all sections via direct style override
  const sections = document.querySelectorAll('.page-section');
  sections.forEach(sec => {
    sec.classList.remove('active');
    sec.style.setProperty('display', 'none', 'important');
  });

  // 2. Force show selected section
  const targetSection = document.getElementById('page-' + pageId);
  if (targetSection) {
    targetSection.classList.add('active');
    targetSection.style.setProperty('display', 'block', 'important');
  } else {
    console.error('Target section not found: page-' + pageId);
  }

  // 3. Highlight top navigation active link
  const navBtns = document.querySelectorAll('.nav-btn');
  navBtns.forEach(btn => btn.classList.remove('active'));
  
  const activeNav = document.querySelector(`.nav-btn[data-page="${pageId}"]`);
  if (activeNav) {
    activeNav.classList.add('active');
  }

  // 4. Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Auto Scroll for Explore Destinations Button
function scrollToDestinations() {
  const target = document.getElementById('popular-destinations');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

// Country Tab Swapper for Page 3
function switchCountryTab(countryKey, evt) {
  if (evt) {
    const tabBtns = document.querySelectorAll('.country-tabs .tab-btn');
    tabBtns.forEach(btn => btn.classList.remove('active'));
    evt.currentTarget.classList.add('active');
  }

  const data = countryData[countryKey];
  const box = document.getElementById('country-detail-box');

  if (data && box) {
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
      <p><strong>Dedicated Counsellors:</strong> ${data.counsellor}</p>
      <br>
      <button class="btn btn-gold" onclick="openBookingModal('${countryKey}')">Book Consultation For ${countryKey.toUpperCase()}</button>
    `;
  }
}

// Redirect from Home Card to Products
function selectDestination(countryKey) {
  switchTab('products');
  switchCountryTab(countryKey);
}

// Modal Handlers
function openBookingModal(countryKey = null) {
  const modal = document.getElementById('bookingModal');
  const destSelect = document.getElementById('modal-dest-select');

  if (destSelect) {
    if (countryKey && countryKeyToFullName[countryKey]) {
      destSelect.value = countryKeyToFullName[countryKey];
    } else if (countryKey && Object.values(countryKeyToFullName).includes(countryKey)) {
      destSelect.value = countryKey;
    }
    // Automatically trigger filtering based on the updated destination
    filterCounsellors();
  }

  if (modal) {
    modal.style.display = 'flex';
  }
}

function closeBookingModal() {
  const modal = document.getElementById('bookingModal');
  const bookingForm = document.getElementById('bookingForm');

  if (modal) {
    modal.style.display = 'none';
  }

  // Reset form inputs and dropdown state
  if (bookingForm) {
    bookingForm.reset();
    filterCounsellors();
  }
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

// Initialization on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  switchTab('home');
  switchCountryTab('uk');
});