const inputSearch = document.querySelector('.input-Search');

inputSearch.addEventListener('click', function() {
    const list = document.querySelector('.list-search-type');
    
    if (list.style.display === 'none') {
        list.style.display = 'block'
    } else {
        list.style.display = 'none'
    }
})