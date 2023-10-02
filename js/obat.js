const cart = [];
let total = 0;

function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    total += itemPrice;

    const cartList = document.getElementById('cart');
    const cartItem = document.createElement('li');
    cartItem.textContent = `${itemName}: Rp ${itemPrice}`;
    cartList.appendChild(cartItem);

    const totalElement = document.getElementById('total');
    totalElement.textContent = `Rp ${total}`;
}

function checkout() {
    if (cart.length === 0) {
        alert('Keranjang belanja kosong. Tambahkan item terlebih dahulu.');
        return;
    }

    const apotik = prompt('Masukkan nama apotik tempat pengambilan obat:');
    if (apotik) {
        alert(`Pesanan Anda telah berhasil. Silakan ambil pesanan di apotik ${apotik}.`);
        cart.length = 0;
        total = 0;
        updateCartDisplay();
    } else {
        alert('Silakan masukkan nama apotik tempat pengambilan obat.');
    }
}

function updateCartDisplay() {
    const cartList = document.getElementById('cart');
    while (cartList.firstChild) {
        cartList.removeChild(cartList.firstChild);
    }

    const totalElement = document.getElementById('total');
    totalElement.textContent = `Rp ${total}`;
}


