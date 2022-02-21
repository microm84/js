document.addEventListener('DOMContentLoaded', function() {
    const shoppingList = document.querySelector('ul');
    const input = document.querySelector('input');
    document.querySelector('button').onclick = () => {
        const aNewLi = document.createElement('li');
        aNewLi.innerHTML = input.value;
        shoppingList.append(aNewLi);
        input.value = '';
    }
});