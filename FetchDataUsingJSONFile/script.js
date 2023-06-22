function FetchProducts() {
  fetch("./data.json")
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Something went wrong @");
      }
    })
    .then(function (data) {
      DisplayProducts(data);
    });
}

function DisplayProducts(products) {
  for (let index = 0; index < products.length; index++) {
    CreateProductItem(products[index]);
  }
}

function CreateProductItem(theProduct) {
  var divProductItem = document.createElement("div");
  divProductItem.style.border = "2px solid grey";
  divProductItem.style.height = "400px";
  divProductItem.style.width = "300px";
  divProductItem.style.padding = "5px";
  divProductItem.style.margin = "10px";

  var imageProductItem = document.createElement("img");
  imageProductItem.src = theProduct.imageUrl;
  imageProductItem.style.height = "200px";
  imageProductItem.style.width = "300px";

  divProductItem.appendChild(imageProductItem);

  var titleProductItem = document.createElement("h2");
  titleProductItem.innerText = theProduct.title;
  divProductItem.appendChild(titleProductItem);

  var priceProductItem = document.createElement("p");
  priceProductItem.innerText = theProduct.price;
  divProductItem.appendChild(priceProductItem);

  var ratingProductItem = document.createElement("p");
  ratingProductItem.innerText = theProduct.rating;
  divProductItem.appendChild(ratingProductItem);

  //   var ratingItem = document.createElement("i");
  //   ratingItem.className = "fa-star fa-solid";

  //   for (let index = 0; index < theProduct.rating.length(); index++) {
  var ratingItem = document.createElement("i");
  ratingItem.className = "fa-star fa-solid";
  //   }

  var spanRating = document.createElement("span");
  spanRating.style.fontSize = "1.5em";
  spanRating.style.color = "orange";

  spanRating.appendChild(ratingItem);

  divProductItem.appendChild(spanRating);

  var likesProductItem = document.createElement("button");
  likesProductItem.innerText = theProduct.likes;
  likesProductItem.addEventListener("click", function () {
    // theProduct.likes += 1;
    likesProductItem.innerText = ++theProduct.likes;
  });
  divProductItem.appendChild(likesProductItem);

  var divWrapper = document.getElementById("wrapper");
  divWrapper.appendChild(divProductItem);
}

window.addEventListener("DOMContentLoaded", FetchProducts);
