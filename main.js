// Task 1 is on index.html file

//Task 2 - Add Event Listeners for Product Selection
const priceElement = document.getElementById('price');
const sizeDropdown = document.getElementById('size');
const purchase = document.getElementById('purchase');

sizeDropdown.addEventListener('change', () => {
    const selected = sizeDropdown.options[sizeDropdown.selectedIndex];
    priceElement.textContent = `Price: $${selected.value}`;
});

// Task 3 - Handle Stock Availability
// price and handling stock status
sizeDropdown.addEventListener('change', () => {
    const selected = sizeDropdown.options[sizeDropdown.selectedIndex];
    priceElement.textContent = `Price: $${selected.value}`;
    
    // Disable button if the product is out of stock
    if (selected.dataset.stock === 'out') {
        purchaseButton.disabled = true;
        purchaseButton.textContent = 'Out of Stock';
    } else {
        purchaseButton.disabled = false;
        purchaseButton.textContent = 'Purchase Item';
    }
});

// Task 4 - Create a Checkout Event 
purchaseButton.addEventListener('click', () => {
    const selected = sizeDropdown.options[sizeDropdown.selectedIndex];
    if (selected.dataset.stock === 'out') {
        alert('Out of stock.');
    } else {
        alert(`Thank you for purchasing ${selected.text.split(' - ')[0]} size!`);
    }
});

