import RequestArticleCommand from "./RequestArticleCommand";
import RequestSourceCommand from "./RequestSourceCommand";

class CommandFactory{
    constructor(){
        this.apiKey = `ea0683d6cc144385987781ae61303c23`;
    }
    getCommandRequest(requestType, source){
        switch(requestType){
        case 'source' : return new RequestSourceCommand(); 
        case 'article' : return new RequestArticleCommand(source, this.apiKey);
        default: 
            console.log('Nothing requested');
        }    
    }
}

const  commandFactory = new CommandFactory();
export default commandFactory;