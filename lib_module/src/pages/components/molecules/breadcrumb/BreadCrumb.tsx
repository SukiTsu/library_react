import React from 'react'
import '../../../../assets/css/pages/breadcrumb.css'

/**
 * Interface représentant un BreadCrumb
 */
interface PropsBreadCrumb{
    /** Liste d'onglet qui seront listé */
    listOnglet : string[]

    /** Liste de chemin de redirection pour les onglet */
    listLien : string[]

    /** Couleur de fond*/
    bkColor: string
}

/**
 * Composant Breadcrumbs qui affiche une liste d'onglets.
 * @param props - Propriété du composant
 * @param listOnglet - Liste des onglet cliquable qui seront affichés dans le BreadCrumbs
 * @param listLien - Liste de liens qui seront attribués à la liste d'onglet
 * @param bkColor - Couleur de fond du breadcrumbs
 * @returns Composant JSX BreandCrumbs
 */
const BreadCrumb: React.FC<PropsBreadCrumb> = ({listOnglet, listLien, bkColor}) =>{
    if (listOnglet.length !== listLien.length) {
        return null;
    }
    let htmlElement = []
    for (let i=0;i<listOnglet.length;i++){
        htmlElement.push(
            <li key={i}>
                <a href={listLien[i]}>{listOnglet[i]}</a>
            </li>
        )
    }
    return (
        <ul className={`breadcrumb ${bkColor}`}>
            {htmlElement}
        </ul>
    
    )
}

export default BreadCrumb