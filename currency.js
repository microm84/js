document.addEventListener('DOMContentLoaded', () => {
    fetch('https://api.exchangeratesapi.io/latest?base=USD')
    .then(response => response.json())
    .then(data => {
    console.log(data);
    });
});