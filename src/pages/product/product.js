import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'
import { useState } from 'react'
import LoadingModal from '../../model/loadingModal'
import AsyncStorage from '@react-native-async-storage/async-storage'
import ProductList from '../../productList/productList'

export default function Product() {

   const [isLoading, setIsLoading] = useState(false)
   const navigation = useNavigation()
   const routeSignIn = useRoute()
   const routeWelcome = useRoute()
   const { name } = routeSignIn.params;
   const { cadastro } = routeWelcome.params;
   console.log("Usuário logado", cadastro);


   async function handleLogout() {
      setIsLoading(true);

      try {
         await AsyncStorage.removeItem('name')
            .then(() => {
               setTimeout(() => {


                  console.log("Deslogando");

                  // Redirecione para a tela de login
                  navigation.navigate('SignIn')
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
               <View style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                  <Text style={{ fontSize: 14 }}>Bem vindo</Text>
                  <Text style={styles.text1}>{name}</Text>
               </View>
               
            </View>
            <View style={{ gap: 5,  alignItems: 'center' }}>

               <TouchableOpacity style={styles.buttonLogout} onPress={handleLogout}>
                  <MaterialIcons name="logout" size={24} color="#000"/>
                  
               </TouchableOpacity>
            </View>

            <LoadingModal visible={isLoading} />
         </View>
         <View style={styles.content}>
            <View style={styles.contentImage}>
               <Text style={{fontSize: 25, textTransform: 'uppercase', paddingTop: 10,}}>Hamburguers </Text>
               <ProductList />
               {/* <View style={{}}>
                  <TouchableOpacity>
                     <Text>products</Text>
                  </TouchableOpacity>
                  
               </View> */}
            </View>

         </View>

      </View>
   )
};
const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#00ccff"
   },
   header: {

      marginBottom: 30,
      paddingTop: 40,
      paddingHorizontal: 20,
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
      width: 35,
      height: 35
   },
   text1: {
      fontSize: 18,
      fontWeight: 'bold'
   },
   buttonLogout: {


      borderRadius: 5
   },
   textLogout: {
      color: '#fff',
      fontSize: 16,
      textTransform: 'uppercase'
   },
   content: {
      flex: 1,
      backgroundColor: '#red',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
   },
   contentImage: {
      flex: 1,
      alignItems: 'center',
      /* justifyContent: 'center', */
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
   },

})