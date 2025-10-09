import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';

export default function Buttons() {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={[styles.button, { backgroundColor: '#333333' }]}>
        <Text style={styles.buttonText}>+ Wishlist</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: '#F2C94D' }]}>
        <Text style={styles.buttonText}>Details</Text>
      </TouchableOpacity>
    </View>
  );
}
