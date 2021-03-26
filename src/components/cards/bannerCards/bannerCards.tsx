import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  Image,
  ScrollView,
} from 'react-native';

import styled from 'styled-components/native';

import Carousel, {
  AdditionalParallaxProps,
  ParallaxImage,
} from 'react-native-snap-carousel';

import {BannerCardModel} from '../../../models/carousel';
import {ENTRIES1} from '../../../static/entries';

interface State {
  activeIndex: number;
  carouselItems: BannerCardModel[];
  parallaxProps?: any;
}

const { width: screenWidth } = Dimensions.get('window');

export class BannerCards extends React.Component<any, State> {
  ref = React.createRef<any>();

  renderBanner(
    {item, index}: {item: BannerCardModel; index: number},
    parallaxProps?: AdditionalParallaxProps,  
  ) {
    return (
      <View
        style={styles.item}>
          {/* <ParallaxImage
          source={{ uri: item.img }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        /> */}
          <View style={styles.imageContainer}>
            <Image
              source={{uri: item.img}}
              style={styles.image}
            />
          </View>
      </View>
    );
  }

  render() {
    return (
      <View>
          {/* <Carousel
          sliderWidth={screenWidth}
          sliderHeight={screenWidth}
          itemWidth={screenWidth - 260}
          data={ENTRIES1}
          renderItem={this.renderBanner}
          hasParallaxImages={true}
          loop={true}
        /> */}
        <Carousel
          layout={'default'}
          ref={this.ref}
          data={ENTRIES1}
          sliderWidth={screenWidth}
          sliderHeight={screenWidth}
          itemWidth={screenWidth - 260}
          renderItem={this.renderBanner}
          loop={true}
          autoplay={true}
          autoplayDelay={500}
          autoplayInterval={3000}
          onSnapToItem={(index: number) => this.setState({activeIndex: index})}
        />
        {/* <Pagination
            dotsLength={ENTRIES1.length}
            activeDotIndex={slider1ActiveSlide}
            containerStyle={styles.paginationContainer}
            dotColor={'rgba(255, 255, 255, 0.92)'}
            dotStyle={styles.paginationDot}
            inactiveDotColor={colors.black}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            carouselRef={this._slider1Ref}
            tappableDots={!!this._slider1Ref}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewExample: {
      //flex: 1,
      // flexDirection: 'row',
      // justifyContent: 'center',
      // backgroundColor: 'red',
      // height: 180,
      marginTop: 10,
  },
  item: {
    backgroundColor: 'red',
    borderRadius: 5,
    width: 320, 
    height: 149,   
    zIndex: 999999999,
  },
  imageContainer: {
    flex: 1,
    backgroundColor: 'green',
    width: 220,
    height: 149,
    borderRadius: 2,
    
  },
  image: {
    ...StyleSheet.absoluteFillObject, 
    resizeMode: 'cover'
  },
  pagingText: {
    color: '#EAEAEA',
  },
  pagingActiveText: {
    color: '#3CBDAF',
  },
});
