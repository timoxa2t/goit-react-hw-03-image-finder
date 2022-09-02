import { Component } from "react";
import styles from "../css/ImageGalleryItem.module.css"
import PropTypes from "prop-types"

export default class ImageGalleryItem extends Component{
    
    render(){
        const {smallImg, showBigImage, id} = this.props
        return (
            <li 
                id={id}
                className={styles["ImageGalleryItem"]} 
                onClick={showBigImage}
            >
                <img className={styles["ImageGalleryItem-image"]} src={smallImg} alt="" />
            </li>
        )
    }
} 


ImageGalleryItem.propTypes = {
    smallImg: PropTypes.string, 
    showBigImage: PropTypes.func, 
    id: PropTypes.number
}
