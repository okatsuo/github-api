import React from 'react';
import InfoUsuario from '../../pages/infoUsuario'

function Auth(props) {
    const nickname = document.getElementById('nickname').value;
    const originalNome = nickname.split(' ').join('');

    return (
        fetch("https://api.github.com/users/" + originalNome)
            .then((result) => result.json())
            .then((data) => {

                console.log(data)

                document.getElementById('img').innerHTML = `
            <img src="${data.avatar_url}"  /> 
            `


                document.getElementById('nome').innerHTML = `
            <p>${data.name}</p> 
            `


            })

    );

}

export default Auth;