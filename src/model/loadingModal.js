import { View, Text, Modal, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'

export default function LoadingModal({ visible }) {
   return (
      <Modal
         animationType='fade'
         transparent={true}
         visible={visible}
         onRequestClose={() => { }}
      >
         <View style={styles.modalcontainer}>
            <View style={styles.modalContent}>
               <ActivityIndicator size="large" color="#fff" />
               <Text style={{color: '#fff'}}>Carregando...</Text>
            </View>

         </View>
      </Modal>
   )
}
const styles = StyleSheet.create({
   modalcontainer: {
      backgroundColor: 'rgba(24,24,24,0.6)',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      
   },
   modalContent: {
      
      
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center'
   }

})