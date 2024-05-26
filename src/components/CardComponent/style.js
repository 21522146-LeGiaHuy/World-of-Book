import { Card } from "antd";

import styled from "styled-components";

export const MyCustomCardBody = styled(Card)`
padding: 20px;
background-color: #f0f0f0;
`

export const WrapperCardStyle = styled(Card)`
    width: 200px;
    padding: 0px;
    & img {
        height: 200px;
        width: 200px;
    }
    & Body {
        padding: 0;
    }
`

export const ContentCenterFlex = styled.div`
    display: flex;
    justify-content: center;
`

export const SpecialPrice = styled.div`
    font-size: 1.35em;
    color: #DC0019;
    font-weight: 600;
`
export const DiscountPercentBackground = styled.div`
    background-color: #C92127;
    min-width: 40px;
    height: 22px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2px !important;
    margin-left: 5px !important;
`

export const DiscountPercent = styled.div`
    color: #ffffff;
    font-size: 11px !important;
    font-weight: bold;
`

export const OldPrice = styled.div`
    display: flex;
    justify-content: center;
    color: #888888;
    text-decoration: line-through;
    font-size: 1.1em;
`

export const Sold = styled.div`
    display: flex;
    justify-content: center;
    color: #5a5a5a;
    font-size: 1.15em;
`

export const StyleNameProduct = styled.div`
    padding-top: 0px !important;
    line-height: 1.4em;
    word-break: break-word;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    min-height: 2.8em;
    max-height: 2.8em;
    font-size: 1em;
    color: #333333;
`