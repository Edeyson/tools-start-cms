
setTimeout(() => {
    let sliderCards1 = document.querySelector('#menuItems_1');
    let sliderCards2 = document.querySelector('#menuItems_2');
    if(sliderCards1) menuItems("menuItems_1");
    if(sliderCards2) menuItems("menuItems_2");    
}, 1000);


function menuItems(menuItems) {
    let menuItem = [];
    
    document.querySelectorAll(`#${menuItems} li`).forEach(li =>{
      if(li.getAttribute("aria-label")!==null){
        menuItem.push(li.getAttribute("aria-label"));
      }else{
        menuItem.push(li.textContent.toLocaleLowerCase());
      }
    })

    console.log(menuItem);

    let items = document.querySelector(`#${menuItems}`);

    items.addEventListener('click',function name(event) {
        console.log("clic",event.target.textContent);
        let evento = event.target.tagName;
        if(evento == 'LI' || evento == 'FONT' || evento == 'B' || evento == 'SPAN')
        {
            ViewCard(event.target,menuItem); 
        }
    })

    ViewCard(items.querySelector('li'),menuItem);
}

function ViewCard(nameGroup,menuItem) {
    let targetElement = nameGroup;
    parentUL();
    function parentUL() {
        if (targetElement.parentElement.tagName == "UL") {
            return
        }else{
            targetElement = targetElement.parentElement;
            parentUL();
        }
    }
    console.log("target element", targetElement);
    
    document.querySelector(`#${targetElement.parentElement.id}`).innerHTML = 
    document.querySelector(`#${targetElement.parentElement.id}`).innerHTML.replaceAll("active","");
    document.querySelectorAll('.DnnModule #title-tab').forEach(span=>{

        if(span.id.includes('title-tab'))
        {
            console.log(span.textContent.toLocaleLowerCase(), targetElement.textContent.toLocaleLowerCase(), targetElement.getAttribute("aria-label"));
            if (span.textContent.toLocaleLowerCase() == targetElement.textContent.toLocaleLowerCase() || span.textContent.toLocaleLowerCase() == targetElement.getAttribute("aria-label")) {
                span.closest(".DnnModule").style.display = "block";
                console.log("targetElement",targetElement);
                document.querySelector(`li[togle-item='${targetElement.getAttribute("togle-item")}']`).classList.add('active');
            }
            else if(menuItem.includes(span.textContent.toLocaleLowerCase())) {
                console.log("else",span.textContent.toLocaleLowerCase())
                span.closest(".DnnModule").style.display = "none";
                
            }
        }

    })
}