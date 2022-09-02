import { Component } from "react";
import styles from "../css/Button.module.css"

export default class Button extends Component{
    

    render(){

        const {onClick} = this.props
        return (
            <button 
                className={styles["Button"]} 
                onClick={onClick}
            >
                Load more
            </button>
        )
    }
}