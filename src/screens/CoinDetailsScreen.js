import react, {useState, useEffect} from "react";
import { View, Text, SafeAreaView,
    StyleSheet, TouchableOpacity, Image
} from "react-native";

import Ionicons from '@expo/vector-icons/Ionicons';
import SearchScreen from "./SearchScreen";

const CoinDetailsScreen = ({navigation, route}) => {
    //const item = route.params.item;
    // const [data, setData] = useState([]); 
    
    // useEffect (() => {
    //     const fetchMarketData = async () => {
    //         const marketData = await getMarketData(); 
    //         setData(marketData);
    //     }

    //     fetchMarketData(); 
    // }, []); 

    

    return (
        <SafeAreaView style = {styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate(SearchScreen)}>
                    <Ionicons name="arrow-back-outline" size={30} color="white"/> 
                </TouchableOpacity>
                <View style={styles.textWrapper}> 
                    <Text style={{color: "white", fontSize: 18, fontWeight: '700'}}>Bitcoin</Text>
                    <Text style={{color: "white", fontSize: 12, fontWeight: '600'}}>BTC</Text>
                </View>

                <TouchableOpacity>
                    <Ionicons name="star" size={30} color="white"/> 
                </TouchableOpacity>
            </View>

            <View style={styles.priceView}>
                <Text style={{color: "white", fontSize: 28, fontWeight: '700'}}>$29,403</Text>
                <Text style={{color: "red", fontSize: 12, fontWeight: '600', marginTop: 8}}>-0.30%</Text>
            </View>

            <View style={styles.chart}>
                <Image style = {styles.image} source={require("../assets/images/Vector8.png")}/> 
            </View>

            <TouchableOpacity style={styles.bottom} onPress={() => alert('')}>
                <Text style={{color: "white", fontWeight: '500', fontSize: 12 }}>Make a prediction</Text>
            </TouchableOpacity>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: "#171930",
    }, 
    header: {
        paddingHorizontal: 20,
        marginTop: 15, 
        flexDirection: "row",
        justifyContent: "space-between",
    },

    textWrapper: {
        alignItems: "center",
    }, 

    priceView: {
        alignItems: "center", 
        justifyContent: "center",
        marginTop: 36,
    }, 

    bottom: {
        backgroundColor: "#266ED7",
        height: 52,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
        borderRadius: 8,
        marginLeft: 20,
        marginRight: 20,
    }, 
    chart: {
        marginLeft: 20,
        marginRight: 20,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
        backgroundColor: "#1E203B",
        height: 235,
    }
})

export default CoinDetailsScreen; 