const menuButton = document.getElementById("hamBtn");
const menu = document.getElementById("mnu");
const closeMenu = document.getElementById("xButton");

function openMenu() {
    menu.style.visibility = "visible";
    menu.style.opacity = "1";
}

function closeMenuFunc() {
    menu.style.opacity = "0";
    menu.style.pointerEvents = "auto"; 
    setTimeout(()=>{menu.style.visibility = "hidden";},500)
    
}


menuButton.addEventListener("click", openMenu);
closeMenu.addEventListener("click", closeMenuFunc);
const image = async function(){
	const url = "/media/images/"
	const response = await fetch(url);
	if(!response.ok){
		alert("Error fetching image");;
	}
	const imageElement = document.createElement("img");
	imageElement.src = "url";


}
//function to load images
const loadImages = async ()=>{
	try{
		const endPoint = "/media/images";
		const response = await fetch(endPoint);
		const image = await response.json();
		const gallery = document.getElementById("pictures");
		gallery.innerHTML = "";
		image.forEach(imgSrc =>{
			const img = document.createElement("img");
			const tagline = document.createElement("h1");
			tagline.textContent = "";
			tagline.style.marginTop = "10px"
			img.src = imgSrc

			img.style.width = "100px"
			img.style.height = "auto";
			img.style.margin = "10px"
			gallery.appendChild(img);
			gallery.appendChild(tagline);
			gallery.style.display = "grid";
			gallery.style.gridTemplateColumns = "repeat(3, 1fr)";
gallery.style.gap = "10px"; 
			
		});
		const title = document.createElement("h1");
	}catch (error){
		alert(error,"Neiman Tech server side has a problem!");
	}


}
loadImages();



