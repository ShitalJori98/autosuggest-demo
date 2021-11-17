import React, { useState } from 'react';

export default function AutoPopUp() {

    const [suggessions, setSuggessions] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [text, setText] = useState('');
    const [show, setShow] = useState(false);
    const [resfound, setResfound] = useState(true);


    const country = ['American', 'Andorra', 'Angola', 'Belgium', 'BelizeBenin', 'Bermuda', 'Cambodia', 'Cameroon', 'Canada', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic',
        'Ethiopia', 'Finland', 'France', 'Hong Kong', 'Iceland', 'India', 'Indonesia', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Malaysia', 'Maldives', 'Mexico', 'New Zealand', 'Oman', 'Philippines',
        'RomaniaRussian ', 'Federation', 'Sri Lanka', 'Switzerland', 'Taiwan', 'United Kingdom', 'United States of America', 'Vanuatu', 'Wallis and Futuna Islands', 'Yemen', 'Zambia', 'Zimbabwe']


    const onChangeHandler = (d) => {
        let searchval = d;
        let suggest = [];
        if (searchval.length > 0) {
            suggest = country.sort()
                .filter((e) => e.toLowerCase().includes(searchval.toLowerCase()))
            setResfound(suggest.length !== 0 ? true : false);
        }
        setSuggessions(suggest);
        setSearchText(searchval)
        console.log(suggest)

    };

    const suggestedText = (value) => {
        console.log(value);
        setSearchText(value);
        setSuggessions([]);
    };


    const getSuggestions = () => {
        if (suggessions.length === 0 && searchText !== "" && !resfound) {
            return <p class="text-danger">Search Content Not Found</p>;
        }
        return (
            <ul >
                {suggessions.map((item, index) => {
                    return (
                        <div key={index} >
                            <li onClick={() => suggestedText(item)} type='none'>{item}</li>
                            <hr />
                        </div>
                    )
                })}
            </ul>
        )
    }





    return (

        <div className="container">

            {/* <div>
                <h1 class="font-italic"> Click Here For Search</h1>
            </div><br /> */}

            <div>
                <button class="btn btn-info" onClick={() => setShow(true)}>Click me</button>
            </div><br />


            <div>
                {show ? <div> <input className="search" placeholder='enter country name' 
                type='text' onChange={e => onChangeHandler(e.target.value)} value={searchText} />
                </div> : null}
            </div> <br />

            {getSuggestions()}
            
        </div>
    )
}