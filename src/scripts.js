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
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});