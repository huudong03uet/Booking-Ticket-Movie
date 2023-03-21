import { GET_UPCOMING } from "../types"
import Axios from "axios";
const getUpcoming = () => {
    return dispatch => {
        Axios({
            url: "http://localhost:3005/api/v1/nowPlaying",
            method: "GET"
        })
            .then(result => {
               
                dispatch(saveUpcoming(result.data))
            })
    }

}
const saveUpcoming = (upcoming) => {
    return {
        upcoming,
        type: GET_UPCOMING
    }
}
export { getUpcoming }