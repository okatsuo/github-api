import React, { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';


import './style.css'
import { InfoUserContext } from '../../context'

const CardFollowers = ({ props }) => {
    const [state, setState] = useContext(InfoUserContext);
    const history = useHistory();



    return (

        <div className="container-card">
            <div className="card-follower">
                <img src={props.avatar_url} />
                <strong className="mouse-pointer" onClick={() => {
                    fetch(`https://api.github.com/users/${props.login}`)
                        .then((result) => result.json())
                        .then((login) => {
                            setState({
                                data: login
                            });
                        });
                    history.push("/infousuario")
                }}>    #{props.login}</strong>
            </div>
        </div>
    )
}

export default CardFollowers;