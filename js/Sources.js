class Sources {
    constructor(){
        this.checkedSource = 'bbc-news';
        this.container = document.getElementById('dropdown-content');
    }

    fetchSources(container){
        const loader = new NewsLoader();

        loader.load().then(this.render.bind(this));
    }

    render(sources){
        const fragment = document.createDocumentFragment();
        sources.forEach(source => {
            fragment.appendChild(this.createSourcesNav(source));
        });
        this.container.appendChild(fragment);
    }

    createSourcesNav(source){
        let itemMenu = document.createElement('div');
        itemMenu.className = 'itemMenu';
        document.body.appendChild(itemMenu);

        let {id, name: sourceName} = source;

        itemMenu.innerHTML = `
            <input type="radio" name="fetchBy" id=${id}>
            <label for=${id}>${sourceName}</label>`;

        if(id === this.checkedSource){
            itemMenu.firstElementChild.checked = true;
        }
        return itemMenu;
    }
}
