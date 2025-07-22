// Country code data
const countryCodes = [
  { name: "Afghanistan (+93)", code: "+93" },
  { name: "Albania (+355)", code: "+355" },
  { name: "Algeria (+213)", code: "+213" },
  { name: "Andorra (+376)", code: "+376" },
  { name: "Angola (+244)", code: "+244" },
  { name: "Antigua and Barbuda (+1-268)", code: "+1-268" },
  { name: "Argentina (+54)", code: "+54" },
  { name: "Armenia (+374)", code: "+374" },
  { name: "Australia (+61)", code: "+61" },
  { name: "Austria (+43)", code: "+43" },
  { name: "Azerbaijan (+994)", code: "+994" },
  { name: "Bahamas (+1-242)", code: "+1-242" },
  { name: "Bahrain (+973)", code: "+973" },
  { name: "Bangladesh (+880)", code: "+880" },
  { name: "Barbados (+1-246)", code: "+1-246" },
  { name: "Belarus (+375)", code: "+375" },
  { name: "Belgium (+32)", code: "+32" },
  { name: "Belize (+501)", code: "+501" },
  { name: "Benin (+229)", code: "+229" },
  { name: "Bhutan (+975)", code: "+975" },
  { name: "Bolivia (+591)", code: "+591" },
  { name: "Bosnia and Herzegovina (+387)", code: "+387" },
  { name: "Botswana (+267)", code: "+267" },
  { name: "Brazil (+55)", code: "+55" },
  { name: "Brunei (+673)", code: "+673" },
  { name: "Bulgaria (+359)", code: "+359" },
  { name: "Burkina Faso (+226)", code: "+226" },
  { name: "Burundi (+257)", code: "+257" },
  { name: "Cabo Verde (+238)", code: "+238" },
  { name: "Cambodia (+855)", code: "+855" },
  { name: "Cameroon (+237)", code: "+237" },
  { name: "Canada (+1)", code: "+1" },
  { name: "Central African Republic (+236)", code: "+236" },
  { name: "Chad (+235)", code: "+235" },
  { name: "Chile (+56)", code: "+56" },
  { name: "China (+86)", code: "+86" },
  { name: "Colombia (+57)", code: "+57" },
  { name: "Comoros (+269)", code: "+269" },
  { name: "Congo (+242)", code: "+242" },
  { name: "Costa Rica (+506)", code: "+506" },
  { name: "Croatia (+385)", code: "+385" },
  { name: "Cuba (+53)", code: "+53" },
  { name: "Cyprus (+357)", code: "+357" },
  { name: "Czech Republic (+420)", code: "+420" },
  { name: "Denmark (+45)", code: "+45" },
  { name: "Djibouti (+253)", code: "+253" },
  { name: "Dominica (+1-767)", code: "+1-767" },
  { name: "Dominican Republic (+1-809)", code: "+1-809" },
  { name: "Ecuador (+593)", code: "+593" },
  { name: "Egypt (+20)", code: "+20" },
  { name: "El Salvador (+503)", code: "+503" },
  { name: "Equatorial Guinea (+240)", code: "+240" },
  { name: "Eritrea (+291)", code: "+291" },
  { name: "Estonia (+372)", code: "+372" },
  { name: "Eswatini (+268)", code: "+268" },
  { name: "Ethiopia (+251)", code: "+251" },
  { name: "Fiji (+679)", code: "+679" },
  { name: "Finland (+358)", code: "+358" },
  { name: "France (+33)", code: "+33" },
  { name: "Gabon (+241)", code: "+241" },
  { name: "Gambia (+220)", code: "+220" },
  { name: "Georgia (+995)", code: "+995" },
  { name: "Germany (+49)", code: "+49" },
  { name: "Ghana (+233)", code: "+233" },
  { name: "Greece (+30)", code: "+30" },
  { name: "Grenada (+1-473)", code: "+1-473" },
  { name: "Guatemala (+502)", code: "+502" },
  { name: "Guinea (+224)", code: "+224" },
  { name: "Guinea-Bissau (+245)", code: "+245" },
  { name: "Guyana (+592)", code: "+592" },
  { name: "Haiti (+509)", code: "+509" },
  { name: "Honduras (+504)", code: "+504" },
  { name: "Hungary (+36)", code: "+36" },
  { name: "Iceland (+354)", code: "+354" },
  { name: "India (+91)", code: "+91" },
  { name: "Indonesia (+62)", code: "+62" },
  { name: "Iran (+98)", code: "+98" },
  { name: "Iraq (+964)", code: "+964" },
  { name: "Ireland (+353)", code: "+353" },
  { name: "Israel (+972)", code: "+972" },
  { name: "Italy (+39)", code: "+39" },
  { name: "Jamaica (+1-876)", code: "+1-876" },
  { name: "Japan (+81)", code: "+81" },
  { name: "Jordan (+962)", code: "+962" },
  { name: "Kazakhstan (+7)", code: "+7" },
  { name: "Kenya (+254)", code: "+254" },
  { name: "Kiribati (+686)", code: "+686" },
  { name: "Kuwait (+965)", code: "+965" },
  { name: "Kyrgyzstan (+996)", code: "+996" },
  { name: "Laos (+856)", code: "+856" },
  { name: "Latvia (+371)", code: "+371" },
  { name: "Lebanon (+961)", code: "+961" },
  { name: "Lesotho (+266)", code: "+266" },
  { name: "Liberia (+231)", code: "+231" },
  { name: "Libya (+218)", code: "+218" },
  { name: "Liechtenstein (+423)", code: "+423" },
  { name: "Lithuania (+370)", code: "+370" },
  { name: "Luxembourg (+352)", code: "+352" },
  { name: "Madagascar (+261)", code: "+261" },
  { name: "Malawi (+265)", code: "+265" },
  { name: "Malaysia (+60)", code: "+60" },
  { name: "Maldives (+960)", code: "+960" },
  { name: "Mali (+223)", code: "+223" },
  { name: "Malta (+356)", code: "+356" },
  { name: "Marshall Islands (+692)", code: "+692" },
  { name: "Mauritania (+222)", code: "+222" },
  { name: "Mauritius (+230)", code: "+230" },
  { name: "Mexico (+52)", code: "+52" },
  { name: "Micronesia (+691)", code: "+691" },
  { name: "Moldova (+373)", code: "+373" },
  { name: "Monaco (+377)", code: "+377" },
  { name: "Mongolia (+976)", code: "+976" },
  { name: "Montenegro (+382)", code: "+382" },
  { name: "Morocco (+212)", code: "+212" },
  { name: "Mozambique (+258)", code: "+258" },
  { name: "Myanmar (+95)", code: "+95" },
  { name: "Namibia (+264)", code: "+264" },
  { name: "Nauru (+674)", code: "+674" },
  { name: "Nepal (+977)", code: "+977" },
  { name: "Netherlands (+31)", code: "+31" },
  { name: "New Zealand (+64)", code: "+64" },
  { name: "Nicaragua (+505)", code: "+505" },
  { name: "Niger (+227)", code: "+227" },
  { name: "Nigeria (+234)", code: "+234" },
  { name: "North Korea (+850)", code: "+850" },
  { name: "North Macedonia (+389)", code: "+389" },
  { name: "Norway (+47)", code: "+47" },
  { name: "Oman (+968)", code: "+968" },
  { name: "Pakistan (+92)", code: "+92" },
  { name: "Palau (+680)", code: "+680" },
  { name: "Palestine (+970)", code: "+970" },
  { name: "Panama (+507)", code: "+507" },
  { name: "Papua New Guinea (+675)", code: "+675" },
  { name: "Paraguay (+595)", code: "+595" },
  { name: "Peru (+51)", code: "+51" },
  { name: "Philippines (+63)", code: "+63" },
  { name: "Poland (+48)", code: "+48" },
  { name: "Portugal (+351)", code: "+351" },
  { name: "Qatar (+974)", code: "+974" },
  { name: "Romania (+40)", code: "+40" },
  { name: "Russia (+7)", code: "+7" },
  { name: "Rwanda (+250)", code: "+250" },
  { name: "Saint Kitts and Nevis (+1-869)", code: "+1-869" },
  { name: "Saint Lucia (+1-758)", code: "+1-758" },
  { name: "Saint Vincent and the Grenadines (+1-784)", code: "+1-784" },
  { name: "Samoa (+685)", code: "+685" },
  { name: "San Marino (+378)", code: "+378" },
  { name: "Sao Tome and Principe (+239)", code: "+239" },
  { name: "Saudi Arabia (+966)", code: "+966" },
  { name: "Senegal (+221)", code: "+221" },
  { name: "Serbia (+381)", code: "+381" },
  { name: "Seychelles (+248)", code: "+248" },
  { name: "Sierra Leone (+232)", code: "+232" },
  { name: "Singapore (+65)", code: "+65" },
  { name: "Slovakia (+421)", code: "+421" },
  { name: "Slovenia (+386)", code: "+386" },
  { name: "Solomon Islands (+677)", code: "+677" },
  { name: "Somalia (+252)", code: "+252" },
  { name: "South Africa (+27)", code: "+27" },
  { name: "South Korea (+82)", code: "+82" },
  { name: "South Sudan (+211)", code: "+211" },
  { name: "Spain (+34)", code: "+34" },
  { name: "Sri Lanka (+94)", code: "+94" },
  { name: "Sudan (+249)", code: "+249" },
  { name: "Suriname (+597)", code: "+597" },
  { name: "Sweden (+46)", code: "+46" },
  { name: "Switzerland (+41)", code: "+41" },
  { name: "Syria (+963)", code: "+963" },
  { name: "Taiwan (+886)", code: "+886" },
  { name: "Tajikistan (+992)", code: "+992" },
  { name: "Tanzania (+255)", code: "+255" },
  { name: "Thailand (+66)", code: "+66" },
  { name: "Timor-Leste (+670)", code: "+670" },
  { name: "Togo (+228)", code: "+228" },
  { name: "Tonga (+676)", code: "+676" },
  { name: "Trinidad and Tobago (+1-868)", code: "+1-868" },
  { name: "Tunisia (+216)", code: "+216" },
  { name: "Turkey (+90)", code: "+90" },
  { name: "Turkmenistan (+993)", code: "+993" },
  { name: "Tuvalu (+688)", code: "+688" },
  { name: "Uganda (+256)", code: "+256" },
  { name: "Ukraine (+380)", code: "+380" },
  { name: "United Arab Emirates (+971)", code: "+971" },
  { name: "United Kingdom (+44)", code: "+44" },
  { name: "United States (+1)", code: "+1" },
  { name: "Uruguay (+598)", code: "+598" },
  { name: "Uzbekistan (+998)", code: "+998" },
  { name: "Vanuatu (+678)", code: "+678" },
  { name: "Vatican City (+39)", code: "+39" },
  { name: "Venezuela (+58)", code: "+58" },
  { name: "Vietnam (+84)", code: "+84" },
  { name: "Yemen (+967)", code: "+967" },
  { name: "Zambia (+260)", code: "+260" },
  { name: "Zimbabwe (+263)", code: "+263" }
];

document.addEventListener("DOMContentLoaded", function() {
  const countryCodeSelect = document.getElementById("countryCode");
  const countryCodeDisplay = document.getElementById("countryCodeDisplay");
  if (countryCodeSelect && countryCodeDisplay) {
    countryCodes.forEach(function(country) {
      const option = document.createElement("option");
      option.value = country.code;
      option.textContent = country.name + " " + country.code;
      countryCodeSelect.appendChild(option);
    });
    
    countryCodeSelect.value = "+1"; // Default to United States
    countryCodeDisplay.textContent = countryCodeSelect.value;
    countryCodeSelect.addEventListener("change", function() {
      countryCodeDisplay.textContent = countryCodeSelect.value;
    });
  }
});
// ...existing code...
// Password visibility toggle
document.querySelectorAll('.toggle-password-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const input = this.parentElement.querySelector('input');
        const icon = this.querySelector('i');
        if (input.type === 'password') {
            input.type = 'text';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        } else {
            input.type = 'password';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        }
    });
});

// Registration form logic
const registerForm = document.getElementById('registerForm');

const overlay = document.querySelector('.register-overlay');
const errorDisplay = document.getElementById('errorDisplay');
const errorMessage = document.getElementById('errorMessage');

registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Get values
    const name = registerForm.name.value.trim();
    const phone = registerForm.phone.value.trim();
    const dob = registerForm.dob.value;
    const email = registerForm.email.value.trim();
    const confirmEmail = registerForm.confirmEmail.value.trim();
    const address = registerForm.address.value.trim();
    const password = registerForm.password.value;
    const confirmPassword = registerForm.confirmPassword.value;
    const terms = registerForm.terms.checked;

    // Validation
    if (!name || !phone || !dob || !email || !confirmEmail || !address || !password || !confirmPassword) {
        showError('Please fill in all fields.');
        return;
    }
    if (!/^\d{10,15}$/.test(phone)) {
        showError('Please enter a valid phone number (10-15 digits).');
        return;
    }
    if (email !== confirmEmail) {
        showError('Email addresses do not match.');
        return;
    }
    if (password.length < 6) {
        showError('Password must be at least 6 characters.');
        return;
    }
    if (password !== confirmPassword) {
        showError('Passwords do not match.');
        return;
    }
    if (!terms) {
        showError('You must agree to the Terms & Conditions.');
        return;
    }

    // Show loading overlay
    overlay.style.display = 'flex';

    // Check if email is already used in Firebase
    firebase.auth().fetchSignInMethodsForEmail(email)
        .then((methods) => {
            if (methods && methods.length > 0) {
                overlay.style.display = 'none';
                showError('This email is already registered. Please use another email.');
                return Promise.reject('Email already in use');
            }
            // Proceed with registration
            return firebase.auth().createUserWithEmailAndPassword(email, password);
        })
        .then((userCredential) => {
            // Save extra info to Firestore
            return firebase.firestore().collection('users').doc(userCredential.user.uid).set({
                name,
                phone,
                dob,
                address,
                email,
                createdAt: new Date().toISOString()
            });
        })
        .then(() => {
            // Set login mode and user info in localStorage for consistency
            const userInfo = {
                name,
                email,
                phone,
                dob,
                address,
                initials: name ? name.split(' ').map(n => n[0]).join('').toUpperCase() : (email[0] || '').toUpperCase(),
                lastLogin: new Date().toISOString()
            };
            const authState = {
                isLoggedIn: true,
                lastLogin: new Date().toISOString(),
                userInfo
            };
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
            localStorage.setItem('authState', JSON.stringify(authState));
            sessionStorage.setItem('isLoggedIn', 'true');
            // Redirect to index.html
            window.location.href = 'index.html';
        })
        .catch((error) => {
            if (error !== 'Email already in use') {
                overlay.style.display = 'none';
                showError(error.message || 'Registration failed.');
            }
        });
});

function showError(msg) {
    errorMessage.textContent = msg;
    errorDisplay.style.display = 'flex';
    setTimeout(() => {
        errorDisplay.style.display = 'none';
    }, 3000);
}
