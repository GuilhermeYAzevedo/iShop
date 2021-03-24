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
import { BannerCardModel, CarouselCardModel } from '../../../models/carousel';

interface State {
  activeIndex: number;
  carouselItems: CarouselCardModel[];
  parallaxProps?: any;
}

const { width: screenWidth } = Dimensions.get('window');
export class ProductCards extends React.Component<any, State> {
  ref = React.createRef<any>();

  constructor(props: any) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          img: 'https://i.imgur.com/MABUbpDl.jpg',
          title: 'Moda Casual',
        },
        {
          img: 'https://i.imgur.com/2nCt3Sbl.jpg',
          title: 'Acessórios',
        },
        {
          img: 'https://i.imgur.com/KZsmUi2l.jpg',
          title: 'Tênis Esportivo',
        },
      ],
    };
  }

  renderItem(
    { item, index }: { item: CarouselCardModel; index: number },
    parallaxProps?: AdditionalParallaxProps,
  ) {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{ uri: item.img }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    );
  }


  render() {
    return (
      <View>
        {/*        <Container {...this.props}>
          <Image
            source={require('../../../assets/images/cloths/Image26.png')}
          />
          <Title>{this.props.title}</Title>
        </Container>*/}
        <Carousel
          sliderWidth={screenWidth}
          sliderHeight={screenWidth}
          itemWidth={screenWidth - 260}
          data={this.state.carouselItems}
          renderItem={this.renderItem}
          hasParallaxImages={true}
          loop={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    width: 136,
    height: 104,
  },
  imageContainer: {
    flex: 1,
    backgroundColor: 'white',
    width: 136,
    height: 104,
    borderRadius: 8,
    marginTop: 10,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '400',
  },
});
