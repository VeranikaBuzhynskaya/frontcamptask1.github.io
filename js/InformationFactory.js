import Article from "./Article";
import SourceProxy from "./Source";

export default class InformationFactory{
    create(type){
        if(type === 'article'){
           return new Article();
        } else if (type === 'source') {
           return new SourceProxy();
        }
    }
}