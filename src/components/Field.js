import React from 'react' ;
import LanguagaeContext from '../contexts/LanguageContext'  ;

class Field extends React.Component{

    static contextType = LanguagaeContext ;

    render() {

        const text = this.context === 'english' ? 'Name' : 'Naam' ;

        return (
            <div className="ui field" >
                <label>{text}</label>
                <input/>
            </div>
        );
    }
}

export default Field ;
