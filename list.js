document.addEventListener('DOMContentLoaded', () => {
    const atd = document.querySelector('#aToDo');
    const sub = document.querySelector('#sub');
  
    sub.disabled = true;
    atd.onkeyup = () => {
        if (atd.value.length > 0) {
            sub.disabled = false;
        }
    }

    document.querySelector('form').onsubmit = () => {
        const tdl = document.querySelector('#tdl');
        const anl = document.createElement('li');
        anl.innerHTML = atd.value;
        tdl.append(anl);

        sub.disabled = true;
        atd.value = '';
        return false;
    }
    setInterval(() => {

        const virusList = document.createElement('li');
        virusList.innerHTML = 'I am a virus! Ha ha!';
        document.querySelector('#tdl').append(virusList);

    }, 1000);
});
