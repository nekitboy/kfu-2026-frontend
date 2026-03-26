document.querySelector('.header__search_button').addEventListener('click', function(e) {
    const query = document.querySelector('.header__search input').value.trim();
    if (query) {
        window.location.href = `search.html?q=${encodeURIComponent(query)}`;
    } else {
        alert('Please enter a search term');
    }
});