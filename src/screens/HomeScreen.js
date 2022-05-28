import react from "react";
import {View, Text} from 'react-native'; 
import ListItem from '../components/ListItem';
import { getMarketData } from '../crypto/services';

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Text>Home Screen</Text>
        

        <SafeAreaView style={styles.container}>
        <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({ item }) => (
            <ListItem
            name={item.name}
            symbol={item.symbol}
            currentPrice={item.current_price}
            priceChangePercentage7d={item.price_change_percentage_7d_in_currency}
            logoUrl={item.image}
            onPress={() => openModal(item)}
            />
        )}
        ListHeaderComponent={<ListHeader />}
        />
        </SafeAreaView>
</View>

    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    titleWrapper: {
      marginTop: 20,
      paddingHorizontal: 16,
    },
    largeTitle: {
      fontSize: 24,
      fontWeight: "bold",
    },
    divider: {
      height: StyleSheet.hairlineWidth,
      backgroundColor: '#A9ABB1',
      marginHorizontal: 16,
      marginTop: 16,
    },
    bottomSheet: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: -4,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
  });

export default HomeScreen; 