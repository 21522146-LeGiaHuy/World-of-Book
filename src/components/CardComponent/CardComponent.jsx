import React from 'react';
import { Card } from 'antd';
import { ProductName, Discount, SpecialPrice, Price, OldPrice } from './style';
function CardComponent(){
  return (
    <Card
    className='bodyPadding'
    hoverable
    bordered
    style={{ width: 220, alignItems : 'center', display : 'flex', flexDirection : 'column'}}
    cover={<img alt="example" style={{ width : 190, height : 160}} src="https://cdn0.fahasa.com/media/catalog/product/i/m/image_183396.jpg" />}
  >
    <ProductName>Nghệ Thuật Tư Duy Chiến Lược</ProductName>
    <Price>
      <SpecialPrice>155.350 đ</SpecialPrice>
      <Discount>35%</Discount>
    </Price>
    <Price><OldPrice>239.000 đ</OldPrice></Price> 
  </Card>
  );
}

export default CardComponent;
