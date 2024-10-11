import { useState } from "react"
import '../../../../assets/css/pages/modal.css'
import React from "react"

/**
 * Interface représant le Modal
 */
interface PropsModal{
    /** Titre h1 afficher dans l'encadré */
    title: string

    /** Contenu présant dans l'encadré */
    content: string

    /** Couleur de fond de l'encadré */
    bkColor: string

    /** Position de l'encadré par rapport à la page */
    position: string
}

/**
 * Composant Modal. Lorsque le bouton est cliqué, un encadré est affiché avec un contenu qui lui est donné
 * @param title - Texte qui sera affiché en tant que titre dans l'encadré
 * @param content - Contenu qui sera dans l'encadré
 * @param bkColor - Couleur de fond de l'encadré
 * @param position - Position où sera afficher l'encadré
 * @returns Composant JSX Modal
 */
const Modal: React.FC<PropsModal> = ({title,content,bkColor,position="centered"}) => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false); 
    };

    if(showModal){
        return (
        <div className={`modal-overlay ${position}`}>
            <div className={`bk ${bkColor}`}>
                <h1>{title}</h1>
                <p>{content}</p>
                <button onClick={closeModal} className={`bt-modal-close ${bkColor}`}>Fermer</button>
            </div>
        </div>
        );
    }
    return (
        <button onClick={openModal}>Ouvrir</button>
    )
  };

  export default Modal;