document.getElementById("filter-input").addEventListener("input", function () {
  let filterValue = this.value.toLowerCase();
  let products = document.getElementsByClassName("product");

  Array.from(products).forEach(function (product) {
    if (product.textContent.toLowerCase().includes(filterValue)) {
      product.style.display = "";
    } else {
      product.style.display = "none";
    }
  });
});
