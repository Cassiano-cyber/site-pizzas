let cart = [];
let total = 0;

// Função para atualizar o carrinho
function updateCart() {
    const cartList = document.getElementById("cart");
    cartList.innerHTML = '';  // Limpar a lista de itens no carrinho

    // Iterar pelos itens do carrinho e adicionar cada um à lista
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
        
        // Criar o botão de lixeira
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '🗑️';
        deleteButton.classList.add('delete-item');
        deleteButton.addEventListener('click', () => removeItem(index));

        // Adicionar a lixeira ao item
        li.appendChild(deleteButton);
        
        // Adicionar o item à lista
        cartList.appendChild(li);
    });

    // Atualizar o total
    document.getElementById("total").textContent = total.toFixed(2);
}

// Função para adicionar item ao carrinho
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));

        // Adiciona o item no carrinho
        cart.push({ name, price });
        total += price;

        // Atualiza a lista de itens no carrinho
        updateCart();
    });
});

// Função para remover item do carrinho
function removeItem(index) {
    // Remove o item pelo índice
    total -= cart[index].price;
    cart.splice(index, 1);

    // Atualiza o carrinho e o total
    updateCart();
}

// Finalizar o pedido
document.getElementById('checkoutButton').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Carrinho vazio! Adicione itens ao carrinho.');
        return;
    }

    let orderDetails = `Pedido:\n`;
    cart.forEach(item => {
        orderDetails += `- ${item.name} - R$ ${item.price.toFixed(2)}\n`;
    });
    orderDetails += `\nTotal: R$ ${total.toFixed(2)}`;

    // Substitua pelo número do seu WhatsApp
    const phoneNumber = '+5517996780618'; 
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(orderDetails)}`;

    window.open(whatsappUrl, '_blank');
});

// Função para criar as bolinhas dos fogos de artifício
function createFireworkParticle() {
  const particle = document.createElement('div');
  particle.classList.add('firework-particle');
  particle.style.top = `${Math.random() * 100}%`;
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.backgroundColor = `hsl(${Math.random() * 360}, 50%, 50%)`;
  particle.style.animationDelay = `${Math.random() * 2}s`;
  return particle;
}

// Função para criar os fogos de artifício
function createFireworks() {
  const container = document.querySelector('.fireworks-container');
  for (let i = 0; i < 10; i++) {
    const particle = createFireworkParticle();
    container.appendChild(particle);
  }
}

// Chama a função para criar os fogos de artifício quando a página carregar
window.onload = createFireworks;
