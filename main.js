// Task 1 is on index.html file

//Task 2 - Add Event Listeners for Product Selection
const priceElement = document.getElementById('price');
const sizeDropdown = document.getElementById('size');
const purchaseButton = document.getElementById('purchase-btn');

sizeDropdown.addEventListener('change', () => {
    const selected = sizeDropdown.options[sizeDropdown.selectedIndex];
    priceElement.textContent = `Price: $${selected.value}`;
});

