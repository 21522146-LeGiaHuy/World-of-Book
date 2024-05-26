<<<<<<< HEAD
import React from 'react'

const HeaderComponent = () => {
  return (
    <div>HeaderComponent</div>
  )
}

export default HeaderComponent
=======
import React from "react";
import { Col, Image } from 'antd';
import { WrapperHeader, Menu, WrapperIcon } from "./style";
import { MenuOutlined, CaretDownOutlined, BellOutlined, ShoppingCartOutlined, HeartOutlined, UserOutlined } from '@ant-design/icons';
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import WoB from '../../assets/images/WoB_logo.png'

function HeaderComponent() {
  return (
    <div>
      <WrapperHeader>
        <Col span={4}>
            <Image src={WoB} alt='weblogo' preview={false} height='60px' width='160px' />
        </Col>
        <Col span={2}>
          <Menu>
            <MenuOutlined />
            <CaretDownOutlined style={{ fontSize:'20px' }}/>
          </Menu>
        </Col>
        <Col span={12}> 
            <ButtonInputSearch />
        </Col>
        <Col span={6}>
          <WrapperIcon>
            <BellOutlined />
            <ShoppingCartOutlined />
            <HeartOutlined />
            <UserOutlined />
          </WrapperIcon>
        </Col>
      </WrapperHeader>
    </div>
  );
}

export default HeaderComponent;
>>>>>>> 7529782 (init project)
