import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Bag from 'react-native-vector-icons/SimpleLineIcons';

import styles from './homeStyle';

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Header     */}
      <View style={styles.navBar}>
        <View style={styles.iconsL}>
          <Text>87020-210, Maringá</Text>
          <Icon name="chevron-down-outline" size={22} color="#293644" />
        </View>

        <View style={styles.iconsR}>
          <Icon
            name="cart-outline"
            style={{marginRight: 28}}
            size={34}
            color="#293644"
          />
          <Bag name="handbag" size={30} color="#293644" />
        </View>
      </View>
      {/* filter */}
      <View style={styles.filterContainer}>
        <Text>Filtrar</Text>
        <Text>Todos</Text>
        <Text>Masculino</Text>
        <Text>Feminino</Text>
        <Text>Plus Size</Text>
        <Text>Beleza</Text>
        <Text>Infantil</Text>
      </View>

      {/* cards */}

      {/* banners */}

      {/* near stores */}
    </View>
  );
};

export default Home;

