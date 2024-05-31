import React from 'react'
import { WrapperTextValue, WrapperLabelText, WrapperContent } from './style'
import { Checkbox } from 'antd'

const NavBarComponent = () => {
  const onChange = () => {

  }
  const renderContent = (type, options) => {
    switch (type) {
      case 'text':
        return options.map((option) => {
          return <WrapperTextValue>{option}</WrapperTextValue>
        })
      case 'checkbox':
        return (
          <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'Column', gap: '12px', 'padding-left': '10px'}} onChange={onChange}>
            {options.map((option) => {
              return (
                <Checkbox value={option.value}>{option.label}</Checkbox>
              )
            })}
          </Checkbox.Group>
        )
      default:
        return {}
    }
  }
  return (
    <div>
      <WrapperLabelText>Nhóm sản phẩm</WrapperLabelText>
      <WrapperContent>
        {renderContent('text', ['Tiểu thuyết', 'Truyện Ngắn - Tản Văn', 'Truyện Trinh Thám - Kiếm Hiệp', 'Huyền Bí - Giả Tưởng - Kinh Dị', 'Tác Phẩm Kinh Điển', 'Ngôn Tình'])}
      </WrapperContent>
      <WrapperLabelText>Giá</WrapperLabelText>
      <WrapperContent>
        {renderContent('checkbox', [
          { value: '0', label: '0đ - 150,000đ' },
          { value: '1', label: '150,000đ - 300,000đ' },
          { value: '2', label: '300,000đ - 500,000đ' },
          { value: '3', label: '500,000đ - 700,000đ'},
          { value: '4', label: '700,000đ - Trở Lên'},
        ])}
      </WrapperContent>
      <WrapperLabelText>Nhà cung cấp</WrapperLabelText>
      <WrapperContent>
        {renderContent('checkbox', [
          { value: '0', label: 'Nhã Nam' },
          { value: '1', label: 'NXB Trẻ' },
          { value: '2', label: 'Đinh Tị' },
          { value: '3', label: 'NXB Tổng hợp TPHCM'},
          { value: '4', label: 'Phụ nữ'},
        ])}
      </WrapperContent>
      <WrapperLabelText>Độ tuổi</WrapperLabelText>
      <WrapperContent>
        {renderContent('checkbox', [
          { value: '0', label: '3+' },
          { value: '1', label: '5 - 10' },
          { value: '2', label: '10 - 12' },
          { value: '3', label: '12 - 16'},
          { value: '4', label: '16+'},
        ])}
      </WrapperContent>
      <WrapperLabelText>Hình thức</WrapperLabelText>
      <WrapperContent>
        {renderContent('checkbox', [
          { value: '0', label: 'Bìa mềm' },
          { value: '1', label: 'Bìa cứng' },
          { value: '2', label: 'Bộ Hộp' },
        ])}
      </WrapperContent>

    </div>
  )
}

export default NavBarComponent
