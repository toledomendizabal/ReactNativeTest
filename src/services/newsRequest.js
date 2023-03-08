import axios from "axios"
import newsapi from "../constants/newsApi"
import queryString from "querystring"

const newsRequest = {
    async getEncoded() {
        let parameters = { q: newsapi.Q, apiKey: newsapi.API_KEY }
        const newsResponse = await axios.get(`${newsapi.API_URL}?${queryString.stringify(parameters)}`)
        if (newsResponse && newsResponse.status === 200) {
            return newsResponse?.data?.results || newsResponse?.data || []
        }
        return []
    }
}

export default newsRequest