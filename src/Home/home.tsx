import React from 'react';
import {Header} from '../components/header/header';
import {FilterCategory} from '../components/filterCategory/filterCategory';

import {View} from 'react-native';
import styles from './homeStyle';
import {ProductCards} from '../components/cards/productCards/productCards';

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Header     */}
      <Header />
      {/* filter */}
      <FilterCategory />
      {/* cards */}
      <ProductCards title={'Moda Casual'} />
      {/* banners */}

      {/* near stores */}
    </View>
  );
};

export default Home;
