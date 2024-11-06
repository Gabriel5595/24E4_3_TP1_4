import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function App() {
  const images = [
    {
      url: 'https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw160900d3/images/full/full_2022_/2022/full_2022_2733_endurace-7_P05_P5.png',
      title: 'Canyon Endurance 7',
    },
    {
      url: 'https://assets.specialized.com/i/specialized/90620-02_TARMAC-SL6-SW-DISC-DI2-CARB-TARBLK_HERO',
      title: 'Specialized Tarmac SL6',
    },
    {
      url: 'https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_800,h_600,c_pad/EmondaSL5Disc_21_32560_A_Primary',
      title: 'Trek Émonda SL5',
    },
  ];

  const [currentImage, setCurrentImage] = useState(images[0]);

  const changeImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setCurrentImage(images[randomIndex]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title} resizeMode="contain">{currentImage.title}</Text>
      <Image source={{ uri: currentImage.url }} style={styles.image} />
      <Button title="Mudar Imagem" onPress={changeImage} resizeMode="contain"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: '90%',
    maxWidth: 400,
    height: 200,
    marginBottom: 20,
  },
});
