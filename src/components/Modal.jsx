import { Component } from "react";

import styles from '../css/Modal.module.css'
import PropTypes from "prop-types"


export default class Modal extends Component{
    

    render(){

        const {largeImg, onClick} = this.props
        return (
            <div className={styles["Overlay"]} onClick={onClick}>
                <div className={styles["Modal"]}>
                    <img src={largeImg} alt="" />
                </div>
            </div>
        )
    }
}

Modal.propTypes = {
    largeImg: PropTypes.string, 
    onClick: PropTypes.func
}