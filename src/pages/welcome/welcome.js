import { useState, useCallback, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, RefreshControl, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';
import LoadingModal from '../../model/loadingModal';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Welcome() {

   const navigation = useNavigation()
   const [isLoading, setIsLoading] = useState(false)
   const [buttonClicked, setButtonClicked] = useState(false)
   const [refresh, setRefresh] = useState(false)
   const [loggedIn, setLoggedIn] = useState(false)
   const [name, setName] = useState('')
   

   const OnRefresh = useCallback(() => {

      setRefresh(true)
      setTimeout(() => {

         setRefresh(false)
         navigation.navigate('Welcome')
      }, 1000)
   }, [])



   // Verifique se o usuário está logado
   const checkIfLoggedInUser = async () => {


      try {
         const cadastroString = await AsyncStorage.getItem('cadastros');
         console.log("dados de usuário", cadastroString);

         if (cadastroString) {
            const cadastros = JSON.parse(cadastroString);
            if (cadastros) {

               setIsLoading(true)
               setTimeout(() => {
                  navigation.navigate('Product', { cadastro: cadastros[0] });
                  setIsLoading(false)
               }, 2000);

               console.log('resultado:', cadastros);
            } else {
               console.error("ERROR, Array cadastro não possui elementos usuficientes!")
            }

         } else {
            navigation.navigate('SignIn')
         }
      } catch (error) {
         console.log('Erro ao verificar login:', error);
      }


   };
   useEffect(() => {
      checkIfLoggedInUser()
   }, [])



   return (
      <View style={styles.container}>
         <StatusBar style='light' />
         <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ flexGrow: 1 }}
            refreshControl={<RefreshControl refreshing={refresh} onRefresh={OnRefresh} />}

         >
            <ImageBackground source={require('../../assets/fundoback.png')} style={{
               flex: 1,
            }}
               resizeMode="cover"
            >


               <View style={styles.subContainer}>

                  <Animatable.Image
                     animation={'fadeInUp'}
                     source={require('../../assets/logo-dentro.png')}
                     resizeMode="contain"
                     style={styles.image}
                  />

               </View>
               <Animatable.View delay={1000} animation='fadeInUp' style={styles.containerForm}>
                  <Text style={styles.title}>Tá com fome { }?</Text>
                  <Text style={styles.text}>Que tal fazer um pedido?</Text>
                  <View style={styles.contentButton}>
                     <TouchableOpacity
                        style={styles.botton}
                        onPress={checkIfLoggedInUser}
                     >

                        <Text style={styles.text1}>
                           Acessar
                        </Text>

                     </TouchableOpacity>


                  </View>
                  <LoadingModal visible={isLoading} />
               </Animatable.View>

            </ImageBackground>

         </ScrollView>

      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   subContainer: {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center',


   },
   image: {
      width: '70%',
      objectFit: 'contain'
   },
   textContent: {
      alignItems: 'center',
      justifyContent: 'center'

   },
   containerForm: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      paddingStart: '5%',
      paddingEnd: '5%'
   },
   title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 28,
      marginBottom: 12
   },
   text: {
      color: '#a1a1a1',
      fontSize: 15,
   },
   text1: {
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      letterSpacing: 1,
      textTransform: 'uppercase',

   },
   contentButton: {
      position: 'absolute',
      bottom: '20%',
      width: '100%',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
   },
   botton: {
      backgroundColor: '#00ccff',
      alignItems: 'center',
      borderRadius: 50,
      paddingVertical: 15,
      paddingHorizontal: 100,
      fontWeight: 'bold',
   }
});
