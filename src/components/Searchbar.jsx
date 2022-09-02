import { Component } from "react";
import styles from "../css/Searchbar.module.css"
import PropTypes from "prop-types"


export default class Searchbar extends Component{
    

    render(){
        const {onSubmit} = this.props
        return(
        <header className={styles.Searchbar}>
            <form className={styles.SearchForm} onSubmit={onSubmit}>
            <button type="submit" className={styles["SearchForm-button"]}>
                <span className={styles["SearchForm-button-label"]}>Search</span>
            </button>
        
            <input
                className={styles["SearchForm-input"]}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
            />
            </form>
        </header>)
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func
}