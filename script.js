const FRD = document.querySelectorAll(".faqRightDiv")

const vectoriisca = document.querySelectorAll(".vectoriisce")

const ekspanzii = document.querySelectorAll(".expansion")

const divs = document.querySelectorAll(".faqRightDiv")

let opened = -1

for(let i=0; i<vectoriisca.length; i++){


	FRD[i].addEventListener("click", () =>{
		if(opened==i){
			divs[opened].style.borderBottom =""
			ekspanzii[opened].style.display="none"
			vectoriisca[opened].style.transform = ""
			opened =-1
			return
		}

		if(opened>-1){
			divs[opened].style.borderBottom =""
			ekspanzii[opened].style.display="none"
			vectoriisca[opened].style.transform = ""
		}

		divs[i].style.borderBottom ="none"
		ekspanzii[i].style.display="inline-block"
		vectoriisca[i].style.transform = "rotate(90deg)"
		opened = i
	})
}





const testboxes = document.querySelector(".testboxes")

const leftArrow = document.querySelector(".leftArrow")
const rightArrow = document.querySelector(".rightArrow")

let clientX = 0

let isClicked = false

let touch = 0

testboxes.addEventListener("mousedown", getMouseLoc)

testboxes.addEventListener("touchstart", getMouseLocTouch)

function getMouseLocTouch(event){
	touch = event.touches[0].clientX
	isClicked=true
}


function getMouseLoc(event){
	clientX = event.clientX
	isClicked= true
}

window.addEventListener("mouseup", () =>{
	console.log("false")
	isClicked=false
})

function compareTouch(event) {
	if(isClicked){

		let newtouch = event.touches[0].clientX
		if(newtouch-touch>25){
			slideLeft()
			isClicked=false
		}

		if(newtouch-touch<-25){
			slideRight()
			isClicked=false
		}
	}
}

function compare(event){
	if(isClicked){
		let newClientX = event.clientX
		if(newClientX-clientX>25){
			slideLeft()
			isClicked=false
		}

		if(newClientX-clientX<-25){
			slideRight()
			isClicked=false
		}

	}
}

testboxes.addEventListener("mousemove", compare)
testboxes.addEventListener("touchmove", compareTouch)


let s=0

let d=-3

rightArrow.addEventListener("click", slideRight)

function slideRight(){
	let width = window.innerWidth

	console.log(width)

	if(width<=768){
		testboxes.style.marginLeft = "-5px"
		if(d<6){
			console.log(width)
			testboxes.style.transform = `translateX(${d*-354}px`
			d++
		}
		if(d==6){
			testboxes.style.transition = "none"
			testboxes.style.transform = "translateX(1768.75px)"
			setTimeout(()=>{
				testboxes.style.transition = "1s ease all"
				testboxes.style.transform = "translateX(1415px)"

			},10)
			d=-3
			return
		}
	}

	if(width>768){
		if(s<2){
			testboxes.style.transform = `translateX(${s*-1290}px`
		}

		if(s==2){
			testboxes.style.transition = "none"
			testboxes.style.transform = "translateX(2580px)"
			setTimeout(()=>{
				testboxes.style.transition = "1s ease all"
				testboxes.style.transform = "translateX(1290px)"

			},10)
			s=0
			return
		}

		s++
	}


}

leftArrow.addEventListener("click", slideLeft)

function slideLeft(){

	let width = window.innerWidth

	console.log(width)

	if(width<=768){
		testboxes.style.marginLeft = "-15px"
		if(d>-3){
			console.log(width)
			testboxes.style.transform = `translateX(${(d-2)*-354}px`
			d--
		}
		if(d==-3){
			testboxes.style.transition = "none"
			testboxes.style.transform = "translateX(-1771px)"
			setTimeout(()=>{
				testboxes.style.transition = "1s ease all"
				testboxes.style.transform = "translateX(-1416px)"

			},10)
			d=6
			return
		}
	}

	if(width>768){


		if(s==0){
			testboxes.style.transition = "none"
			testboxes.style.transform = "translateX(-2580px)"
			setTimeout(()=>{
				testboxes.style.transition = "1s ease all"
				testboxes.style.transform = "translateX(-1290px)"

			},10)
			s=2
			return
		}


		if(s>0){
			testboxes.style.transform = `translateX(${(s-2)*-1290}px`
		}

		s--
	}


	
}



const form = document.querySelector(".formm")

const input1 = document.querySelector("#input1")
const input2 = document.querySelector("#input2")
const fileInput = document.querySelector("#input_11")
const area = document.querySelector("#area")

const alert = document.querySelector(".alert")
const mobilealert = document.querySelector(".mobilealert")


form.addEventListener("submit", (e)=>{
	e.preventDefault()

	if(input2.value==""){
		input2.classList.add("redalert")
		let width = window.innerWidth
		if(width>768){
			alert.style.display = "block"
		}
		else{
			mobilealert.style.display = "block"
			form.style.marginTop = "0"
			form.style.marginBottom = "20px"
		}
		return
	}

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


const mobilelogos = document.querySelectorAll(".mobilelogo")

console.log(mobilelogos)

let p =3;

/*setInterval(()=>{
	for(let i=0; i<mobilelogos.length;i++){
		mobilelogos[i].style.transform = `translateX(${p*-150}px`
	}
	p++
}, 2000)*/









setInterval(()=>{
	
	if(p==5){
		for(let i=0;i<mobilelogos.length;i++){
			mobilelogos[i].style.transition = "none"
			mobilelogos[i].style.transform = "translateX(-0px)"
			setTimeout(()=>{
				mobilelogos[i].style.transition = "1s all ease"
				mobilelogos[i].style.transform = "translateX(-150px)"
			})
		}
		p=2
		return
	}
	if(p<5){
		for(let i=0; i<mobilelogos.length;i++){
		mobilelogos[i].style.transform = `translateX(${p*-150}px`
	}
		p++

	}
}, 2000)


















