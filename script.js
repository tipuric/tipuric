const leftarrow = document.querySelector(".leftarrow")
const rightarrow = document.querySelector(".rightarrow")

const photos = document.querySelectorAll(".photos-div")

let i=0

rightarrow.addEventListener("click", ()=>{
	console.log(i)
	console.log(photos.length)
	if(i<photos.length-1){
		photos[i].style.display ="none"
		i++
		photos[i].style.display ="flex"
	}
	else{
		photos[i].style.display ="none"
		i=0
		photos[i].style.display ="flex"
	}
})

leftarrow.addEventListener("click", ()=>{
	if(i>0){
		photos[i].style.display ="none"
		i--
		photos[i].style.display ="flex"
	}
	else{
		photos[i].style.display ="none"
		i=photos.length-1
		photos[i].style.display ="flex"
	}
})

const floordiv = document.querySelector(".floor")
const image = document.querySelector(".modalimage")

const modal = document.querySelector(".full-modal")

let d=0

floordiv.addEventListener("click", ()=>{
	modal.style.display="flex"
	image.src = "img/floorplan.jpeg"
	d=1
})

modal.addEventListener("click", ()=>{
	if(d==1){
		modal.style.display="none"
		d=0
	}
})


const photo = document.querySelectorAll(".photoDiv")
const images = document.querySelectorAll(".image")

for(let i=0; i<photo.length; i++){
	photo[i].addEventListener("click", ()=>{
		modal.style.display="flex"
		image.src = images[i].src
		d=1
	})
}
















