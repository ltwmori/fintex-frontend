import react, {useState, useEffect} from "react";
import { View, Text, SafeAreaView,
    StyleSheet, TouchableOpacity
} from "react-native";

import Ionicons from '@expo/vector-icons/Ionicons';

const CointDetailsScreen = () => {

    const [data, setData] = useState([]); 
    
    useEffect (() => {
        const fetchMarketData = async () => {
            const marketData = await getMarketData(); 
            setData(marketData);
        }

        fetchMarketData(); 
    }, []); 

    return (
        <SafeAreaView style = {styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Ionicons name="arrow-back-outline" size={30} color="white"/> 
                </TouchableOpacity>
                <View style={styles.textWrapper}> 
                    <Text style={{color: "white", fontSize: 18, fontWeight: '700'}}>AAPL</Text>
                    <Text style={{color: "white", fontSize: 12, fontWeight: '600'}}>Apple Inc</Text>
                </View>

                <TouchableOpacity>
                    <Ionicons name="star" size={30} color="white"/> 
                </TouchableOpacity>
            </View>

            <View style={styles.priceView}>
                <Text style={{color: "white", fontSize: 28, fontWeight: '700'}}>$131.93</Text>
                <Text style={{color: "green", fontSize: 12, fontWeight: '600', marginTop: 8}}>+$0.12 (1,15%)</Text>
            </View>
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
    }
})

export default CointDetailsScreen; 