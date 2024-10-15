function sendMessage(productName) {
    const message = `Olá, gostaria de saber mais sobre o produto: ${productName}`;
    const whatsappNumber = '+5584999596721';
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}
