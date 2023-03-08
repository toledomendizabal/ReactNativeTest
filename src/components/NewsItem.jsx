import { useNavigation } from "@react-navigation/native"
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { useState } from "react"
import newsApi from "../constants/newsApi"

const NewsItem = ({ news: { author, title, description, urlToImage, publishedAt } }) => {

    const navigation = useNavigation()
    const handlePress = () => {
        navigation.navigate('detail', { author: author, title: title, description: description, urlToImage: urlToImage, publishedAt: publishedAt })
    }

    const [onLoadImage, setLoadImage] = useState(true)


    const imageError = () => {
        setLoadImage(false)
    }
    return (
        <TouchableOpacity onPress={handlePress} style={styles.container}>
            <Image
                style={styles.image}
                source={onLoadImage ?
                    { uri: urlToImage !== null ? urlToImage : newsApi.IMAGE_DEFAULT }
                    :
                    require('../../assets/bitcoin.jpg')}
                onError={() => imageError()}
            />
            <View
                style={styles.text}>
                <Text
                    numberOfLines={1}
                    style={styles.titles}>
                    {title}
                </Text>
                <Text
                    numberOfLines={3}
                    style={styles.shortcontent}
                >
                    {description}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: "row",
        borderRadius: 20,
        backgroundColor: '#fff',
        elevation: 6,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.4,
        shadowRadius: 1,
        marginVertical: 10,
        marginHorizontal: 10,
    },
    text: {
        padding: 10,
        width: 250,
    },
    image: {
        width: 60,
        height: 80,
    },
    titles: {
        fontSize: 18,
        fontStyle: "normal",
        fontWeight: "bold"
    },
    shortcontent: {
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "normal"
    }
})
export default NewsItem