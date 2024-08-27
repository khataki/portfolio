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
    fetch(`./lang/${lang}.json`)
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
            // Добавьте сюда обновление других элементов, если необходимо
        });
}

// Установить язык по умолчанию (например, русский)
const savedLanguage = localStorage.getItem('language') || 'ru';
setLanguage(savedLanguage);