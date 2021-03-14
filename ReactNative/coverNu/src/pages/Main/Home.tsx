import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Annotation,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Container,
  Content,
  Description,
  Title,
} from './styles';
import Header from '../../components/Header/Header';
import Tabs from '../../components/tabs/Tabs';

export default function Home() {
  return (
    <>
      <Container>
        <Header />
        <Content>
          <Card>
            <CardHeader>
              <Icon name="attach-money" size={28} color="#666" />
              <Icon name="visibility-off" size={28} color="#666" />
            </CardHeader>
            <CardContent>
              <Title>Saldo Disponível</Title>
              <Description>R$ 192.777.77</Description>
            </CardContent>
            <CardFooter>
              <Annotation>Tranferência Recebida</Annotation>
            </CardFooter>
          </Card>
        </Content>
        <Tabs />
      </Container>
    </>
  );
}
