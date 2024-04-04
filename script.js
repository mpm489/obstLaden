let fruits = [
    {
        "amount": [],
        "img": ["img/apple.jpg", "img/green.jpg", "img/apples.jpg", "img/apples2.jpg",],
        "name": ["Gala", "Granny Smith", "Red Delicious", "Braeburn"],
        "description": [
            "Rot, saftig, knackig, verlockend frisch",
            "Beliebt für Kochen und Snacks",
            "Saftig, mit knackigem Fruchtfleisch",
            "Gut für den frischen Verzehr und das Kochen",

        ],
        "price": [2.90, 3.90, 4.90, 3.60,],
        "gram": [
            "100 gr: 0.29€",
            "100 gr: 0.39€",
            "100 gr: 0.49€",
            "100 gr: 0.36€"]
    },
    {
        "amount": [],
        "img": ["img/pear.jpg", "img/pears.jpg", "img/pears2.jpg", "img/pear2.jpg"],
        "name": ["Conference", "Williams Christ", "Bartlett", "Comice"],
        "description": [
            "Ihr beliebtes Tafelobst",
            "Diese süße, saftige",
            "Gut für den Frischverzehr",
            "Ihr delikates Aroma",

        ],
        "price": [1.90, 2.40, 1.90, 3.20,],
        "gram": [
            "100 gr: 0.19€",
            "100 gr: 0.24€",
            "100 gr: 0.19€",
            "100 gr: 0.32€"]
    },

    {
        "amount": [],
        "img": ["img/zwetschge.jpg", "img/mirabelle.jpg", "img/reneklode.jpg", "img/gzar.jpg"],
        "name": ["Zwetschge", "Mirabelle", "Reneklode", "Gzar"],
        "description": [
            "Beliebt für frischen Verzehr",
            "Diese süße, saftige",
            "Herstellung von Konserven und Desserts",
            "Diese süße, saftige",

        ],
        "price": [1.90, 2.40, 1.90, 3.20,],
        "gram": [
            "100 gr: 0.19€",
            "100 gr: 0.24€",
            "100 gr: 0.19€",
            "100 gr: 0.32€"]
    },
    
    
];
let shoppingCart = {};




function rendern() {
    let content = document.getElementById('food-container-all');
    content.innerHTML = '';
    for (let i = 0; i < fruits.length; i++) {
        const fruit = fruits[i];
        for (let j = 0; j < fruit.img.length; j++) {
            content.innerHTML += `
                <div class="food-container">
                    <img src="${fruit.img[j]}" alt="">
                    <div class="fruits-text">
                        <h2>${fruit.name[j]}</h2>
                        <span>${fruit.description[j]}</span>
                        <div>
                            <h3>${fruit.price[j]}</h3>
                            <span style="color: gray;">${fruit.gram[j]}</span>
                        </div>
                    </div>
                    <div class="plus" onclick="addToBasket(${i}, ${j})" ></div>
                </div>
            `;
        }
    }
}


function apples() {
    document.getElementById('food-container-plum').style.display = 'none'; // Zeige mir den Plaumen-Behälter
    document.getElementById('food-container-all').style.display = 'none'; // Verstecke den allgemeinen Behälter
    document.getElementById('food-container-pear').style.display = 'none'; // Verstecke den Birnen-Behälter
    document.getElementById('food-container-apple').style.display = 'block'; // Zeige nur den Apfel-Behälter
    let content = document.getElementById('food-container-apple');
    content.innerHTML = '';

    let appleFruit = fruits[0];

    for (let i = 0; i < appleFruit.name.length; i++) {

        content.innerHTML += `
                <div class="food-container">
                    <img src="${appleFruit.img[i]}" alt="">
                    <div class="fruits-text">
                        <h2>${appleFruit.name[i]}</h2>
                        <span>${appleFruit.description[i]}</span>
                        <div>
                            <h3>${appleFruit.price[i]}</h3>
                            <span style="color: gray;">${appleFruit.gram[i]}</span>
                        </div>
                    </div>
                    <div class="plus" onclick="addToBasket(0, ${i})" ></div>
                </div>`
            ;
    }

}

function pears() {
    document.getElementById('food-container-plum').style.display = 'none'; // Zeige mir den Plaumen-Behälter
    document.getElementById('food-container-all').style.display = 'none'; // Verstecke den allgemeinen Behälter
    document.getElementById('food-container-apple').style.display = 'none'; // Zeige nur den Apfel-Behälter
    document.getElementById('food-container-pear').style.display = 'block'; // Zeige nur den Birnen-Behälter
    let content = document.getElementById('food-container-pear');
    content.innerHTML = '';

    let pearFruit = fruits[1];

    for (let i = 0; i < pearFruit.name.length; i++) {

        content.innerHTML += `
                <div class="food-container">
                    <img src="${pearFruit.img[i]}" alt="">
                    <div class="fruits-text">
                        <h2>${pearFruit.name[i]}</h2>
                        <span>${pearFruit.description[i]}</span>
                        <div>
                            <h3>${pearFruit.price[i]}</h3>
                            <span style="color: gray;">${pearFruit.gram[i]}</span>
                        </div>
                    </div>
                    <div class="plus" onclick="addToBasket(0, ${i})" ></div>
                </div>`
            ;
    }

}

function plum() {
    document.getElementById('food-container-all').style.display = 'none'; // Verstecke den allgemeinen Behälter
    document.getElementById('food-container-apple').style.display = 'none'; // Verstecke den Apfel-Behälter
    document.getElementById('food-container-pear').style.display = 'none'; // Verstecke den Birnen-Behälter
    document.getElementById('food-container-plum').style.display = 'block'; // Zeige mir den Plaumen-Behälter

    let content = document.getElementById('food-container-plum');
    content.innerHTML = '';

    let plumFruit = fruits[2];

    for (let i = 0; i < plumFruit.name.length; i++) {

        content.innerHTML += `
                <div class="food-container">
                    <img src="${plumFruit.img[i]}" alt="">
                    <div class="fruits-text">
                        <h2>${plumFruit.name[i]}</h2>
                        <span>${plumFruit.description[i]}</span>
                        <div>
                            <h3>${plumFruit.price[i]}</h3>
                            <span style="color: gray;">${plumFruit.gram[i]}</span>
                        </div>
                    </div>
                    <div class="plus" onclick="addToBasket(0, ${i})" ></div>
                </div>`
            ;
    }

}


function allFruits() {
    document.getElementById('food-container-all').style.display = 'block';
    document.getElementById('food-container-apple').style.display = 'none';
}

function addToBasket(i, j) {
    let selectedFruit = fruits[i];

    // Überprüfen Sie, ob der Fruchttyp bereits im Warenkorb ist
    if (!shoppingCart[selectedFruit.name[j]]) {
        shoppingCart[selectedFruit.name[j]] = {
            amount: 0,
            price: selectedFruit.price[j]
        };
    }

    shoppingCart[selectedFruit.name[j]].amount++;

    updateBasketDisplay();
}


function updateBasketDisplay() {
    document.getElementById('btn').style.display = 'block';
    document.getElementById('basket').style.display = 'none';
    let artikel = document.getElementById('add-to-basket'); 
    artikel.innerHTML = '';

    for (itemName in shoppingCart){
        if(shoppingCart.hasOwnProperty(itemName)){
         artikel.innerHTML += `
            <div >
                <div class="span-margin border-bottom "  id="basket-item-${itemName}">
                    <div class="basket" >
                        <div><span>${shoppingCart[itemName].amount}</span></div>
                        <div> <span> ${itemName}</span></div>
                        <div><span>${(shoppingCart[itemName].amount * shoppingCart[itemName].price).toFixed(2)}</span></div>
                    </div>
                    <div class="basket-second">
                        <div><img class="trash" onclick="delet('${itemName}')"  src="img/trash.png"></div>
                        <div class="basket-plus" onclick="increaseQuantity('${itemName}')"></div>
                        <div class="basket-minus" onclick="decreaseQuantity('${itemName}')"></div>
                    </div> 
                </div>  
            </div>
            
        `;
        }
    }
    totalSum();
}


function increaseQuantity(itemName) {
    shoppingCart[itemName].amount++;
    updateBasketDisplay();
}

function decreaseQuantity(itemName) {
    if (shoppingCart[itemName].amount > 1) {
        shoppingCart[itemName].amount--;
        updateBasketDisplay();
    }
}

function delet(itemName) {
    updateBasketDisplay();
    
    delete shoppingCart[itemName];

    let basketIsEmpty = Object.keys(shoppingCart).length === 0;

    if (basketIsEmpty) {
        document.getElementById('btn').style.display = 'none';
        document.getElementById(`basket-item-${itemName}`).style.display = 'none';
        document.getElementById('basket').style.display = 'block';
    } 
    
}

function totalSum() {
    let zwSumme = 0;
    let lieferKosten = 4.90;

    for (itemName in shoppingCart) {
        if (shoppingCart.hasOwnProperty(itemName)) {
            let itemTotal = shoppingCart[itemName].amount * shoppingCart[itemName].price;
            zwSumme += itemTotal;
        }
    }

    // Anzeige der Zwischensumme
    document.getElementById('zwsumme').innerText = ` ${zwSumme.toFixed(2)}€`;

    let totalSum = zwSumme + lieferKosten;

    // Anzeige der Gesamtsumme
    document.getElementById('gesamt').innerText = ` ${totalSum.toFixed(2)}€`;
    document.getElementById('total-sum').innerText = ` Bezahlen (${totalSum.toFixed(2)}€)`;
}


   











          










