// start links
let links =document.querySelectorAll('.navBar il');
let linksArray=Array.from(links);

linksArray.forEach((element) =>{    
    element.addEventListener('click',function(){
        linksArray.forEach((element) =>{
            element.classList.remove('active')
        })
        element.classList.add('active')
    })
    
})
// end links
// start tabs
let tabs =document.querySelectorAll('.tabsd li');
let tabsArray=Array.from(tabs);
let divs =document.querySelectorAll('.contt > div');
let divsArray=Array.from(divs);


tabsArray.forEach((ele) =>{
    ele.addEventListener('click' ,function(e){
        tabsArray.forEach((ele)=>{
            ele.classList.remove('active')
        })
        ele.classList.add('active')
        divsArray.forEach((div)=>{
            div.style.display="none"
        })
        let dis =document.querySelector(e.currentTarget.dataset.cont)
        dis.style.display='block'
        
    })
    
})

// end tabs