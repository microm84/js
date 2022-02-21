if(!localStorage.getItem('buttonColor')){
    localStorage.setItem('buttonColor', 'yellow');
}
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('h1').style.color = localStorage.getItem('buttonColor');
    document.querySelectorAll('button').forEach(button => {
        button.onclick = () => {
            document.querySelector('h1').style.color = button.dataset.color;
            localStorage.setItem('buttonColor', button.dataset.color);
        }
    });
});