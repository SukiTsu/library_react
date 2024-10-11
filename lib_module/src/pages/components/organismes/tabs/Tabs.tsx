import { useState } from 'react'
import '../../../../assets/css/pages/tabs.css'
import React from 'react'

/**
 * Interface représentant la Tabs
 */
interface PropsTabs{

    /** Listes des titres présent dans la tabs qui auront des liens de redirection */
    titles : string[]

    /** Liste des contenus qui seront affiché lorsqu'un des titre est cliqué */
    listContent : string[]

    /** Couleur de fond */
    color : string
}

/**
 * Composant Tabs listant les liens qui afficheront un contenu lorsqu'ils sont cliqués
 * @param titles - Listes des titres présent dans la tabs qui auront des liens de redirection
 * @param listContent - Liste des contenus qui seront affiché lorsqu'un des titre est cliqué
 * @param color - Couleur de la box
 * @returns Composant TSX Tabs
 */
const Tabs : React.FC<PropsTabs> = ({titles, listContent, color}) => {
    if (titles.length != listContent.length) return null
    const listTitlesLinks = []

    const [content, setContent] = useState(String || null)

    const openContent = (newContent : string) => {
        setContent(newContent)
        return undefined
    }

    for (let i=0;i<titles.length;i++){
        listTitlesLinks.push(
            <div key={i} className={`tab ${color}`} onClick={() =>openContent(listContent[i])}>
                <a key={i}>{titles[i]}</a>
            </div>
        )
    }
    return(
        <div className="tabs-container">
            <div className={`tabs-header ${color}`}>
                {listTitlesLinks}
            </div>
            <div className="tabs-content">
                {content}
            </div>
        </div>
    )
}

export default Tabs