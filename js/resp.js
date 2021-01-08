burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
rightNav=document.querySelector('.rightNav')
leftNav=document.querySelector('.leftNav')

burger.addEventListener('click' , ()=>{
    rightNav.classList.toggle('v-classresp');
    leftNav.classList.toggle('v-classresp');
    navbar.classList.toggle('h-classresp');

} )