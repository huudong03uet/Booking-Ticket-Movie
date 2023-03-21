import { GET_TOP_RATED } from "../types"
import Axios from "axios";
const getTopRated = () => {
    return dispatch => {
        Axios({
            url: "http://localhost:3005/api/v1/nowPlaying",
            method: "GET"
        })
            .then(result => {
                
                dispatch(saveTopRated(result.data))
            })
    }

}
const saveTopRated = (topRated) => {
    return {
        topRated,
        type: GET_TOP_RATED
    }
}
export {  getTopRated }