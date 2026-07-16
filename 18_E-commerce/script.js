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

                        <button
                            class="btn btn-primary"
                            onclick="addToCart('${p.id}')">

                            Add To Cart

                        </button>

                    </div>

                </div>
            </div>
            `;
        });
    } catch (error) {
        console.log(error);
    }
}

showProduct();


function update() {
    localStorage.setItem("cartData", JSON.stringify(cartItems));
}

function addToCart(id) {

    let product = cartItems.find(item => item.id == id);

    if (product) {

        product.qty++;

    } else {

        product = products.find(item => item.id == id);

        cartItems.push({
            ...product,
            qty: 1
        });

    }

    update();

    alert("Product Added Successfully");

    updateLatestData();

}


function increase(id) {

    let product = cartItems.find(item => item.id == id);

    if (product) {

        product.qty++;

    }

    update();

    updateLatestData();

}


function decrease(id) {

    let product = cartItems.find(item => item.id == id);

    if (product) {

        if (product.qty > 1) {

            product.qty--;

        } else {

            cartItems = cartItems.filter(item => item.id != id);

        }

    }

    update();

    updateLatestData();

}

function remove(id) {

    cartItems = cartItems.filter(item => item.id != id);

    update();

    updateLatestData();

}


function showModal() {

    let modal = new bootstrap.Modal(document.getElementById("cartList"));

    modal.show();

    updateLatestData();

}


function updateLatestData() {

    let table = document.getElementById("cartTable");

    table.innerHTML = "";

    let grandTotal = 0;

    cartItems.forEach((p) => {

        let price = p.priceCents / 100;

        let total = price * p.qty;

        grandTotal += total;

        table.innerHTML += `

        <tr>

            <td>${p.id}</td>

            <td>
                <img src="${p.image}"
                width="60"
                height="60">
            </td>

            <td>${p.name}</td>

            <td>₹${price.toFixed(2)}</td>

            <td>

                <button
                class="btn btn-success btn-sm"
                onclick="increase('${p.id}')">

                +

                </button>

                <span class="mx-2 fw-bold">

                ${p.qty}

                </span>

                <button
                class="btn btn-dark btn-sm"
                onclick="decrease('${p.id}')">

                -

                </button>

            </td>

            <td>

            ₹${total.toFixed(2)}

            </td>

            <td>

                <button
                class="btn btn-danger btn-sm"
                onclick="remove('${p.id}')">

                Remove

                </button>

            </td>

        </tr>

        `;
    });

    document.getElementById("grandTotal").innerHTML =
        "₹" + grandTotal.toFixed(2);

}


function checkOut() {

    if (cartItems.length === 0) {

        alert("Cart is Empty");

        return;

    }

    alert("Order Placed Successfully");

    cartItems = [];

    update();

    updateLatestData();

}
