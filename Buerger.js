document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const burger = document.getElementById('burger').value;

    alert(`Order placed!\nName: ${name}\nAddress: ${address}\nBurger: ${burger}`);
});
