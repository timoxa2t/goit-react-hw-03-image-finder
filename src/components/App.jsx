import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Button from "./Button";
import Modal from "./Modal";
import Loader from "./Loader";

import {getImages, getNextPage} from "../services/pixabay"
import styles from '../css/App.module.css'
import { Component } from "react";



function findImg(images, id){
  console.log(images, id)
  return images.find(img => img.id === id)
}

export class App extends Component{

  state = {
    images: [],
    showLoadMore: false,
    showModal: false,
    showLoader: false,
    chosenImg: {}
  }

  constructor(){
    super()
    this.handleSearchClick = this.handleSearchClick.bind(this)
    this.handleLoadMore = this.handleLoadMore.bind(this)
    this.updateImages = this.updateImages.bind(this)
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  handleSearchClick(evt){
    evt.preventDefault()
    const queryText = evt.target[1].value

    this.updateImages(getImages(queryText))
  }

  updateImages(imgPromise, previousImgs = []){
    this.setState({
      showLoader: true
    })
    imgPromise.then(images => {

      this.setState({
        images: [...previousImgs, ...images.hits], 
        showLoadMore: images.showLoadMore,
        showLoader: false
      })
    })
    .catch(err => console.log(err))
  }

  handleLoadMore(){
    this.updateImages(getNextPage(), this.state.images)
  }

  openModal(evt){
    const img = findImg(this.state.images, parseInt(evt.currentTarget.id))
    this.setState({
      showModal: true,
      chosenImg: img
    })
  }

  closeModal(){
    this.setState({
      showModal: false
    })
  }

  render(){
    const {images, chosenImg, showModal, showLoadMore, showLoader} = this.state

    return (
      <div className={styles.app}>
        <Searchbar 
          onSubmit={this.handleSearchClick}
        />
        <ImageGallery images={images} showBigImage={this.openModal}/>

        {showLoader && <Loader/>}

        {!showLoader && showLoadMore && <Button onClick={this.handleLoadMore}/>}

        {showModal && <Modal largeImg={chosenImg.largeImageURL} onClick={this.closeModal}/>}
      </div>
    );
  }
};


