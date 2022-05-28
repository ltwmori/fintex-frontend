import React from 'react';
import {View, Text, TouchableOpacity
      , StyleSheet, 
      Image, 
} from 'react-native'; 


import Ionicons from '@expo/vector-icons/Ionicons';

const ListItem = ({name, symbol, currentPrice, priceChangePercentage7d, logoUrl}) => {
  const priceChangeColor = priceChangePercentage7d > 0 ? "green" : "red";

  return (
    <TouchableOpacity>
      <View style={styles.itemWrapper}>
        {/* Left side */}
        <View style={styles.leftWrapper}>
          <Image source={{url: logoUrl}} style={styles.image}/>
          <View style={styles.titlesWrapper}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>{symbol.toUpperCase()}</Text>
          </View>
        </View>

        {/* Right side */}
        <View style={styles.rightWrapper}>
          <View style={styles.textBox}>
            <Text style={styles.title}>${currentPrice.toLocaleString('en-US', { currency: 'USD' })}</Text>
            <Text style={[styles.subtitle, {color: priceChangeColor}]}>{priceChangePercentage7d.toFixed(2)}%</Text>
          </View>
          <Ionicons name={"chevron-forward-outline"} size={25} style={{color: "white"}}/>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemWrapper: {
    paddingHorizontal: 20,
    marginTop: 12, 
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1E203B",
    borderRadius: 11,
    height: 60,
  }, 
  leftWrapper: {
    flexDirection: "row", 
    alignItems: "center",
  },
  image: {
    width: 38, 
    height: 38,
  }, 
  rightWrapper: {
    flexDirection: "row",
    alignItems: "center", 

  },
  titlesWrapper: {
    marginLeft: 13,
  }, 
  textBox: {
    alignItems: "flex-end",
    paddingHorizontal: 12
  },
  title: {
    fontSize: 13,
    color: "#ffffff",
    
  },
  subtitle: {
    marginTop: 4,
    fontSize: 10,
    color: "gray",
  }, 
})

export default ListItem; 