// Country, location, and institution database for Page 3.
const countryData = {
  uk: {
    name: "Study in the United Kingdom",
    flag: "UK flag.png",
    desc: "Explore partner universities and colleges by UK location, including London, England, Scotland, and Wales.",
    locations: {
      "London": ["University of Greenwich International College (UGIC)", "University of Greenwich", "University of Roehampton", "Ravensbourne University London", "BPP University", "University of East London", "University of West London", "Northumbria University - London Campus", "Middlesex University", "Regent College", "Arden University"],
      "Outside London - England": ["University of Bradford International College (UBIC)", "University of Bradford", "University of Kent", "BIMM University", "University of Southampton", "University of Winchester", "Buckinghamshire New University", "University of Huddersfield", "Aston University", "Coventry University", "Teesside University", "University of Sunderland", "University of Bedfordshire", "University of Hertfordshire", "University of Chester", "Anglia Ruskin University", "University of Wolverhampton", "Solent University", "Health Sciences University", "Northumbria University - Newcastle upon Tyne"],
      "Scotland": ["International College Dundee (ICD)", "Edinburgh Napier University International College (ENUIC)", "Edinburgh Napier University", "University of the West of Scotland (UWS)"],
      "Wales": ["Bangor University International College (BUIC)", "Bangor University", "University of South Wales (USW)"],
      "Multiple UK locations": ["BPP University", "Arden University", "BIMM University", "Health Sciences University"]
    },
    reqs: "IELTS 6.0 - 6.5 (or PTE equivalent), min 55% in academics, and academic reference letters.",
    counsellor: "Sudip Puri, Pratik Dhital, Samyog Rai, Bikram Dhamala, Sakuntala Puri, Sujata Katwal"
  },
  australia: {
    name: "Study in Australia",
    flag: "Australia fag.jpg",
    desc: "Find Australian universities by state or territory, with strong education, lifestyle, and post-study work options.",
    locations: {
      "Victoria (VIC)": ["University of Melbourne", "Monash University", "Deakin University", "La Trobe University", "RMIT University", "Swinburne University of Technology", "Federation University"],
      "New South Wales (NSW)": ["University of Sydney", "University of New South Wales (UNSW Sydney)", "University of Technology Sydney (UTS)", "Macquarie University", "Western Sydney University", "University of Wollongong", "University of Newcastle"],
      "Queensland (QLD)": ["University of Queensland", "Queensland University of Technology (QUT)", "Central Queensland University", "University of Southern Queensland", "University of the Sunshine Coast", "James Cook University", "Griffith University"],
      "Western Australia (WA)": ["University of Western Australia", "Curtin University"],
      "South Australia (SA)": ["University of Adelaide", "University of South Australia"],
      "Tasmania (TAS)": ["University of Tasmania"],
      "Northern Territory (NT)": ["Charles Darwin University"],
      "Australian Capital Territory (ACT)": ["Australian National University (ANU)"],
      "Multiple / National": ["Charles Sturt University", "Southern Cross University"]
    },
    reqs: "IELTS 6.0 - 6.5, min 60% in high school or bachelor's study, and genuine student (GS) criteria verification.",
    counsellor: "Sudip Puri, Pratik Dhital, Samyog Rai"
  },
  nz: {
    name: "Study in New Zealand",
    flag: "NZ flag.jpg",
    desc: "Compare trusted New Zealand universities by city and region in a safe, practical study environment.",
    locations: { "Auckland": ["University of Auckland", "Auckland University of Technology (AUT)"], "Otago": ["University of Otago"], "Wellington": ["Victoria University of Wellington"], "Canterbury": ["University of Canterbury", "Lincoln University"], "Waikato": ["University of Waikato"], "Multiple locations": ["Massey University"] },
    reqs: "IELTS 6.0+, academic transcripts, and financial proof for fees and NZD 20,000 yearly living expenses.",
    counsellor: "Pratik Dhital, Bikram Dhamala, Mukesh Lamichhane"
  },
  canada: {
    name: "Study in Canada",
    flag: "Canada flag.jpg",
    desc: "Browse Canadian institutions by province, with pathways to high-quality education and post-graduation work permits.",
    locations: { "Ontario": ["University of Toronto", "York University", "Toronto Metropolitan University (TMU)", "McMaster University", "Western University", "Queen's University", "Brock University", "Lakehead University", "Laurentian University", "Trent University"], "British Columbia (BC)": ["University of British Columbia (UBC)", "Simon Fraser University (SFU)", "University Canada West (UCW)", "Fairleigh Dickinson University - Vancouver", "Royal Roads University", "University of Northern British Columbia (UNBC)", "Thompson Rivers University", "Vancouver Island University"], "Alberta": ["University of Alberta", "University of Calgary", "MacEwan University"], "Manitoba": ["University of Manitoba", "University of Winnipeg"], "Quebec": ["McGill University", "Concordia University"], "Saskatchewan": ["University of Regina"], "Nova Scotia": ["Dalhousie University", "Cape Breton University"], "Newfoundland and Labrador": ["Memorial University of Newfoundland"], "Prince Edward Island": ["University of Prince Edward Island (UPEI)"], "New Brunswick": ["No institution from the provided list"] },
    reqs: "IELTS 6.5 (no band less than 6.0), strong financial proof, and a clear study plan or Statement of Purpose.",
    counsellor: "Samyog Rai"
  },
  japan: {
    name: "Study in Japan",
    flag: "japan flag.jpg",
    desc: "Choose language schools, vocational colleges, and universities by Japanese city.",
    locations: { "Tokyo": ["KCP International Language School", "Human Academy Japanese Language School", "Intercultural Institute of Japan", "Sendagaya Japanese Institute", "KAI Japanese Language School", "Nippon Engineering College", "HAL College of Technology & Design", "Tokyo Mode Gakuen", "Japan Electronics College", "Waseda University", "Sophia University", "University of Tokyo"], "Osaka": ["Human Academy Japanese Language School", "HAL College of Technology & Design"], "Nagoya": ["HAL College of Technology & Design"], "Kyoto": ["Kyoto University"], "Oita": ["Ritsumeikan Asia Pacific University (APU)"] },
    reqs: "JLPT N5/N4 certification or 150 hours of certified Japanese language study.",
    counsellor: "Sudip Puri, Mukesh Lamichhane, Sakuntala Puri, Sujata Katwal"
  },
  skorea: {
    name: "Study in South Korea",
    flag: "SK flag.png",
    desc: "Explore Korean language institutes and universities by city, including scholarship-focused study routes.",
    locations: { "Seoul": ["Sogang University Korean Language Education Center", "Ewha Womans University Language Center", "Seoul National University Language Education Institute", "Seoul National University (SNU)", "Korea University", "Yonsei University", "Hanyang University", "Kyung Hee University", "Sungkyunkwan University (SKKU)", "Sejong University"], "Asan": ["Sun Moon University Language Institute"], "Suwon / Seoul": ["Sungkyunkwan University (SKKU)"], "Daejeon": ["KAIST (Korea Advanced Institute of Science and Technology)"] },
    reqs: "TOPIK Level 3+ or IELTS 5.5+ for English-medium degree programs.",
    counsellor: "Sudip Puri, Mukesh Lamichhane, Sakuntala Puri"
  }
};

// Replace this placeholder with the Formspree endpoint connected to Aurora's email.
const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORMSPREE_FORM_ID";

// Counsellors mapping database
const counsellorsData = [
  { name: "Sudip Puri", phone: "+9779851003826", destinations: ["United Kingdom", "Japan", "South Korea", "Australia"] },
  { name: "Pratik Dhital", phone: "+9779851321500", destinations: ["United Kingdom", "Australia", "New Zealand"] },
  { name: "Samyog Rai", phone: "+9779768552904", destinations: ["Australia", "United Kingdom", "Canada"] },
  { name: "Bikram Dhamala", phone: "+9779768552905", destinations: ["United Kingdom", "New Zealand"] },
  { name: "Mukesh Lamichhane", phone: "+9779851348506", destinations: ["South Korea", "Japan", "New Zealand"] },
  { name: "Sakuntala Puri", phone: "+9779860378406", destinations: ["United Kingdom", "Japan", "South Korea"] },
  { name: "Sujata Katwal", phone: "+9779768552905", destinations: ["United Kingdom", "Japan"] }
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
  const tabBtns = document.querySelectorAll('.country-tabs .tab-btn');
  tabBtns.forEach(btn => btn.classList.toggle('active', btn.dataset.country === countryKey));

  const data = countryData[countryKey];
  const box = document.getElementById('country-detail-box');

  if (data && box) {
    const locationNames = Object.keys(data.locations);
    const renderLocation = (locationName) => {
      const institutions = data.locations[locationName] || [];
      return institutions.map(institution => `<li><i class="fa-solid fa-check" style="color:var(--gold);"></i> ${institution}</li>`).join('');
    };

    box.innerHTML = `
      <div class="country-heading">
        <img src="${data.flag}" alt="${data.name} flag">
        <h3>${data.name}</h3>
      </div>
      <p>${data.desc}</p>
      <div class="form-group" style="margin-top: 20px;">
        <label for="country-location-select">Choose a location</label>
        <select id="country-location-select" aria-label="Choose a location">
          ${locationNames.map(location => `<option value="${location}">${location}</option>`).join('')}
        </select>
      </div>
      <h4 id="location-heading">Institutions in ${locationNames[0]}:</h4>
      <ul id="location-institution-list" style="list-style:none; margin: 10px 0;">${renderLocation(locationNames[0])}</ul>
      <button class="btn btn-gold" onclick="openBookingModal('${countryKey}')">Book Consultation For ${countryKey.toUpperCase()}</button>
    `;

    const locationSelect = document.getElementById('country-location-select');
    const locationHeading = document.getElementById('location-heading');
    const institutionList = document.getElementById('location-institution-list');
    locationSelect.addEventListener('change', () => {
      locationHeading.textContent = `Institutions in ${locationSelect.value}:`;
      institutionList.innerHTML = renderLocation(locationSelect.value);
    });
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

  const bookingStatus = document.getElementById('bookingFormStatus');
  if (bookingStatus) {
    bookingStatus.textContent = '';
    bookingStatus.className = 'form-status';
  }
}

// Toggle FAQs
function toggleFaq(element) {
  element.classList.toggle('active');
}

function openTeamProfile(card) {
  const modal = document.getElementById('teamProfileModal');
  const content = card ? card.querySelector('.team-profile-data') : null;
  const target = document.getElementById('teamProfileContent');

  if (!modal || !content || !target) return;

  target.innerHTML = content.innerHTML;
  modal.style.display = 'flex';
  modal.setAttribute('aria-hidden', 'false');
}

function closeTeamProfile() {
  const modal = document.getElementById('teamProfileModal');
  const target = document.getElementById('teamProfileContent');

  if (!modal) return;

  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
  if (target) target.innerHTML = '';
}

// Form Handlers
async function submitForm(form, statusId, successMessage) {
  const status = document.getElementById(statusId);
  const submitButton = form.querySelector('button[type="submit"]');

  if (FORM_ENDPOINT.includes('YOUR_FORMSPREE_FORM_ID')) {
    status.textContent = 'Form service is not configured yet. Add the Formspree endpoint in script.js.';
    status.className = 'form-status form-status-error';
    return false;
  }

  if (submitButton) submitButton.disabled = true;
  status.textContent = 'Sending...';
  status.className = 'form-status form-status-pending';

  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    });

    if (!response.ok) throw new Error('Form submission failed');

    status.textContent = successMessage;
    status.className = 'form-status form-status-success';
    form.reset();
    return true;
  } catch (error) {
    status.textContent = 'Unable to send right now. Please call or WhatsApp Aurora directly.';
    status.className = 'form-status form-status-error';
    return false;
  } finally {
    if (submitButton) submitButton.disabled = false;
  }
}

async function handleBookingSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const counsellor = counsellorsData.find(item => item.name === form.querySelector('#modal-counsellor-select').value);
  let phoneField = form.querySelector('[name="Counsellor Contact Number"]');

  if (!phoneField) {
    phoneField = document.createElement('input');
    phoneField.type = 'hidden';
    phoneField.name = 'Counsellor Contact Number';
    form.appendChild(phoneField);
  }

  phoneField.value = counsellor ? counsellor.phone : 'Any available counsellor';
  const sent = await submitForm(form, 'bookingFormStatus', 'Booking request sent. Aurora will contact you shortly.');
  if (sent) closeBookingModal();
}

function handleContactSubmit(e) {
  e.preventDefault();
  updateContactEnquiryOptions();
  submitForm(e.currentTarget, 'contactFormStatus', 'Your enquiry has been sent. Aurora will reply by email or phone.');
}

function updateContactEnquiryOptions() {
  const typeSelect = document.getElementById('contact-enquiry-type');
  const destinationGroup = document.getElementById('contact-destination-group');
  const destinationSelect = document.getElementById('contact-destination');
  const enquiryValue = document.getElementById('contact-enquiry-value');

  if (!typeSelect || !destinationGroup || !destinationSelect || !enquiryValue) return;

  const isStudyAbroad = typeSelect.value === 'Study Abroad';
  destinationGroup.hidden = !isStudyAbroad;
  destinationSelect.required = isStudyAbroad;

  if (isStudyAbroad) {
    enquiryValue.value = destinationSelect.value ? `Study Abroad - ${destinationSelect.value}` : '';
  } else {
    destinationSelect.value = '';
    enquiryValue.value = typeSelect.value;
  }
}

// Initialization on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  switchTab('home');
  switchCountryTab('uk');
  updateContactEnquiryOptions();

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeTeamProfile();
  });
});