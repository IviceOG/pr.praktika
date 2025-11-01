function toggleMenu() {
    const menu = document.getElementById('mainMenu');
    if (menu) menu.classList.toggle('active');
}

function toggleFaq(element) {
    if (!element) return;
    element.classList.toggle('active');
}

function handleSubmit(event) {
    event.preventDefault();
    alert('Спасибо за обращение! Ваше сообщение принято и будет рассмотрено в ближайшее время.');
    if (event.target && typeof event.target.reset === 'function') {
        event.target.reset();
    }
    return false;
}




