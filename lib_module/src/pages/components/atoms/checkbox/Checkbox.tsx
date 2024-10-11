import React from 'react'
import '../../../../assets/css/pages/checkbox.css'

/**
 * Interface représentant un checkbox
 */
interface PropsChekBox{
    /** Titre afficher au dessus des cases à checker */
    titleBox : string

    /** Liste des mots qui seront accompagné des cases à checker */
    listChek : string[]

    /** Couleur de fond de la box */
    bkColor : string
}

/**
 * Composant CheckBox avec un titre des cases à checker
 * @param titleBox - Titre afficher au dessus des cases à checker
 * @param listChek - Liste des mots qui seront accompagné des cases à checker
 * @param bkColor - Couleur de fond de la box
 * @returns Composant TSX CheckBox
 */
const CheckBox:React.FC<PropsChekBox> = ({titleBox,listChek,bkColor}) => {
    let html = []
    for (let i=0;i<listChek.length;i++){
        html.push(
            <div className='label-check'>
                <input type="checkbox" id={listChek[i]} name={listChek[i]}/>
                <label htmlFor={listChek[i]}>{listChek[i]}</label>
            </div>
        )
    }
    return (
        <div className={`custom-checkbox ${bkColor}`}>
            <h1>{titleBox}</h1>
            <div className='container-label-check'>
                {html}
            </div>
        </div>
    )
}
export default CheckBox