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
import {CarouselCardModel} from '../../../models/carousel';

interface State {
  activeBanner?: number;
}

const {width: screenWidth} = Dimensions.get('window');
//const height = width * 100 / 60;

const image = [
  'https://static.vecteezy.com/ti/vetor-gratis/p3/662999-memphis-style-banner-design-de-venda-de-moda-gr%C3%A1tis-vetor.jpg',
  'https://cdn.nohat.cc/thumb/f/720/f0e2285d65a3422bbc47.jpg',
  'https://i.pinimg.com/originals/82/9b/f3/829bf30dc46eaa6f15d6992ccdc049af.png',
];

export class BannerCardsManual extends React.Component<any, State> {
  change = ({nativeEvent}) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if (slide !== this.state.activeBanner){
      this.setState({activeBanner: slide});
    }
  }

  constructor(props: any) {
    super(props);
    this.state = {
      activeBanner: 0
    };
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
        <View>
          <ScrollView
            horizontal
            pagingEnabled
            onScroll={this.change}
            showsHorizontalScrollIndicator={false}>
            {image.map((image, index) => (
              <Image
                key={index}
                source={{uri: image}}
                style={styles.promotionBanner}
              />
            ))}
          </ScrollView>
          <View style={styles.pagination}>
            {image.map((i, k) => (
              <Text key={k} style={ k == this.state.activeBanner ? styles.pagingActiveText : styles.pagingText}>
                ⬤
              </Text>
            ))}
          </View>
        </View>
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
  promotionBanner: {
    marginTop: 10,
    width: 330,
    height: 149,
    resizeMode: 'cover',
    backgroundColor: 'red',
    marginStart: 15,
    // marginEnd: 15,
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  pagingText: {
    margin: 3,
    color: '#EAEAEA'
  },
  pagingActiveText: {
    margin: 3,
    color: '#3CBDAF',
  }
});

export const Container = styled.View`
  margin-top: 20px;
  width: 136px;
  height: 131px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

// const Image = styled.Image`
//   width: 100%;
//   height: 104px;
//   resize:
//   justify-content: center;
//   align-items: center;
//   border-radius: 6px;
// `;
