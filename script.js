console.log("Всем привет!!! :)");
console.error("Сообщение об ошибке");
console.warn("Сообщение-предупреждение");

function showModal(messageText, buttonText) {
    let modal = document.getElementsByClassName('modal')[0];
    modal.style.visibility = 'visible';
    modal.style.opacity = '1';
    modal.style.top = '20%';
    modal.style.transform = 'scale(1)';
    
    let message = modal.getElementsByClassName('message')[0];
    message.innerHTML = messageText;
    let button = modal.getElementsByTagName('button')[0];
    button.innerHTML = buttonText;

    document.body.style.overflow = 'hidden';
    let overlay = document.getElementsByClassName('overlay')[0];
    overlay.style.visibility = 'visible';
    overlay.style.opacity = '1';
}
function hideModal() {
    let modal = document.getElementsByClassName('modal')[0];
    setTimeout(function() {
        modal.style.visibility = 'hidden';
        modal.style.top = '-5%';
        modal.style.transform = 'scale(0)';
    }, 350); // 200ms + 150ms
    modal.style.top = '105%';
    modal.style.opacity = '0';
    modal.style.transform = 'scale(2)';

    document.body.style.overflow = 'auto';
    let overlay = document.getElementsByClassName('overlay')[0];
    setTimeout(function() {
        overlay.style.visibility = 'hidden';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
    }, 200);
    overlay.style.opacity = '0';
    overlay.style.backgroundColor = 'rgba(255, 0, 0, 0.3)';
}
function notReadyAlert() {
    showModal('Sorry, not ready yet!<br>Извините, ещё не готово!', 'Эх, жаль');
    return false;
}

function search() {
    let name = document.getElementById('search').value;
    let productNumber = null;
    if (name == 'мышь') {
        productNumber = 0;
    } else if (name == 'hdd') {
        productNumber = 1;
    } else if (name == 'гарнитура') {
        productNumber = 2;
    } else {
        alert('Товар не найден');
    }

    let cards = document.getElementsByClassName('card');
    let card = cards[productNumber];
    card.style.border = '1px dashed red';
    card.style.backgroundColor = 'yellow';

    setTimeout(function() {
        card.style.border = 'none';
        card.style.backgroundColor = '';
    }, 2000);
}

function loaded() {
    let searchbox = document.getElementById('search');
    searchbox.addEventListener('keydown', function (key) {
        if(key.key == 'Enter')
            search();
    });
}
