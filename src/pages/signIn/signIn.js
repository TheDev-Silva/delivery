import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import LoadingModal from '../../model/loadingModal'
import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function SignIn() {

  const navigation = useNavigation()
  const [buttonClicked, setButtonClicked] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userName, setUserName] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  /* function handleSignIn() {
    setIsLoading(true);
    setButtonClicked(false);
    setTimeout(() => {
      if (email === "" || password === "" || userName === "") {
        Alert.alert("Preencha todos os campos!");
        setIsLoading(false);
        return;
      } else {
        AsyncStorage.getItem('cadastro')
          .then((cadastro) => {
            if (cadastro) {
              const cadastroArray = JSON.parse(cadastro);
              console.log("Dados do cadastro", cadastroArray);
              const user = cadastroArray.find(item => item.email === email && item.password === password && item.userName === userName);
  
              if (user) {
                console.log("Usuário autenticado:", user.userName);
                setIsLoading(false);
                setButtonClicked(false);
                navigation.navigate('Product', { userName: user.userName });
              } else {
                Alert.alert("Credenciais inválidas!");
                setIsLoading(false);
                setButtonClicked(false);
              }
            } else {
              Alert.alert("Nenhum cadastro encontrado!");
              setIsLoading(false);
              setButtonClicked(false);
            }
          })
          .catch((error) => {
            console.log("Erro ao recuperar o cadastro", error);
            Alert.alert("Erro ao tentar fazer login. Tente novamente mais tarde.");
            setIsLoading(false);
            setButtonClicked(false);
          });
      }
    }, 2000);
  } */


  const handlerClickForgot = () => {
    setIsLoading(true)
    setButtonClicked(false)

    setTimeout(() => {
      navigation.navigate('Forgot')
      setButtonClicked(false)
      setIsLoading(false)
    }, 2000);
  }
  const handleRegister = () => {

    setIsLoading(true)
    setButtonClicked(false)

    setTimeout(() => {
      navigation.navigate('SignUp')
      setButtonClicked(false)
      setIsLoading(false)
    }, 2000);

  }


  return (

    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={600} style={styles.containerHeader}>
        <Text style={styles.message}>Sign In</Text>
      </Animatable.View>
      <Animatable.View delay={1500} animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Email</Text>
        <TextInput
          placeholder='Digite e-mail'
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.title}>Senha</Text>
        <TextInput
          placeholder='Digite sua senha'
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.buttonAcessar} onPress={handleSignIn}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>
        <LoadingModal visible={isLoading} />
        <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>

          <TouchableOpacity style={styles.buttonRegister} onPress={handleRegister}>
            <Text style={styles.registerText}>Não possui conta? <Text style={{ fontWeight: 'bold' }}>cadastre-se.</Text></Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonRegister} onPress={handlerClickForgot}>
            <Text style={styles.registerText}>Esqueci senha?</Text>
          </TouchableOpacity>

        </View>

        <LoadingModal visible={isLoading} />

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
    fontSize: 22
  },
  buttonRegister: {
    marginTop: 14,

  },
  registerText: {
    fontSize: 16
  },
  buttonBack: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#00ccff',
    padding: 20,
    borderRadius: 10,

  },

})