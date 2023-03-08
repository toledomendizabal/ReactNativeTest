import { ImageBackground, ScrollView, StyleSheet, Text, View, Dimensions, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { useState } from "react"
import newsApi from "../constants/newsApi"


const height = Dimensions.get('screen').height

const NewDetailItem = ({ detail: { author, title, description, urlToImage, publishedAt } }) => {
    const navigation = useNavigation()
    const [onLoadImage, setLoadImage] = useState(true)


    const imageError = () => {
        setLoadImage(false)
    }
    const handleBack = () => {
        navigation.goBack()
    }
    return (
        <View style={stiles.container}>
            <ScrollView>
                <ImageBackground
                    imageStyle={{ opacity: 0.6 }}
                    style={stiles.image}
                    source={onLoadImage ?
                        { uri: urlToImage !== null ? urlToImage : newsApi.IMAGE_DEFAULT }
                        :
                        require('../../assets/bitcoin.jpg')}
                    onError={() => imageError()}
                >
                    <TouchableOpacity onPress={handleBack} style={stiles.backButton}>
                        <FontAwesome name='chevron-left' size={24} color='white'></FontAwesome>
                    </TouchableOpacity>
                    <View style={{ backgroundColor: "#ffffffa6" }}>
                        <Text style={stiles.title}>{title}</Text>
                        <View style={stiles.containerSecondary}>
                            <Text style={stiles.publishedAt}>{publishedAt}</Text>
                            <Text style={stiles.author}>{author}</Text>
                        </View>
                    </View>

                </ImageBackground>
                <Text style={stiles.description}>{description}</Text>
            </ScrollView>
        </View>
    )
}

const stiles = StyleSheet.create({
    container: {
        justifyContent: "center",
        marginVertical: 10,
        marginHorizontal: 10
    },
    backButton: {
        padding: 10,
        position: 'absolute',
        marginTop: 20,
        zIndex: 2,
        top: 0
    },
    image: {
        justifyContent: 'flex-end',
        marginBottom: 20,
        height: height / 2
    },
    containerSecondary: {
        flexDirection: "row",
        justifyContent: "flex-end",
        textAlignVertical: "center",
        marginVertical: 10,
        marginHorizontal: 10
    },
    title: {
        fontSize: 24,
        fontStyle: "normal",
        fontWeight: "bold",
        color: "black"
    },
    publishedAt: {
        fontSize: 10,
        fontStyle: "normal",
        fontWeight: "bold",
        color: "gray",
        marginHorizontal: 10
    },
    author: {
        fontSize: 12,
        fontStyle: "italic",
        fontWeight: "bold",
        color: "gray",
        marginHorizontal: 10
    },
    description: {
        fontSize: 18,
        fontStyle: "normal",
        color: "black"
    }
})

export default NewDetailItem