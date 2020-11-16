import React, { useContext, useEffect } from 'react';
import { InfoUserContext } from '../../context';
import GoBack from '../../components/goBack';
import { useHistory } from 'react-router-dom';
import CardFollowers from '../../components/cardFollowers';

const InfoFollowers = () => {
    const [state, setState] = useContext(InfoUserContext);
    const history = useHistory();
    useEffect(() => {

    })

    const cardFollowers = () => {
        return state.followers.map((f, i) => {

            return (
                <div>
                    <CardFollowers key={i} props={
                        {
                            avatar_url: f.avatar_url,
                            login: f.login,
                        }
                    } />
                </div>
            )
        })
    }

    return (

        <div>
            <h1>{state.data.followers} seguidores</h1>
            <div id="btn-sair">
                <p className="mousepointer" style={{ cursor: "pointer" }} onClick={history.goBack}><GoBack /></p>
                #{state.data.login}

            </div>
            <hr />
            {
                cardFollowers()
            }

        </div >
    )
}

export default InfoFollowers;