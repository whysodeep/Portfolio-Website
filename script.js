const projects = document.querySelectorAll('.project');
let currentIndex = 0;

function showProject(index) {
    projects.forEach((project, i) => {
        project.style.display = i === index ? 'block' : 'none';
    });
}

showProject(currentIndex);

document.getElementById('prevButton').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    showProject(currentIndex);
});

document.getElementById('nextButton').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % projects.length;
    showProject(currentIndex);
});