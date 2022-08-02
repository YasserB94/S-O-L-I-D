let cart = new shoppingBasket();
cart.addProduct(new Product("Chair", 25, new Discount("fixed", 10)));
//cart.addProduct(new Product('Chair', 25, new Discount("fixed", -10)));
cart.addProduct(new Product("Table", 50, new Discount("variable", 25)));
cart.addProduct(new Product("Bed", 100, new Discount("none")));
const tableElement = document.querySelector("#cart tbody");
cart.products.forEach((product)=>{
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerText = product.name;
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerText = product.originalPrice.toFixed(2) + " \u20AC";
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerText = product.calculatePrice().toFixed(2) + " \u20AC";
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerText = product.showCalculation();
    tr.appendChild(td);
    tableElement.appendChild(tr);
});

//# sourceMappingURL=index.6bc2c328.js.map
