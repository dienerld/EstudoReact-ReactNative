import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {Container, TabsContainer, TabsItem, TabText} from './styles';

export default function Tabs() {
  return (
    <>
      <Container>
        <TabsContainer>
          <TabsItem>
            <Icon name="person-add" size={24} color="#FFF" />
            <TabText>Indicar Amigos</TabText>
          </TabsItem>
          <TabsItem>
            <Icon name="chat-bubble-outline" size={24} color="#FFF" />
            <TabText>Cobrar</TabText>
          </TabsItem>
          <TabsItem>
            <Icon name="arrow-downward" size={24} color="#FFF" />
            <TabText>Cobrar</TabText>
          </TabsItem>
          <TabsItem>
            <Icon name="arrow-upward" size={24} color="#FFF" />
            <TabText>Transferir</TabText>
          </TabsItem>
          <TabsItem>
            <Icon name="lock" size={24} color="#FFF" />
            <TabText>Bloquear Cartão</TabText>
          </TabsItem>
        </TabsContainer>
      </Container>
    </>
  );
}
