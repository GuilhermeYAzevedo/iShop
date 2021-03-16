import React from 'react';
import {View, Text} from 'react-native';

import styled from 'styled-components/native';

import Carousel from 'react-native-snap-carousel';

export class ProductCards extends React.Component<any, any> {
  private carousel: any;
  constructor(props: any) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: 'Item 1',
          text: 'Text 1',
        },
        {
          title: 'Item 2',
          text: 'Text 2',
        },
        {
          title: 'Item 3',
          text: 'Text 3',
        },
        {
          title: 'Item 4',
          text: 'Text 4',
        },
        {
          title: 'Item 5',
          text: 'Text 5',
        },
      ],
    };
  }

  _renderItem({item, index}) {
    return (
      <View
        style={{
          backgroundColor: 'floralwhite',
          borderRadius: 5,
          height: 250,
          padding: 50,
          marginLeft: 25,
          marginRight: 25,
          borderColor: 'red',
          borderStyle: 'solid',
        }}>
        <Text style={{fontSize: 30}}>{item.title}</Text>
        <Text>{item.text}</Text>
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
          layout={'default'}
          ref={(ref) => (this.carousel = ref)}
          data={this.state.carouselItems}
          sliderWidth={300}
          itemWidth={300}
          renderItem={this._renderItem}
          onSnapToItem={(index) => this.setState({activeIndex: index})}
        />
      </View>
    );
  }
}

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

const Image = styled.Image`
  width: 136px;
  height: 104px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`;
