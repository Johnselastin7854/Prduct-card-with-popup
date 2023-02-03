const previewContainer=document.querySelector(".products-preview");
const previewBox= document.querySelectorAll(".preview");

document.querySelectorAll(".products-container .products").forEach((product)=>{
  product.addEventListener("click",()=>{
    previewContainer.style.display="flex";
    let name= product.getAttribute("data-name");
    
    previewBox.forEach((preview)=>{
      let target=preview.getAttribute("data-target");
      
      if(name == target){
        preview.classList.add("active");
      }
    })
  })
})

previewBox.forEach((product)=>{
  product.querySelector(".fa-times").onclick =()=>{
    product.classList.remove("active");
    previewContainer.style.display="none";
  }
})