import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { mobile } from '../responsive';

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px"})}
`;

const Title = styled.h1`
font-weight: 300;
text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:20px ;
`;
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
${mobile({ display: "none"})}
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
     ${mobile({flexDirection: "column"})}
`;
const ProductDetail = styled.div`
    flex: 2;
    display:flex;
`;
const Image = styled.img`
    width: 200px;
`;
const Details = styled.div`
    padding: 20px;
    display:flex;
    flex-direction: column;
    
`;
const ProductName = styled.span`
`;
const ProductId = styled.span`
`;
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20;
`;
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({margin: "5px 15px"})}
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({marginBottom: "20px"})}
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
`;


const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`;



const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type= "filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                    <ProductDetail>
                        <Image src="https://cdn.shopify.com/s/files/1/0569/8201/2109/products/8154255-01_1462d3d7-ab5d-4924-99c3-1b2c99cd115f_1024x1024.jpg?v=1668058328"/>
                        <Details>
                            <ProductName><b>Product:</b>ROLEX </ProductName>
                            <ProductId><b>ID:</b>987654 </ProductId>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>2</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>Ksh 1,620,000</ProductPrice>
                    </PriceDetail>
                </Product>
                <Hr/>
                <Product>
                    <ProductDetail>
                        <Image src ="https://cdn2.jomashop.com/media/catalog/product/cache/df24c858758eb768757877f23cd17493/o/m/omega-speedmaster-racing-automatic-chronograph-silver-dial-stainless-steel-men_s-watch-32630405002001_6.jpg?width=350&height=350"/>
                        <Details>
                            <ProductName><b>Product:</b>OMEGA </ProductName>
                            <ProductId><b>ID:</b>54321 </ProductId>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>2</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>Ksh 350,000</ProductPrice>
                    </PriceDetail>
                </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>Ksh 350,000 </SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Delivery cost</SummaryItemText>
                        <SummaryItemPrice>Ksh 500 </SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Discount</SummaryItemText>
                        <SummaryItemPrice>Ksh -500</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>Ksh 350,000 </SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>Ksh </SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>Ksh </SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button> 
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart