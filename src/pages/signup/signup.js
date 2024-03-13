import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native'
import * as Animatable from "react-native-animatable"
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import LoadingModal from '../../model/loadingModal'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function SignUp() {

   const navigation = useNavigation()
   const [isLoading, setIsLoading] = useState(false)
   const [userName, setUserName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [passwordValue, setPasswordValue] = useState('')
   //const [cadastro, setCadastro] = useState([])

   function handleNewAccount() {
      setIsLoading(true);
    
      setTimeout(() => {
        if (!email || !password || !userName || !passwordValue) {
          setIsLoading(false);
          Alert.alert("Por favor, preencha todos os campos!");
          return;
        }
    
        if (password !== passwordValue) {
          setIsLoading(false);
          Alert.alert("Erro", "As senhas não coincidem. Por favor, digite novamente!");
          return;
        }
    
        if (password === 'facil') {
          setIsLoading(false);
          Alert.alert("Erro", "A senha não pode ser 'facil'. Por favor, escolha outra senha.");
          return;
        }
    
        const novoCadastro = { userName, email, password };
    
        AsyncStorage.getItem('cadastro')
          .then((cadastro) => {
            const cadastroArray = cadastro ? JSON.parse(cadastro) : [];
            cadastroArray.push(novoCadastro);
    
            return AsyncStorage.setItem('cadastro', JSON.stringify(cadastroArray));
          })
          .then(() => {
            Alert.alert('Cadastro salvo com sucesso!');
            setIsLoading(false);
            navigation.navigate('SignIn');
          })
          .catch((error) => {
            console.log('Erro ao salvar cadastro', error);
            Alert.alert('Erro', 'Erro ao salvar o cadastro. Por favor, tente novamente mais tarde.');
            setIsLoading(false);
          });
      }, 2000);
    }
   

   return (

      <View style={styles.container}>
         <Animatable.View animation="fadeInLeft" delay={600} style={styles.containerHeader}>
            <Text style={styles.message}>Register</Text>
         </Animatable.View>
         <Animatable.View delay={1500} animation="fadeInUp" style={styles.containerForm}>
            <ScrollView style={{flexGrow: 1, marginBottom: 20}}>


               <Text style={styles.title}>Nome completo</Text>

               <TextInput
                  placeholder='Digite seu nome completo'
                  style={styles.input}
                  keyboardType={'default'}
                  value={userName}
                  onChangeText={setUserName}
               />

               <Text style={styles.title}>Email</Text>

               <TextInput
                  placeholder='Digite e-mail'
                  style={[styles.input, {textTransform: 'lowercase'}]}
                  value={email}
                  onChangeText={setEmail}
                  keyboardType={'email-address'}
               />
               <Text style={styles.title}>Senha</Text>
               <TextInput

                  placeholder='Digite sua senha'
                  style={styles.input}
                  value={password}
                  onChangeText={setPassword}
                  //secureTextEntry={true}
               />
               <Text style={styles.title}>Senha novamente</Text>
               <TextInput
                  placeholder='Digite sua senha'
                  style={styles.input}
                  //secureTextEntry={true}
                  value={passwordValue}
                  onChangeText={setPasswordValue}
               />

               <TouchableOpacity style={styles.buttonAcessar} onPress={handleNewAccount}>
                  <Text style={styles.buttonText} >cadastrar</Text>
               </TouchableOpacity>
              <LoadingModal visible={isLoading}/>
            </ScrollView>
            
         </Animatable.View>

      </View>


   )
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#00ccff'
   },
   containerHeader: {
      marginTop: '20%',
      marginBottom: '20%',
      paddingStart: '5%'
   },
   message: {
      fontSize: 32,
      fontWeight: 'bold',
      color: "#fff",

   },
   containerForm: {
      backgroundColor: '#fff',
      flex: 1,
      borderTopRightRadius: 25,
      borderTopLeftRadius: 25,
      paddingEnd: '5%',
      paddingStart: '5%'
   },
   title: {
      fontSize: 20,
      marginTop: 28,
   },
   input: {
      borderBottomWidth: 1,
      height: 40,
      marginBottom: 12,
      fontSize: 16
   },
   buttonAcessar: {
      backgroundColor: '#00ccff',
      paddingVertical: 15,
      marginTop: 14,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      borderRadius: 50,
   },
   buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 22,
      textTransform: 'uppercase'
   },
   buttonRegister: {
      marginTop: 14,

   },
   registerText: {
      fontSize: 16
   },
   textBack: {
      fontWeight: 'bold',
      color: '#000'

   },

})