import React from "react";
import '../../../../assets/css/pages/card.css'

/**
 * Interface représentant Card
 */
interface PropsCard{
    /** Titre du composant */
    title : string

    /** Contenu texte du composant */
    content : string

    /** Lient de l'image à afficher */
    srcImg : string

    /** Couleur fond de la Card */
    bkColor : string
}

/**
 * Composant Card affichant une image avec un titre et un contenu
 * @param title - Titre du composant
 * @param content - Contenu texte du composant
 * @param srcImg - Lient de l'image à afficher
 * @param bkColor - Couleur fond de la Card
 * @returns 
 */
const Card:React.FC<PropsCard> = ({title, content, srcImg, bkColor}) => {

    return (
        <div className={`card ${bkColor}`}>
            <img src={srcImg}/>
            <h1 className={`card-title ${bkColor}`}>{title}</h1>
            <p className={`card-description ${bkColor}`}>{content}</p>
        </div>
    )
}

export default Card