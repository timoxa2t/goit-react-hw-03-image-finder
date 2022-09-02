import { Component } from "react";
import styles from "../css/Button.module.css"
import PropTypes from "prop-types"

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

Button.propTypes = {
    onClick: PropTypes.func
}