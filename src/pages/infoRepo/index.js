import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { InfoUserContext } from '../../context';
import CardRepo from '../../components/cardRepo';
import GoBack from '../../components/goBack'




const InfoRepo = () => {
    const [state, setState] = useContext(InfoUserContext);
    const history = useHistory();

    const cardsRepo = () => {
        return state.repos.map((r) => {

            return (
                <CardRepo key={r.id} props={{
                    name: r.name,
                    description: r.description,
                    stars: r.stargazers_count
                }} />


            )
        })
    }
    const parte1 = "https://github.com/"
    const parte2 = "?tab=repositories"
    return (

        <div>
            <h1>{state.data.public_repos} repositórios</h1>
            <div id="btn-sair">

                <p onClick={history.goBack} style={{ cursor: "pointer" }}><GoBack /></p>
                <a href={parte1 + state.data.login + parte2} target="_blank"> #{state.data.login}</a>
            </div>
            <hr />
            {
                cardsRepo()

            }

        </div >
    )
}


export default InfoRepo;