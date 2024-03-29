import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProductList = () => {

   const navigation = useNavigation()
   const [product, setProduct] = useState([])
   const handleProduct = (item) => {
      navigation.navigate('Detalhes', { produto: item })
      console.log(item);
   }
   
   useEffect(()=>{

      const DataProduct = require('../armazem/products.json')

      setProduct(DataProduct)

   },[])
/*    const ProductList =
      [
         {
            id: 1,
            name: "Hamburguer Gourmet Grelhado",
            price: 25.90,
            image: require("../assets/banner/banner-hamburguer.jpg"),
            description: "Com queijo, tomate, cebola, 2 carnes, bacon, e batata frita"
         },
         {
            id: 2,
            name: "Hamburguer de Queijo Perfeito",
            price: 20.90,
            image: require("../assets/banner/hamburguer-de-queijo.jpg"),
            description: "Com queijo, peacles, tomate, alface, uma mega carne"
         },
         {
            id: 3,
            name: "Cheeseburguer Gourmet com Carne",
            price: 30.00,
            image: require("../assets/banner/cheeseburguer-gourmet-com-carne.jpg"),
            description: "Pão Rústico, Com queijo, peacles, tomate, cebola, alface, uma mega carne, bacon"
         },
         {
            id: 4, "name": "Hamburguer Americano",
            price: 24.90,
            image: "../assets/banner/hamburguer-americano.jpg",
            description: "Com queijo, ovo, peacles, carne, alface e batata frita"
         }


      ]
 */
      


   const renderItem = ({ item }) => (

      <TouchableOpacity onPress={() => handleProduct(item)} >
         <View style={styles.item} key={item.id}>
            <Image source={{uri: item.image}} style={styles.image} />
            <View style={styles.relative}>
               <View>
                  <Text style={styles.title} ellipsizeMode='tail' numberOfLines={1}>{item.name}</Text>
                  <Text style={styles.price}>R$ {item.price}</Text>
               </View>

            </View>
         </View>
      </TouchableOpacity>



   );

   return (
      <View style={styles.container}>
         <FlatList
            data={product}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal={false}
            showsVerticalScrollIndicator={false}
         />
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingTop: 5,
      //backgroundColor: 'red'
   },
   item: {
      margin: 10,
      width: 350,
      height: 200,

      shadowColor: '#ff5555',
      shadowOffset: {
         width: 0,
         height: 2
      },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 5
   },
   image: {
      width: '100%',
      height: 200,
      resizeMode: 'cover',
      borderRadius: 15,


   },
   title: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      textShadowColor: '#000',
      textShadowRadius: 2
   },
   price: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 25,
      textShadowColor: '#000',
      textShadowRadius: 2
   },
   relative: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      padding: 20,
      borderBottomEndRadius: 8,
      backgroundColor: 'rgba(255,255,255, .2)',

   }
});

export default ProductList;
