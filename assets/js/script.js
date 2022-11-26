// ==================================
// 1. Toggle humbugger menu;
// By default, the .link tag should
// display none.
// =================================
const link = document.querySelector(".link");
const hamburger = document.querySelector(".hamburger");

link.style.display = "none";

const toggle = () => {
  if (link.style.display == "none") {
    link.style.display = "block";
  } else {
    link.style.display = "none";
  }
};

hamburger.addEventListener("click", toggle);
window.addEventListener("click", function (e) {
  if (link.contains(e.target) || hamburger.contains(e.target)) {
    // Clicked in box
  } else {
    // Clicked outside the box
    link.style.display = "none";
  }
});
// ==================================
// 2. Display products based on
// All, Men or Female categories.
// ==================================

// ==================================
// 2. Display products based on
// search keywords in the input fields.
// ==================================
const productList = document.getElementById("card_row");

const products = document.querySelectorAll(".percard.catalogue");

const search = document.getElementById("search_product");

search.addEventListener("input", (e) => {
  let { value } = e.target;

  value = value.toUpperCase();

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    product.style.display = "none";
    const name = product.children[0].children[2].textContent.toUpperCase();
    const price = product.children[0].children[3].children[0].textContent.toUpperCase();
    
    if (name.includes(value) || price.includes(value)) {
      product.style.display = "block";
    }else{
      productList.innerHTML = "This product does not exist";
      productList.style.fontSize = '30px';
    }
  }
});
