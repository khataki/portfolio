document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded and ready');

    function toggleDescription(element) {
        const description = element.querySelector('.description');
        if (description.classList.contains('max-h-0')) {
            description.classList.remove('max-h-0', 'opacity-0');
            description.classList.add('max-h-full', 'opacity-100');
        } else {
            description.classList.remove('max-h-full', 'opacity-100');
            description.classList.add('max-h-0', 'opacity-0');
        }
    }

    const projectBlocks = document.querySelectorAll('.project-block');
    projectBlocks.forEach(block => {
        block.addEventListener('click', function () {
            toggleDescription(this);
        });
    });


const links = document.querySelectorAll('a');

links.forEach(link => {
    link.setAttribute('target', '_blank');
});
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function setLanguage(lang) {
    fetch(`src/lang/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('greeting').textContent = data.greeting;
            document.getElementById('description').textContent = data.description;
            document.getElementById('view_portfolio').textContent = data.view_portfolio;
            document.getElementById('about_me_title').textContent = data.about_me_title;
            document.getElementById('about_me_intro').textContent = data.about_me_intro;
            document.getElementById('about_me_backend').textContent = data.about_me_backend;
            document.getElementById('about_me_design').textContent = data.about_me_design;
            document.getElementById('about_me_conclusion').textContent = data.about_me_conclusion;
            document.getElementById('skills_title').textContent = data.skills_title;
            document.getElementById('frontend_title').textContent = data.frontend_title;
            document.getElementById('html_css_js').textContent = data.frontend_skills.html_css_js;
            document.getElementById('react_ts').textContent = data.frontend_skills.react_ts;
            document.getElementById('tailwind').textContent = data.frontend_skills.tailwind;
            document.getElementById('backend_title').textContent = data.backend_title;
            document.getElementById('node_express').textContent = data.backend_skills.node_express;
            document.getElementById('rest_api').textContent = data.backend_skills.rest_api;
            document.getElementById('design_title').textContent = data.design_title;
            document.getElementById('figma_adobe').textContent = data.design_skills.figma_adobe;
            document.getElementById('blender').textContent = data.design_skills.blender;
            // Для проекта "Оптовый магазин одежды МАХИС"
            document.querySelector('h3.project-maxis-title').textContent = data["project_title_maxis"];
            document.querySelector('.description.project-maxis-role p:first-child').innerHTML = data["role"];
            const maxisDescriptionList = document.querySelector('.description.project-maxis ul');
            maxisDescriptionList.innerHTML = data["description-project-maxis"]
                .map(item => `<li class="mb-2">${item}</li>`)
                .join('');

            // Для проекта "CodingTimer"
            document.querySelector('#project_title_timer').textContent = data["project_title_timer"];
            document.querySelector('#description_project_timer').innerHTML = `<span class="font-semibold">${data["functionality_title_timer"]}</span> ${data["description_project_timer"]}`;
            const functionalityList = document.querySelector('#functionality_list_timer');
            functionalityList.innerHTML = data["functionality_list_timer"]
                .map(item => `<li class="mb-2">${item}</li>`)
                .join('');
            document.querySelector('#future_plans_timer').textContent = data["future_plans_timer"];
            document.querySelector('#future_plans_description_timer').textContent = data["future_plans_description_timer"];
            document.querySelector('#technologies_title_timer').textContent = data["technologies_title_timer"];
            document.querySelector('#technologies_list_timer').textContent = data["technologies_list_timer"];
        });
            // Добавьте сюда обновление других элементов, если необходимо
}

// Установить язык по умолчанию (например, русский)
const savedLanguage = localStorage.getItem('language') || 'ru';
setLanguage(savedLanguage);

const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

themeToggleBtn.addEventListener('click', () => {
  if (htmlElement.classList.contains('dark')) {
    console.log('Switching to light theme');
    htmlElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
  } else {
    console.log('Switching to dark theme');
    htmlElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    sunIcon.classList.remove('hidden');
    moonIcon.classList.add('hidden');
  }
});

// Установка темы при загрузке страницы
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
  htmlElement.classList.add('dark');
  sunIcon.classList.remove('hidden');
  moonIcon.classList.add('hidden');
} else {
  htmlElement.classList.remove('dark');
  sunIcon.classList.add('hidden');
  moonIcon.classList.remove('hidden');
}

