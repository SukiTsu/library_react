import React from "react"
import '../../../../assets/css/pages/toggle.css'

/**
 * Type Enuméré pour le Toggle
 */

/** Forme physique du Toggle */
type ToggleForm = 'carre' | 'rond'

/** Couleur du Toggle lorsqu'il est enclanché */
type Color = 'red' | 'blue' | 'green'


/**
 * Interface représantent le Toggle
 */
interface PropsToggle{
    /** Forme physique du Toggle */
    form : ToggleForm

    /** Couleur du Toggle lorsqu'il est enclanché */
    color : Color
}

/**
 * Modèle Toggle personnalisable
 * @param form -  Forme physique du Toggle (carre ou rond)
 * @param color - Couleur du Toggle lorsqu'il est enclanché (red, blue ou green)
 * @returns Composant JSX du Toggle
 */
const Toggle: React.FC<PropsToggle> = ({form,color}) => {
    return (
        <div>
            <label className="switch">
                <input className={`input ${color}`} type="checkbox"/>
                <span data-testid="slider" className={`slider ${color} ${form}`}></span>
            </label>
        </div>
    )
}

export default Toggle