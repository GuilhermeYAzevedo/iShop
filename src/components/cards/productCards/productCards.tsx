import React from 'react';
import {View, Text} from 'react-native';

import styled from 'styled-components/native';

import Carousel from 'react-native-snap-carousel';
import {CarouselCardModel} from '../../../models/carousel';


interface State {
  activeIndex: number;
  carouselItems: CarouselCardModel[];
}

export class ProductCards extends React.Component<any, State> {
  ref = React.createRef<any>();

  
  constructor(props: any) {
    super(props);    
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          img: 'https://i.imgur.com/MABUbpDl.jpg',
          title: 'Gustavo',
          text: 'Text 1',
        },
        {
          img: 'https://i.imgur.com/2nCt3Sbl.jpg',
          title: 'Guilherme',
          text: 'Text 2',
        },
        {
          img: 'https://i.imgur.com/KZsmUi2l.jpg',
          title: 'Item 3',
          text: 'Text 3',
        },
      ],
    };
  }

  renderItem({item, index}: {item: CarouselCardModel; index: number}) {
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
        <Image source={{uri: `${item.img}`}}></Image>
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
          ref={this.ref}
          data={this.state.carouselItems}
          sliderWidth={300}
          itemWidth={300}
          renderItem={this.renderItem}
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