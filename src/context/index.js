import React, { useState, createContext } from 'react';


const InfoUserContext = createContext([{}, () => { }]);

const InfoUserProvider = (props) => {         
    const [state, setState] = useState({         
        data: {},
        followers: {},
        repos: {},
        following: {}
    });
    return (
        <InfoUserContext.Provider value={[state, setState]}>
            {props.children}
        </InfoUserContext.Provider>
    );
};

export { InfoUserContext, InfoUserProvider };