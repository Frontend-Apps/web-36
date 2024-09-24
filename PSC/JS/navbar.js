export default function loadNavbar() {
  document.querySelector("#navbar").innerHTML = `
    <a href="home.html">Home</a>
     <a href="cart.html">Cart</a>
     <a href="create.html">Add course</a>
     <a href="login.html">Admin login</a>
    `;
}
