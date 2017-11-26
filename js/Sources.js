class Sources {
    constructor(){
        this.checkedSource = 'bbc-news'
    }

    fetchSources(container){
        const loader = new NewsLoader();
        const fragment = document.createDocumentFragment();

        loader.load().then(sources => {
            sources.forEach(source => {
                fragment.appendChild(this.createSourcesNav(source)); // render больше подходит, т.к. тут отрисовываю
            });
            container.appendChild(fragment);
        })
    }

    createSourcesNav(source){
        let itemMenu = document.createElement('div');
        itemMenu.className = 'itemMenu';
        document.body.appendChild(itemMenu);
        itemMenu.innerHTML = `
            <input type="radio" name="fetchBy" id=${source.id}>
            <label for=${source.id}>${source.name}</label>`;

        if(source.id === this.checkedSource){
            itemMenu.firstElementChild.checked = true;
        }
        return itemMenu;
    }
}
