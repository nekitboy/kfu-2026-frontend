import {sayHello, name} from "./hello";

const searchForm = document.querySelector<HTMLFormElement>('.header__search');

if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const data = new FormData(searchForm);

        searchForm.reset();
        alert(`Поиск по "${data.get('query')}"`)

    })
} else {
    throw new Error('Отсутствует форма')
}

sayHello(name)