import {Text, View} from 'react-native';
import styles from './filterCategoryStyle';
import React from 'react';

export class FilterCategory extends React.Component<any, any> {
  render() {
    return (
      <View style={styles.filterContainer}>
        <Text>Filtrar</Text>
        <Text>Todos</Text>
        <Text>Masculino</Text>
        <Text>Feminino</Text>
        <Text>Plus Size</Text>
        <Text>Beleza</Text>
        <Text>Infantil</Text>
      </View>
    );
  }
}
