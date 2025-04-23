function deleteMenuHoverEffect(array){
    array.forEach(element => {
        element.addEventListener('mouseleave',(e) => {
            e.target.classList.remove('menu_active');
        })
    });
}

function addMenuHoverEffect(array){
    array.forEach(element => {
        element.addEventListener('mouseenter',(e) =>{
            e.target.classList.add('menu_active');
        })
    });
    deleteMenuHoverEffect(array);
}


function main(){
    const headerList = document.querySelectorAll(".header__list > li");
    addMenuHoverEffect(headerList);
    
}
main();