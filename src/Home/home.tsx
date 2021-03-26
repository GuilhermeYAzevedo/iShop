import React from 'react';
import {Header} from '../components/header/header';
import {FilterCategory} from '../components/filterCategory/filterCategory';

import {View} from 'react-native';
import styles from './homeStyle';
import {ProductCards} from '../components/cards/productCards/productCards';
import { BannerCards } from '../components/cards/bannerCards/bannerCards';
import { BannerCardsManual } from '../components/cards/bannerCardsManual/bannerCardsManual';
import { NearStores } from '../components/nearStores/nearStores';

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Header     */}
      <Header />
      {/* filter */}
      <FilterCategory />
      {/* cards */}
      <ProductCards title={'Moda Casual'} />
      {/* Banner Manual Slide */}
      {/* <BannerCardsManual /> */}

      {/* Banner Plugin */}
      <BannerCards />
      {/* near stores */}
      <NearStores />
    </View>
  );
};

export default Home;
