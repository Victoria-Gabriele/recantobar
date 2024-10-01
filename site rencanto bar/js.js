// function slide1(){
//     document.getElementById('id').src="1.bmp";
//     setTimeout("slide2()", 1000)
//     }
    
//     function slide2(){
//     document.getElementById('id').src="2.bmp";
//     setTimeout("slide3()", 1000)
//     }
    
//     function slide3(){
//     document.getElementById('id').src="3.bmp";
//     setTimeout("slide1()", 1000)
//     }

window.addEventListener("scroll", function(){
    let header = this.document.querySelector('#header')
    header.classList.toggle('rolagem',window.scrollY > 300)
});

var button = document.getElementById('button');

button.addEventListener('click',function(){
    var card = document.querySelector('.card');
    card.classList.toggle('active');
    
    if (card.classList.contains('active')){
        return button.textContent = 'Leia menos';
    }

    return button.textContent = 'Leia mais';

});