import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

import Carousel, {
  AdditionalParallaxProps,
  ParallaxImage,
} from 'react-native-snap-carousel';
import {CarouselCardModel} from '../../../models/carousel';
import {ProductFilter} from '../../../static/productFilter';

interface State {
  activeIndex: number;
  carouselItems?: CarouselCardModel[];
  parallaxProps?: any;
}

const {width: screenWidth} = Dimensions.get('window');

export class ProductCards extends React.Component<any, State> {
  ref = React.createRef<any>();

  constructor(props: any) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  renderItem(
    {item}: {item: CarouselCardModel},
    parallaxProps?: AdditionalParallaxProps,
  ) {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{uri: item.img}}
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
          data={ProductFilter}
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
