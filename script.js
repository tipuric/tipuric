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
