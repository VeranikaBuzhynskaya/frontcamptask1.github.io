import Service from "../serviceCommand/Service";
import commandFactory from "../serviceCommand/CommandFactory";

let instance = null;

class Source {
    constructor(){
        if(!instance){
            instance = this;
        }
        this.checkedSource = 'bbc-news';
        this.container = document.getElementById('dropdown-content');

        return instance;
    }

    showSources(){
        this.fetchSources().then(sources => {this.render(sources)});
    }

    fetchSources(){
        const loader = commandFactory.getCommandRequest('source');
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

    updateCheckedSource(newCheckedSource){
        this.checkedSource = newCheckedSource;
        return true;
    }
}

export default class SourceProxy extends Source {
    updateCheckedSource(newCheckedSource) {
        if (newCheckedSource && this.checkedSource !== newCheckedSource) {
            return super.updateCheckedSource(newCheckedSource);
        }
        return false;
    }
}

