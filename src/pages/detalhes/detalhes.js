import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

export default function DetalhesProduct() {

   const router = useRoute()
   const { produto } = router.params
   console.log('produto: ', produto)

   return (

      <ImageBackground source={{ uri: produto.image }} style={styles.ImageBackground}>
         <View style={styles.container}>
            <Text style={styles.nameText}>{produto.name}</Text>

            <View style={styles.imageContainer}>
               <Image source={{ uri: produto.image }} style={styles.image} />
               <View style={styles.containerDescription}>
                  <Text style={styles.textDescription}>{produto.description}</Text>
                  <View style={styles.containerCard}>
                     <Text style={styles.textPrice}>R$ {produto.price}</Text>
                     <TouchableOpacity style={styles.textbtn}>
                        <Text style={styles.textAdd} >Add</Text><Feather name='shopping-cart' size={25}/>
                     </TouchableOpacity>
                  </View>

               </View>
            </View>
         </View>
      </ImageBackground>



   )
}
const styles = StyleSheet.create({
   container: {

      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0, .8)',
   },
   ImageBackground: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: "100%",
      resizeMode: 'strach'

   },
   nameText: {
      justifyContent: 'center',
      textAlign: 'center',
      marginTop: 30,
      fontSize: 30,
      paddingBottom: 20,
      color: '#fff',
      textTransform: 'uppercase'
   },
   imageContainer: {
      overflow: 'hidden',
      borderTopLeftRadius: 50,
      borderBottomLeftRadius: 20,
      borderTopRightRadius: 100,
      width: 370,


   },

   containerCard: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
   },
   containerDescription: {
      height: 200,
      flexDirection: 'column',
      justifyContent: 'space-between'
   },
   image: {
      width: '100%',
      height: 250,
      resizeMode: 'cover',
      borderTopLeftRadius: 35,
      borderTopRightRadius: 85,
      borderBottomRightRadius: 85,
      borderBottomLeftRadius: 50,


   },
   textDescription: {
      marginTop: 30,
      fontSize: 20,
      paddingTop: 10,
      color: '#fff'

   },
   textPrice: {
      fontSize: 40,
      paddingTop: 10,
      color: '#fff'
   },
   textbtn: {
      
      backgroundColor: '#00ccff',
      padding: 60,
      paddingVertical: 20,
      borderRadius: 8,
   },
   textAdd: {
      fontSize: 20,
      color: '#000',

   },
})