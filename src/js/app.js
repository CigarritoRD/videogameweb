const btnMore = document.querySelector('.bmore');
const btnMenuMobile = document.querySelector('.bmenu');


btnMore.addEventListener('click', ()=>{
    const menuDesplegable = document.querySelector('.bmore .bmore-menu');
    menuDesplegable.classList.toggle('show');
});
btnMenuMobile.addEventListener('click', ()=>{
    const menuDesplegableMobile = document.querySelector('.menu-mobile-desplegable');
    menuDesplegableMobile.classList.toggle('show');
    
    if(menuDesplegableMobile.classList.contains('show')){
        setTimeout(() => {
        
            menuDesplegableMobile.classList.remove('show');
        
        }, 4000);
    }
    
})