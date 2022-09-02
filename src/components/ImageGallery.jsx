import { Component } from "react";
import styles from "../css/ImageGallery.module.css"
import ImageGalleryItem from "./ImageGalleryItem";

export default class ImageGallery extends Component{
    
    render(){
        const {showBigImage, images} = this.props
        return (
            <ul className={styles.ImageGallery}>
                {images.map(({id, webformatURL}) => (
                    <ImageGalleryItem key={id} smallImg={webformatURL} showBigImage={showBigImage} id={id}/>
                ))}
            </ul>
        )
    }
} 