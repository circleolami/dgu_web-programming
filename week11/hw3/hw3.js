let totalPrice = 0;
document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", function () {
    let item = this.parentElement;
    let itemName = item.querySelector(".item-name").textContent;
    let itemPrice = parseFloat(item.querySelector(".item-price").textContent);

    let li = document.createElement("li");
    li.textContent = `${itemName} - $${itemPrice.toFixed(2)}`;
    document.getElementById("cart-list").appendChild(li);

    totalPrice += itemPrice;
    document.getElementById("total-price").textContent = totalPrice.toFixed(2);
  });
});
