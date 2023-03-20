const form = document.querySelector(".formm")

const input1 = document.querySelector("#input1")
const input2 = document.querySelector("#input2")
const area = document.querySelector("#area")




form.addEventListener("submit", (e)=>{
	e.preventDefault()

	const name = input1.value
	const email = input2.value

	const details = area.value

	localStorage.setItem("name", name)
	localStorage.setItem("mail", email)
	localStorage.setItem("area", details)






	window.location.href = "PDF_Help_team_lead_form.html"


})



const burger = document.querySelector(".burgermenu")

const burgerimg = document.querySelector("#burgerimg")

const menu = document.querySelector(".mobile-menu")

const header = document.querySelector("#header")

let b = false

burger.addEventListener("click", ()=>{
	if(!b){
		menu.style.display = "flex"
		burgerimg.src = "img/x.svg"
		header.style.borderBottom = "2px solid rgba(25, 67, 64, 1)"
		b=true
	}

	else{
		menu.style.display = "none"
		burgerimg.src = "img/burger.svg"
		header.style.borderBottom = "none"
		b=false
	}
})
