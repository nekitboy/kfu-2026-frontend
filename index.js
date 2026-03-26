const searchForm = document.querySelector('.header__search');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    searchForm.reset();
    alert(`Поиск по "${data.get('query')}"`)

})