let products = [];

let cartItems = JSON.parse(localStorage.getItem("cartData")) || [];

async function showProduct() {

    const productList = document.getElementById("product-list");

    try {

        const response = await fetch(
            "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json"
        );

        products = await response.json();

        productList.innerHTML = "";

        products.forEach((p) => {

            productList.innerHTML += `

            <div class="col-md-4 mb-4">

                <div class="card h-100 shadow">

                    <img src="${p.image}" class="card-img-top" height="250">

                    <div class="card-body text-center">

                        <h5>${p.name}</h5>

                        <h4>₹${(p.priceCents / 100).toFixed(2)}</h4>

                        <button class="btn btn-primary"
                        onclick="addToCart('${p.id}')">

                        Add To Cart

                        </button>

                    </div>

                </div>

            </div>

            `;
        });

    }

    catch (error) {

        console.log(error);

    }

}

showProduct();

function addToCart(id) {

  try {

    let product = cartItems.find(item => item.id == id);

    console.log("Product Added to Cart");

    if (product) {

        product.qty++;

    }

    else {

        product = products.find(item => item.id == id);

        cartItems.push({...product, qty: 1})

    }

    alert("Product Added Successfully");

    updateLatestData();

    console.log("Product Added to Cart:", cartItems);

  }
catch (error) {

    console.log("Error")
  };

  
const update = ()=> {

  localStorage.setItem("cartData", JSON.stringify(cartItems));

}


}

function showModal() {

    let modal = new bootstrap.Modal(document.getElementById("cartList"));

    modal.show();

    updateLatestData();

}

function updateLatestData() {

  try {

    let table = document.getElementById("cartTable");


    table.innerHTML = "";



    cartItems.forEach((p) => {


        table.innerHTML += `

        <tr>

      <td>${p.id}</td>
      <td><img src="${p.image}" class="img-fluid" height="40px" width="35px"/></td>
    <td>${p.name}</td>
        <td>${p.priceCents}</td>
              <td>${p.qty}</td>

        <div class= "d-flex gap-2 align-item-center justify-contact-center">
        
        
        
        </div>      

      </tr>
    
      `
    })

    }catch(error){

      console.log(error)
    }


}

// function removeItem(index) {

//     cartItems.splice(index, 1);

//     localStorage.setItem("cartData", JSON.stringify(cartItems));

//     updateLatestData();

// }

// function checkOut() {

//     if (cartItems.length == 0) {

//         alert("Cart is Empty");

//         return;

//     }

//     alert("Order Placed Successfully");

//     cartItems = [];

//     localStorage.setItem("cartData", JSON.stringify(cartItems));

//     updateLatestData();

// }
