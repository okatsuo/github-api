import React, { useContext } from 'react';
import { InfoUserContext } from '../../context';
import { useHistory } from 'react-router-dom'
import CardFollowers from '../../components/cardFollowers';
import GoBack from '../../components/goBack';

const InfoFollowing = () => {

    const [state, setState] = useContext(InfoUserContext);
    const history = useHistory();

    const CardFollowing = () => {
        return state.following.map((s, i) => {

            return (
                <div>
                    <CardFollowers key={i} props={
                        {
                            avatar_url: s.avatar_url,
                            login: s.login,
                        }
                    } />
                </div>
            )
        })
    }

    return (
        <div>
            <h1> seguindo {state.data.following}</h1>
            <div id="btn-sair">
                <p onClick={history.goBack} style={{ cursor: "pointer" }}><GoBack /></p>

                #{state.data.login}

            </div>
            <hr />
            {
                CardFollowing()
            }

        </div >
    );
}

export default InfoFollowing;