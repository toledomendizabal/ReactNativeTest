import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getNews } from "../redux/news/newsSlice"

const useNews = () => {
    const { news } = useSelector((state) => state.newsSlice)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNews())
    }, [])

    return { news }
}
export default useNews