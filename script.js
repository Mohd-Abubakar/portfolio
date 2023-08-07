const hum_btn = document.querySelector('#sideButton');
const menu = document.querySelector('#menu');
const links = document.querySelectorAll('#link');

hum_btn.addEventListener('click',()=>{
    menu.classList.toggle('hidden')
    hum_btn.classList.toggle('bg-slate-600')
})

links.forEach(link=>{
    link.addEventListener('click',()=>{
        menu.classList.toggle('hidden')
        hum_btn.classList.toggle('bg-slate-600')
    })
})