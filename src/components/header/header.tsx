import {Text, View} from 'react-native';
import styles from './headerStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import Bag from 'react-native-vector-icons/SimpleLineIcons';
import React from 'react';

export class Header extends React.Component<any, any> {
  render() {
    return (
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
    );
  }
}
