// log out
const btnLogOut = document.getElementById("btnLogOut");
btnLogOut.addEventListener("click", () => {
  localStorage.removeItem("cartItems");
  window.location.href = "../../index.html";
});
