import axios from "axios";

export default axios.create({
    baseURL: "https://restful.training/api/blog",
    headers: {
        // make sure we get JSON back
        Accept: "application/json",

        // use your own key
        Authorization: "Bearer 15|6XYtGu3nnxCNwTiwPbttCwNB6UdQq7glnC8HBN4N",
    },
});