import React, { useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { InfoUserContext } from '../../context';
import { AiOutlineArrowRight } from 'react-icons/ai';
import './style.css';


export const Main = () => {
    const [state, setState] = useContext(InfoUserContext);
    const NickNameRef = useRef(null);
    const history = useHistory();

    return (
        <div className="App">
            <div className="container">
                <img src="https://iconsetc.com/icons-watermarks/simple-yellow/foundation/foundation_social-github/foundation_social-github_simple-yellow_512x512.png" alt="imagem do usuario"></img>
                <div className="form-group">
                    <form>
                        <input className="form-control" ref={NickNameRef} id="nickname" type="text" placeholder="Usuário" required></input><br />
                        <button type="submit" id="btn-link" onClick={() => {

                            /* promise */
                            //const nickname1 = document.getElementById('nickname').value;
                            const originalNome = NickNameRef.current.value.split(' ').join('');

                            if (NickNameRef.current.value === "") return;


                            fetch("https://api.github.com/users/" + originalNome)
                                .then((result) => result.json())
                                .then((data) => {
                                    setState({
                                        data: data
                                    });
                                });
                            history.push("/infousuario")
                        }} ><strong>ENTRAR <AiOutlineArrowRight /></strong></button>
                    </form>

                </div>
            </div>
        </div >
    );

}

export default Main;