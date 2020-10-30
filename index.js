import { FetchJobs } from "./Fetch_Job";

const jobSearch = new FetchJobs('#search-form', '.cards');
jobSearch.setCountryCode();
jobSearch.GetForm();

//Dark mode
const icon = document.querySelector('.fa-adjust');
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        icon.style.transform = 'rotate(180deg)';
        icon.style.color = '#202020';
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        icon.style.transform = 'rotate(-180deg)';
        icon.style.color = '#fff';
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);