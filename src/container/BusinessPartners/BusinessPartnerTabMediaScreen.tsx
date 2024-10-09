import React, { useState } from 'react';
import { Button, Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const BusinessPartnerTabMediaScreen = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openCamera = async () => {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission denied');
        return;
      }

      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled) {
        setSelectedImage(result.assets[0].uri);
      }
    } catch (error) {
      console.log('Error capturing image:', error);
    }
  };

  const openGallery = async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission denied');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled) {
        setSelectedImage(result.assets[0].uri);
      }
    } catch (error) {
      console.log('Error selecting image:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center' }} >
      { //<Text style={{ fontSize: 20, marginBottom: 20 }}>Select an option:</Text> 
      }

      <TouchableOpacity style={{ marginBottom: 20, marginLeft: 10 }} onPress={openCamera}>
        <Text style={{ fontSize: 30, verticalAlign: 'middle' }}>
          <MaterialCommunityIcons
                name="camera"
                style={[
                    { fontSize: 48 }
                ]}
            />
          { "  " } Foto erstellen
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ marginBottom: 20, marginLeft: 10 }} onPress={openGallery}>
        <Text style={{ fontSize: 30, verticalAlign: "middle" }}>
          <MaterialCommunityIcons
                name="image-multiple"
                style={[
                    { fontSize: 48 }
                ]}
            />
          { "  " } Aus Mediathek wählen
        </Text>
      </TouchableOpacity>

      {selectedImage && (
        <View>
          <Image
            source={{ uri: selectedImage }}
            style={{ width: 200, height: 200 }}
          />
          <Button title='Clear Image' onPress={() => setSelectedImage(null)} />
        </View>
      )}
    </View>
  );
};

export default BusinessPartnerTabMediaScreen;
