const nameInput = document.querySelector("#input_4")
const emailInput = document.querySelector("#input_5")
const photoInput = document.querySelector("#input_11")
const detailsInput = document.querySelector("#input_6")

nameInput.value = localStorage.getItem("name")
emailInput.value = localStorage.getItem("mail")
detailsInput.innerText = localStorage.getItem("area")

const btn = document.querySelector("#input_2")


btn.click()

