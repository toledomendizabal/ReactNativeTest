import { FlatList, View } from "react-native"
import NewsItem from "./NewsItem"

const NewsList = ({ list }) => {

    const renderitem = ({ item }) => <NewsItem news={item} />

    return (
        <View>
            <FlatList
                data={list.articles}
                renderItem={renderitem}
                keyExtractor={(item, index) => "" + index}
            />
        </View>
    )
}

export default NewsList