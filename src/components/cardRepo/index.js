import React from 'react';
import './style.css';
import { AiOutlineStar } from 'react-icons/ai';
import { BsUnlock, BsLock } from 'react-icons/bs';

const CardRepo = ({ props }) => {
    return (
        <div className="container-repo">
            <div className="card-repo">
                <p><h2>- {props.name}</h2></p>
                <p><small>{props.description}</small></p>
                <div className="stars-and-status">
                    <AiOutlineStar className="AiOutlineStar" /> {props.stars}

                </div>
                <div className="padlocks">
                    <BsUnlock className="BsUnlock" />
                    <BsLock className="BsLock" />
                </div>
                <br />

            </div>
            <hr />
        </div>
    )
}

export default CardRepo;