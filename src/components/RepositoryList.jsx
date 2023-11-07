import React from 'react'
import { StyleSheet, Text, View } from 'react-native';


const RepositoryList = () => {
  return (
    <View style={styles.container}>
      <Text>Rate repository application</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#24292e',
        color: '#ffffff',
        fontSize: 30,
        fontWeight: 'bold',
        padding: 20,
    },
    })

export default RepositoryList