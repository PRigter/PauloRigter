
const btn = document.querySelector(".fa-bars")
const sidebar = document.querySelector(".sidebar")

btn.addEventListener("click", function() {
  // this.classList.toggle("active")
  // sidebar.style.display = "flex"
  sidebar.classList.toggle("slide")
})


// $("#hamb-btn").sidebar('toggle')