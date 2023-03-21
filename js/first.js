
document.addEventListener("DOMContentLoaded",function(){
    let h1  = document.createElement('h1');
    h1.textContent = 'this is h1';
    h1.style.color = 'blue';

    h1.id = 'h1';
    h1.classList.add('heading');
    h1.classList.add("heading-2")
    h1.classList.remove("heading-2")

    document.querySelector('div').append(h1)
})


