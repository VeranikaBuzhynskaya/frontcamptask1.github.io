import Service from "./Service";

export default class Source {
    constructor(){
        this.checkedSource = 'bbc-news';
        this.container = document.getElementById('dropdown-content');
    }

    showSources(){
        this.fetchSources().then(sources => {this.render(sources)});
    }

    fetchSources(){
        const loader = new Service();
        return loader.load();
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
