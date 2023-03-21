import { GET_POPULAR } from "../types"
import Axios from "axios";
const getPopular = () => {
    return dispatch => {
        Axios({
            url: "http://localhost:3005/api/v1/nowPlaying",
            method: "GET"
        })
            .then(result => {
                dispatch(savePopular(result.data))
            })
    }

}
const savePopular = (popular) => {
    return {
        popular,
        type: GET_POPULAR
    }
}
export {  getPopular }