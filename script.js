let count = 0;
let total = 0;
let savedUser = "";
let savedPass = "";

const buttons = document.querySelectorAll(".product button");
const cartCount = document.getElementById("cart-count");
const totalPrice = document.getElementById("total-price");
const clearCart = document.getElementById("clear-cart");
const checkout = document.getElementById("checkout");
const authBox = document.getElementById("auth-box");
const store = document.getElementById("store");
const paymentForm = document.getElementById("payment-form");
const payNow = document.getElementById("pay-now");
const paymentBack = document.getElementById("payment-back");

const signupBtn = document.getElementById("signup-btn");
const loginBtn = document.getElementById("login-btn");
const backBtn = document.getElementById("back-btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let product = button.parentElement;
        let price = parseInt(product.querySelector("p").textContent);

        if (button.textContent === "أضف للسلة") {
            count++;
            total += price;
            button.textContent = "حذف من السلة";
        } else {
            count--;
            total -= price;
            button.textContent = "أضف للسلة";
        }

        cartCount.textContent = count;
        totalPrice.textContent = total;
    });
});

clearCart.addEventListener("click", () => {
    count = 0;
    total = 0;
    cartCount.textContent = 0;
    totalPrice.textContent = 0;

    buttons.forEach(button => {
        button.textContent = "أضف للسلة";
    });
});

signupBtn.addEventListener("click", () => {
    savedUser = document.getElementById("signup-user").value;
    savedPass = document.getElementById("signup-pass").value;
    alert("تم إنشاء الحساب");
});

checkout.addEventListener("click", () => {
    authBox.style.display = "block";
    store.style.display = "none";
});

backBtn.addEventListener("click", () => {
    authBox.style.display = "none";
    store.style.display = "block";
});

loginBtn.addEventListener("click", () => {
    let loginUser = document.getElementById("login-user").value;
    let loginPass = document.getElementById("login-pass").value;

    if (loginUser === savedUser && loginPass === savedPass) {
        authBox.style.display = "none";
        store.style.display = "block";
        paymentForm.style.display = "block";
    } else {
        alert("بيانات خاطئة");
    }
});

paymentBack.addEventListener("click", () => {
    paymentForm.style.display = "none";
});

payNow.addEventListener("click", () => {
    let phone = "212652914114";
    let msg = "سلام، عندك طلب جديد بمجموع: " + total + " DH";
    let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(msg);
    window.open(url, "_blank");
});