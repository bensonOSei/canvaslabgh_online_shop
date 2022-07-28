$(document).ready(function () {
  const productName = $(".product-title");
  const productPrice = $(".product-price");
  const productImage = $(".card-image img");
  const addToCartBtn = $(".addProd");

  const displayProductTitle = $(".product-title h4");
  const displayProductImage = $(".product-image img");
  const displayPrice = $(".product-price");

  let cartProducts = [];
  let storedProducts = localStorage.getItem("myCart");
  let selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"))

  populateProductPage(selectedProduct.image,selectedProduct.name,selectedProduct.price)

    console.log(selectedProduct);

  if (cartProducts == "") {
    $(".cart-number").hide();
  }

  if (storedProducts !== null) {
    cartProducts = JSON.parse(storedProducts);
    $(".cartQuantity").text(cartProducts.length);
    $(".cart-number").show();

     for (const productData of cartProducts) {
       //console.log(productData);
       createCartProduct(productData.name,productData.image,productData.price)
     }
  }

  console.log(cartProducts);
    
  $('#remove-all').click(()=>{
    localStorage.removeItem('myCart')
    window.location.href = './cart.html'
  })
  addToCartBtn.each(function () {
    $(this).click(() => {
      let index = addToCartBtn.index($(this));
      let product = {
        name: productName[index].innerHTML,
        price: productPrice[index].innerHTML,
        image: productImage[index].src,
      };
      
      localStorage.setItem('selectedProduct',JSON.stringify(product))
      cartProducts.push(product);
      localStorage.setItem("myCart", JSON.stringify(cartProducts));
    });
  });

  function createCartProduct(productTitle, productImageSource, productPrice) {
    const mainContainer = $(".cart-container");
    let container = document.createDocumentFragment();

    let divCartProduct = document.createElement("div");
    $(divCartProduct).addClass("cart-product");

    let productImageDiv = document.createElement("div");
    $(productImageDiv)
      .addClass("product-image")
      .append(`<img src="${productImageSource}" alt="product image">`);
    $(divCartProduct).append(productImageDiv);

    let productTitleDiv = document.createElement("div");
    $(productTitleDiv).addClass("product-title");
    $(productTitleDiv).append(`<h4 class = "m-header">${productTitle}</h4>`);
    $(divCartProduct).append(productTitleDiv);

    let productPriceContianer = document.createElement("p");
    $(productPriceContianer)
      .text("GHS")
      .append(`<span class="product-price" >${productPrice}</span>`);
    $(divCartProduct).append(productPriceContianer);

    let productQuantityDiv = document.createElement("div");
    $(productQuantityDiv).addClass("product-quantity");
    $(productQuantityDiv).append(
      '<button id="dec-quantity" class="dec-quantity fw-heavy small-btn">-</button>'
    );
    $(productQuantityDiv).append(
      '<p class="fs-xl product-quantity-el" id="product-quantity" >1</p>'
    );
    $(productQuantityDiv).append(
      '<button id="inc-quantity" class="inc-quantity fw-heavy small-btn">+</button>'
    );
    $(divCartProduct).append(productQuantityDiv);

    $(divCartProduct).append(
      '<i class="fa-solid fa-trash-can removeProduct"></i>'
    );

    container.append(divCartProduct);
    mainContainer.prepend(container);

  }

  function populateProductPage(imgSrc,productTile,productPrice){
    $(".product-image img").attr('src',imgSrc)
    $("#product-title").text(productTile)
    $("#product-price").text(productPrice)
  }
});

