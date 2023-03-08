
import { ScrollView, StyleSheet, Text, View } from "react-native"
import NewsList from "../components/NewsList"
import useNews from "../hooks/useNews"

const Home = () => {

    const { news } = useNews()

    return (
        <View style={styles.container}>
            <Text style={styles.titles}>NEWS</Text>
            <NewsList list={news} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        margintop: 10,
        alignItems: "center"
    },
    titles: {
        fontSize: 30,
        fontWeight: "bold",
        marginVertical: 20,
    }
})

export default Home