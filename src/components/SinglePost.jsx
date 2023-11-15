import { Col } from "react-bootstrap"
import { HandThumbsUp, HandThumbsUpFill, ChatText, Share, SendFill } from 'react-bootstrap-icons';
import { useState } from "react";
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';

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
    function calcolaDifferenza(data) {
        const adesso = new Date();
        const dataDiPubblicatione = new Date(data)
        const differenzaGiorni = differenceInDays(adesso, dataDiPubblicatione);
        if (differenzaGiorni === 0) {
            const differenzaOre = differenceInHours(adesso, dataDiPubblicatione);

            if (differenzaOre === 0) {
                const differenzaMinuti = differenceInMinutes(adesso, dataDiPubblicatione)
                if (differenzaMinuti === 0) {
                    return differenceInSeconds(adesso, dataDiPubblicatione) + ' secondi';
                }
                return differenzaMinuti + ' minuti';
            }

            return differenzaOre + ' ore';
        }

        return differenzaGiorni + ' giorni';
    }

    return (<Col className='d-sm border border-1 border-secondary-subtle mb-1 mt-1 bg-white rounded col-md-6  pt-2 ms-3' style={{ width: '90%' }}>
        <p style={{ fontSize: 1 + 'em', fontWeight: 'bold', margin: 0.2 + 'em' }}>
            {
                image ? (
                    <img src={image} className='rounded-circle me-2' alt="avatar" width={40 + 'px'} />
                ) : (
                    <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" className='rounded-circle me-2' alt="avatar" width={40 + 'px'} />
                )
            }
            {username}</p>
        <p style={{ fontSize: 0.7 + 'em' }}>{calcolaDifferenza(date1)}</p>
        <p style={{ fontSize: 1 + 'em' }}>{text}</p>
        <p style={{ fontSize: 0.7 + 'em', margin: 0.2 + 'em' }}>Ultimo aggiornamento: {formatData(date2)}</p>
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