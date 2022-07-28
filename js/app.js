$(document).ready(function () {
  $(".fa-bars").click(function () {
    $("header nav").addClass("mob-view");
  });

  $(".fa-times").click(function () {
    $("header nav").removeClass("mob-view");
  });

  let increaseBtns = $(".inc-quantity");
  let decreaseBtns = $(".dec-quantity");


  increaseBtns.each(function () {
    $(this).click(() => {
        let index = increaseBtns.index($(this))
        let quantityElement = $('.product-quantity-el')[index]
        let quantity = parseInt(quantityElement.innerHTML) + 1;
        quantityElement.innerHTML = quantity;
        });
  });

  decreaseBtns.each(function () {
    $(this).click(() => {
        let index = decreaseBtns.index($(this))
        let quantityElement = $('.product-quantity-el')[index]
        let quantity = parseInt(quantityElement.innerHTML) - 1;

        if(quantity <= 0) return
        quantityElement.innerHTML = quantity;
        });
  });
});

/*const productName = document.querySelectorAll(".product-title");
const productPrice = document.querySelectorAll(".product-price");
const addToCartBtn = document.querySelectorAll(".addProd");

let cartProducts = [];

if (localStorage.getItem("myCart") !== null) {
  cartProducts.push(JSON.parse(localStorage.getItem("myCart")));
}

console.log(cartProducts.length);

addToCartBtn.forEach((a) => {
  a.addEventListener("click", (b) => {
    const index = [...addToCartBtn].indexOf(b.target);
    let product = {
      name: productName[index].innerHTML,
      price: productPrice[index].innerHTML,
    };

    cartProducts.push(product);

    //console.log(JSON.stringify(cartProducts));

    localStorage.setItem("myCart", JSON.stringify(cartProducts));
  });
});
*/