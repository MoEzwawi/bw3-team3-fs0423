import { Col } from "react-bootstrap"
import { HandThumbsUp, HandThumbsUpFill, ChatText, Share, SendFill } from 'react-bootstrap-icons';
import { useState } from "react";


const SinglePost = ({ image, username, date1, text, date2, id }) => {
    const [selected, setSelected] = useState(false);
    const [liked, setLiked] = useState(false);
    function formatData(dataString) {
        const data = new Date(dataString);
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        };
        return data.toLocaleDateString('it-IT', options);
    }

    return (<Col className='d-sm border border-1 border-secondary-subtle mb-1 mt-1 bg-white rounded col-md-6  pt-2 ms-3' style={{ width: '90%' }}>
        <p style={{ fontSize: 1 + 'em', fontWeight: 'bold', margin: 0.2 + 'em' }}>Username: <img src={image} className='rounded-circle' alt="avatar" width={20 + 'px'} /> {username}</p>
        <p style={{ fontSize: 0.7 + 'em' }}>Creazione: {formatData(date1)}</p>
        <p style={{ fontSize: 1 + 'em' }}>Contenuto del SinglePost: {text}</p>
        <p style={{ fontSize: 0.7 + 'em', margin: 0.2 + 'em' }}>Aggiornamento: {formatData(date2)}</p>
        <p style={{ fontSize: 0.7 + 'em' }}>ID: {id}</p>
        <hr />
        <div className='d-flex flex-wrap'  >
            <p onClick={() => setLiked(!liked)}
                // *DA FIXARE* Al click pollice colorato
                style={{ border: liked ? /*Aggiungere componente  */ <HandThumbsUpFill /> : <HandThumbsUp /> }} className='align-items-start align-text-center me-3 interazioni p-1 pb-1'><HandThumbsUp className='align-center me-1' />Consiglia</p> {/* Stato per mettere like */}
            <p onClick={() => setSelected(!selected)}
                // *DA FIXARE* Aprire solamente commenti del SinglePost selezionato 
                style={{ border: selected ? /*Aggiungere componente  */ '3px solid red' : 'none' }} className='align-items-start align-text-center me-3 interazioni p-1 pb-1'><ChatText className='align-center me-1' />Commenta</p>
            <p className='align-items-start align-text-center me-3 interazioni p-1 pb-1 '><Share className='align-center me-1' />Diffondi il SinglePost</p>
            <p className='align-items-start align-text-center interazioni p-1 pb-1'><SendFill className='align-center me-1' />Invia</p>
        </div>
    </Col >
    )
}


export default SinglePost