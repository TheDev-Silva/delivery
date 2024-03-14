import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import { CommonActions, useNavigation, useRoute } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons'
import { useState } from 'react'
import LoadingModal from '../../model/loadingModal'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MaterialIcons } from '@expo/vector-icons';

export default function Product() {

   const [isLoading, setIsLoading] = useState(false)
   //const [cadastros, setCadastros ] = useState([])
   const navigation = useNavigation()
   const route = useRoute()
   const { name } = route.params;
   console.log("Usuário logado", name);


   async function handleLogout() {
      setIsLoading(true);

      // Limpe os dados de autenticação

      try {
         await AsyncStorage.removeItem('name')
            .then(() => {
               setTimeout(() => {


                  console.log("Deslogando");

                  // Redirecione para a tela de login
                  navigation.navigate('Welcome')
                  setIsLoading(false);
               }, 2000);
            })
      } catch (error) {
         console.log("Erro ao deslogar", error);
         setIsLoading(false)
      }

   }
   return (
      <View style={styles.container}>
         <View style={styles.header}>

            <View style={styles.user}>
               <View style={styles.containerUser}>
                  <FontAwesome name='user' size={20} color="#000" />
               </View>
               <Text style={styles.text1}>{name}</Text>
            </View>
            <TouchableOpacity style={styles.buttonLogout} onPress={handleLogout}>
            <MaterialIcons name="logout" size={24} color="#fff" />
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
      padding: 10,
      borderRadius: 5
   },
   textLogout: {
      color: '#fff',
      fontSize: 16,
      textTransform: 'uppercase'
   }
})