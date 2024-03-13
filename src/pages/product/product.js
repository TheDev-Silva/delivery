import { View, Text, StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons'
import { useState } from 'react'
import LoadingModal from '../../model/loadingModal'
import React from 'react'

export default function Product() {

   const [isLoading, setIsLoading] = useState(false)
   const navigation = useNavigation()
   const route = useRoute()
   //const { userName } = route.params;
   //console.log("Usuário logado", userName);


   /* function handleLogout() {

      setIsLoading(true)
      setTimeout(() => {
         navigation.navigate('Welcome')
         //console.log(`usuário: ${userName}, deslogado!`);
         setIsLoading(false)
      }, 2000);
   } */
   return (
      <View style={styles.container}>
         <View style={styles.header}>

            <View style={styles.user}>
               <View style={styles.containerUser}>
                  <FontAwesome name='user' size={20} color="#000" />
               </View>
               <Text style={styles.text1}>{userName}</Text>
            </View>
            <TouchableOpacity style={styles.buttonLogout} onPress={handleLogout}>
               {isLoading ? 
                  (<Text style={styles.textLogout}><ActivityIndicator size={16} color='#fff'/></Text>)
                  : (
                     <Text style={styles.textLogout}>logout</Text>
                  )}

            </TouchableOpacity>
            <LoadingModal visible={isLoading} />
         </View>

      </View>
   )
};
const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingTop: 40,
      paddingHorizontal: 20,
      backgroundColor: "#00ccff"
   },
   header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   user: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10
   },
   containerUser: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      borderRadius: 100,
      paddingLeft: 8,
      paddingRight: 8,
      paddingBottom: 5,
      paddingTop: 5,
   },
   text1: {
      fontSize: 20,
      fontWeight: 'bold'
   },
   buttonLogout: {
      backgroundColor: '#000',
      paddingVertical: 10,
      paddingHorizontal: 30,
      borderRadius: 5
   },
   textLogout: {
      color: '#fff',
      fontSize: 16,
      textTransform: 'uppercase'
   }
})