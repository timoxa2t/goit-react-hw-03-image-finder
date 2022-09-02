import axios from 'axios';

const defaultParams = {
    key: "29290264-6b96edcd60ed9fd64e47be52c",
    image_type: "photo",
    orientation: "horizontal",
    safesearch: false, 
    per_page: 12
}

let page = 1
let q=""

function sendRequest(params){
    
    const allParams = new URLSearchParams({...defaultParams, ...params})
 
    const url = "https://pixabay.com/api/?" + allParams
 
    return axios.get(url)
     .then((res) => {
        const {data} = res
        data.showLoadMore = page * defaultParams.per_page < data.totalHits
        return data
     })
     .catch(err => err)
}

function getNextPage(){
    page++
    return sendRequest({page, q})
}

function getImages(queryText){
    q = queryText
    page = 1
    return sendRequest({page, q})
}

export {sendRequest, getNextPage, getImages}