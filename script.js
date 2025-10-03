const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.card');

searchInput.addEventListener('keyup', function () {
    let filter = searchInput.value.toLowerCase();

    cards.forEach(card=>{
        let title = card.querySelector('h2').textContent.toLowerCase()
        let desc = card.querySelector('p').textContent.toLowerCase()
    
        if(title.includes(filter) || desc.includes(filter)){
            card.style.display = 'block';
        }
        else{
            card.style.display = 'none'
        }
    
    })

})