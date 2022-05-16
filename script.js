let products = [
    {image: 'mouse1.jpg', name: 'Мышь обычная', price: 500, info: 'Есть все клавиши! Снизу светится!'},
    {image: 'hdd.jpg', name: 'HDD 2 Tb', price: 15000, info: 'Очень большая ёмкость, советуем!'},
    {image: 'earph1.jpg', name: 'Гарнитура', price: 3700, info: 'На голове сидит как влитая!'},
];

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
function notReadyAlert(event) {
    showModal('Sorry, not ready yet!<br>Извините, ещё не готово!', 'Эх, жаль');
    event.preventDefault();
    return false;
}

function search() {
    let cards = document.getElementsByClassName('card');
    let name = document.getElementById('search').value;
    let nameRegExp = new RegExp(name, 'i');
    for(let i = 0; i<products.length; i++) {
        let product = products[i];
        if(nameRegExp.test(product.name)) {
            let card = cards[i];
            card.style.border = '1px dashed red';
            card.style.backgroundColor = 'yellow';
            
            setTimeout(function() {
                card.style.border = 'none';
                card.style.backgroundColor = '';
            }, 2000);
        }
    }
}

function generateMenu() {
    let menu = document.querySelector('nav.main-menu ul');
    menu.innerHTML = '';

    let items = [
        {href: 'index.html', text: 'Товары'},
        {href: '', text: 'Контакты'},
        {href: '', text: 'Доставка'},
        {href: '', text: 'Акции'},
        {href: 'about-us.html', text: 'О нас'},
    ];

    for(let i = 0; i<items.length; i++) {
        let link = document.createElement('a');
        link.innerText = items[i].text;
        link.href = items[i].href;
        if(items[i].href == '') {
            link.addEventListener('click', notReadyAlert);
        }
        
        let menuItem = document.createElement('li');
        menuItem.appendChild(link);

        menu.appendChild(menuItem);
    }
}

function showProductInfo(product) {
    showModal(`
        <div><img src="${product.image}"></div>
        <div>${product.name}</div>
        <div>${product.price} &#8381;</div>
        <div><i>${product.info}</i></div>
    `, 'Закрыть');
}

function generateCards() {
    let main = document.querySelector('main');
    for(let product of products) {
        let cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        cardDiv.innerHTML = `
            <a href="#">
                <div class="image"><img src="${product.image}"></div>
                <div class="product-name">${product.name}</div>
                <div class="price">${product.price} &#8381;</div>
            </a>
        `;
        cardDiv.querySelector('a').addEventListener('click', function() {
            showProductInfo(product);
        });
        main.append(cardDiv);
    }
}

function loaded() {
    let searchbox = document.getElementById('search');
    searchbox.addEventListener('keydown', function (key) {
        if(key.key == 'Enter')
            search();
    });

    generateMenu();
    generateCards();
}
