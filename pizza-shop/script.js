// Liste des pizzas (exemple)
const pizzas = [
    {
        id: 1,
        name: "Margherita",
        desc: "Sauce tomate, mozzarella, basilic frais.",
        price: 8,
        img: "https://images.pexels.com/photos/4109126/pexels-photo-4109126.jpeg?auto=compress&w=400&h=400"
    },
    {
        id: 2,
        name: "Reine",
        desc: "Jambon, champignons, mozzarella, olives.",
        price: 10,
        img: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&w=400&h=400"
    },
    {
        id: 3,
        name: "4 Fromages",
        desc: "Mozzarella, gorgonzola, chèvre, emmental.",
        price: 11,
        img: "https://images.pexels.com/photos/1435906/pexels-photo-1435906.jpeg?auto=compress&w=400&h=400"
    },
    {
        id: 4,
        name: "Pepperoni",
        desc: "Sauce tomate, mozzarella, pepperoni.",
        price: 12,
        img: "https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&w=400&h=400"
    }
];

const pizzaList = document.querySelector('.pizza-list');
const cartList = document.querySelector('.cart-list');
const cartTotal = document.getElementById('cart-total');
const orderBtn = document.querySelector('.order-btn');

let cart = [];

function renderPizzas() {
    pizzaList.innerHTML = '';
    pizzas.forEach(pizza => {
        const card = document.createElement('div');
        card.className = 'pizza-card';
        card.innerHTML = `
            <img src="${pizza.img}" alt="${pizza.name}">
            <h3>${pizza.name}</h3>
            <p>${pizza.desc}</p>
            <div class="price">${pizza.price} €</div>
            <button onclick="addToCart(${pizza.id})">Ajouter au panier</button>
        `;
        pizzaList.appendChild(card);
    });
}

function renderCart() {
    cartList.innerHTML = '';
    if (cart.length === 0) {
        cartList.innerHTML = '<p class="empty-cart">Votre panier est vide.</p>';
        cartTotal.textContent = '0 €';
        return;
    }
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.qty;
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="item-info">
                <img src="${item.img}" alt="${item.name}">
                <span class="item-name">${item.name}</span>
                <span class="item-qty">x${item.qty}</span>
            </div>
            <div>
                <span>${item.price * item.qty} €</span>
                <button class="remove-btn" onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i></button>
            </div>
        `;
        cartList.appendChild(cartItem);
    });
    cartTotal.textContent = total + ' €';
}

window.addToCart = function(id) {
    const pizza = pizzas.find(p => p.id === id);
    const found = cart.find(item => item.id === id);
    if (found) {
        found.qty++;
    } else {
        cart.push({ ...pizza, qty: 1 });
    }
    renderCart();
};

window.removeFromCart = function(id) {
    cart = cart.filter(item => item.id !== id);
    renderCart();
};

orderBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Votre panier est vide !');
        return;
    }
    alert('Merci pour votre commande ! (simulation)');
    cart = [];
    renderCart();
});

// Initialisation
renderPizzas();
renderCart(); 