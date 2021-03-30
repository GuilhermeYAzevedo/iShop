import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function NearStore(props: any) {
  return (
    <BorderBottom>
      <Container {...props}>
        <LogoImg source={props.img} />
        <StoreContainer>
          <StoreName>{props.name}</StoreName>
          <StoreType>{props.category}</StoreType>
          <StoreType>{props.verified}</StoreType>
        </StoreContainer>
        <IconContainer>
          <Icon name="chevron-forward-outline" size={34} color="#292929" />
        </IconContainer>
      </Container>
    </BorderBottom>
  );
}

const Container = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

const LogoImg = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  border: 1px solid rgba(112, 112, 112, 0.1);
`;

const StoreContainer = styled.View`
  flex-direction: column;
  margin-left: 21px;
  justify-content: center;
`;

const StoreName = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const StoreType = styled.Text`
  font-size: 14px;
  font-weight: normal;
`;

const IconContainer = styled.View`
  margin-left: 150px;
  align-content: center;
  justify-content: center;
`;

const BorderBottom = styled.View`
  border-bottom-color: #ebebeb;
  border-bottom-width: 1px;
`;
