import React, { useContext } from 'react';
import { InfoUserContext } from '../../context';
//import './style.css';


const InfoFollowerX = () => {

    const [state, setState] = useContext(InfoUserContext);

    setState({
        data: state.data,
        followers: state.followers,
        repos: state.repos,
        following: state.following
    });

    const loadDataFollowers = async () => {
        const response = await fetch(`https://api.github.com/users/${state.data.login}/followers`);
        response.json()
            .then((followers) => {
                setState({
                    data: state.data,
                    followers: state.followers,
                    repos: state.repos,
                    following: state.following
                });

            })



    }


    const loadDataRepos = async () => {
        const response = await fetch(`https://api.github.com/users/${state.data.login}/repos`);
        response.json()
            .then((repos) => {
                setState({
                    data: state.data,
                    followers: state.followers,
                    repos: state.repos,
                    following: state.following
                });

            })



    }


    const loadDataFollowing = async () => {
        const response = await fetch(`https://api.github.com/users/${state.data.login}/following`);
        response.json()
            .then((following) => {
                setState({
                    data: state.data,
                    followers: state.followers,
                    repos: state.repos,
                    following: state.following
                });

            })



    }



    return (
        <div className="main-container">

            <div className="container-user">

                <div id="btn-sair">
                    <a href={state.data.html_url} target="_blank"> #{state.data.login}</a>
                    <a href="/"> sair</a>

                </div>
                <div id="info-user">
                    <div id="img">
                        <img src={state.data.avatar_url} alt="imagem" />
                    </div>
                    <h2>{state.data.name}</h2>
                    <p>{state.data.email}</p>
                    <p>{state.data.location}</p>
                </div>

                <div id="fama-user">
                    <div onClick={loadDataFollowers}>
                        <p ><strong>{state.data.followers}</strong><br />
                            Seguidores
                        </p>
                    </div>

                    <div onClick={loadDataFollowing}>
                        <p> <strong>{state.data.following}</strong>
                            <br /> Seguindo
                        </p>
                    </div>

                    <div onClick={loadDataRepos}>
                        <strong>{state.data.public_repos}</strong>
                        <p>
                            Repos
                        </p>
                    </div>
                </div>

                <div id="bio-user">
                    <h3>BIO</h3>
                    <p>{state.data.bio}</p>
                </div>
            </div >
        </div >
    );

}
export default InfoFollowerX;