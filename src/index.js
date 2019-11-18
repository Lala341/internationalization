import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';

import JobsList from "./components/jobsList";
import localeEsMessages from "./locales/es";

import localeEnMessages from "./locales/en";

let getBrowserLanguage=()=>{

    var m=navigator.language|| navigator.userLanguage;
console.log(m);
return navigator.language|| navigator.userLanguage;
}

let getLanguage=()=>{

    var u=getBrowserLanguage();

    if(u==="es-ES"){
        return "es";
    }
    return "en";
}
let getLanguageData=()=>{

    var u=getBrowserLanguage();

    if(u==="es-ES"){
        return localeEsMessages;
    }
    return localeEnMessages;
}

ReactDOM.render(
    
	<IntlProvider locale={getLanguage()} messages={getLanguageData()}>
		<JobsList/>
	</IntlProvider>, document.getElementById("root")
);