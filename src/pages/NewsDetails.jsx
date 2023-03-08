import { Text, View } from "react-native"
import NewDetailItem from "../components/NewDetailItem"

const NewsDetails = ({ route }) => {
    return (
        <View>
            <NewDetailItem detail={route.params} />
        </View>
    )
}

export default NewsDetails