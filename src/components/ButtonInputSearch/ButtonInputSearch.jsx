import React from 'react'
import { Input, Button } from 'antd';
import { SearchBar } from "./style";
import { SearchOutlined } from '@ant-design/icons';

function ButtonInputSearch() {
  return (
    <SearchBar>
        <Input placeholder="Search" prefix={<SearchOutlined />} style={{ backgroundColor:'#F4F4FF', border:'none', boxShadow:'none' }} />
        <Button type="primary" icon={<SearchOutlined />} style={{ marginLeft:'20px', padding:'0px 40px', backgroundColor:'#CDCDFF', color:'black', boxShadow:'none' }} />
    </SearchBar>
  )
}

export default ButtonInputSearch