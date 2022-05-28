import react, {useState, useEffect} from "react";
import {View, Text, SafeAreaView,
        TextInput,
        StyleSheet,
        TouchableOpacity, 
        ScrollView, FlatList
    } from 'react-native'; 


import ListItem from '../components/ListItem';

//icons
import Ionicons from '@expo/vector-icons/Ionicons';
import { getMarketData } from "../crypto/services";


const SearchScreen = ({navigation}) => {

    const [isPressed, setIsPressed] = useState(false);
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
            <View style = {styles.searchBox}> 
                <Ionicons name="ios-search" size={20}/>
                <TextInput
                    placeholder="Find cryptocurrency"
                    placeholderTextColor="#000"
                    autoCapitalize="none"
                    style={{flex:1,padding:0, marginLeft: 5, fontSize: 16}}
                />

            </View>

            <View style = {styles.textBox}>    
                <TouchableOpacity onPress={() => setIsPressed(true)}>
                    <Text style={isPressed ? styles.textStylePressed : styles.textStyleNotPressed}>Currencies</Text>
                </TouchableOpacity>


                <TouchableOpacity style = {{marginLeft: 35}}onPress={() => setIsPressed(false)}>
                    <Text style={isPressed ?  styles.textStyleNotPressed : styles.textStylePressed}>Favourite</Text>
                </TouchableOpacity>

            </View>

            <View> 
                {isPressed ? (
                    <View style={styles.currenciesView}>
                        <Text style={styles.today}>Today</Text>
                        <SafeAreaView> 
                            <FlatList 
                                keyExtractor={(item) => item.id}
                                data = {data}
                                renderItem={({item}) => (
                                    <ListItem 
                                        name = {item.name}
                                        symbol = {item.symbol}
                                        currentPrice = {item.current_price}
                                        priceChangePercentage7d = {item.price_change_percentage_7d_in_currency}
                                        logoUrl = {item.image}
                                    />
                                )}
                            />
                        </SafeAreaView>
                        

                    </View>
                ) : (
                    <ScrollView>
                        <Text>BBB</Text> 
                    </ScrollView>
                )}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: "#171930",
        //backgroundColor: "#000000",
        flex: 1,
    }, 

    searchBox: {
        //position:'absolute',
        marginTop: Platform.OS === 'ios' ? 30 : 20,
        flexDirection:"row",
        backgroundColor: '#fff',
        width: '90%',
        alignSelf:'center',
        borderRadius: 7,
        padding: 10,
        //shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
      },

      textBox: {
          flexDirection: "row",
          marginTop: 30, 
          alignItems: "center", 
          marginLeft: 20,
      }, 

      textStylePressed: {
        fontSize: 27, 
        color: "#ffffff",
        fontWeight: '700',
      }, 

      textStyleNotPressed: {
        fontSize: 19,
        color: "gray",
        fontWeight: '700',
        marginTop: 8,
      }, 

      currenciesView: {
          marginTop: 25, 

      },

      today: {
          fontWeight: '700', 
          fontSize: 15,
          color: "#ffffff",
          paddingHorizontal: 20,
      }

})

export default SearchScreen; 