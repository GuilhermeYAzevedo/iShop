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
  Pagination,
  ParallaxImage,
} from 'react-native-snap-carousel';

import {BannerCardModel} from '../../../models/carousel';
import {ENTRIES1} from '../../../static/entries';

interface State {
  activeIndex: number;
  carouselItems?: BannerCardModel[];
  parallaxProps?: any;
}

const {width: screenWidth} = Dimensions.get('window');

export class BannerCards extends React.Component<any, State> {
  ref = React.createRef<any>();

  constructor(props: any){
    super(props);
    this.state = {
      activeIndex: 0,
    }
  }
  renderBanner(
    {item, index}: {item: BannerCardModel; index: number},
    parallaxProps?: AdditionalParallaxProps,
  ) {
    return (
      <View style={styles.item}>
        <View style={styles.imageContainer}>
            <Image
              source={{uri: item.img}}
              style={styles.image}
            />
          </View>
      </View>
    );
  }

  get pagination() {
    return (
      <Pagination
        dotsLength={ENTRIES1.length}
        activeDotIndex={this.state.activeIndex}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: 'rgb(60, 189, 175)',
        }}
        inactiveDotStyle={
          {
            backgroundColor: 'rgb(234, 234, 234)',
          }
        }
        inactiveDotOpacity={1}
        inactiveDotScale={1}
      />
    );
  }

  render() {
    return (
      <View>
          <Carousel
              sliderWidth={screenWidth}
              sliderHeight={screenWidth}
              itemWidth={screenWidth - 60}
              ref={this.ref}
              data={ENTRIES1}
              autoplayDelay={100}
              renderItem={this.renderBanner}
              autoplay={true}
              loop={true}
              onSnapToItem={(index: number) => this.setState({activeIndex: index})}
          />
          { this.pagination }
      </View>
    );
  }
}

const styles = StyleSheet.create({  
  item: {
    marginTop: 20,    
    borderRadius: 5,
    width: 330,
    height: 149,
  },
  imageContainer: {
    backgroundColor:'red',
    width: 330,
    height: 149,
    borderRadius: 2,    
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});
