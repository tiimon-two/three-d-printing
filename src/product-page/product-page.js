import React, { useState } from "react";
import Title from "/src/title/title";
import Code from "/src/code/code";
import Description from "/src/description/description";
import Comments from "/src/comments/comments";
import Popularity from "/src/popularity/popularity";
import { Image } from "/src/elements";
import Tabs from "/src/tabs/tabs";
import {
  StyledProductPage,
  Header,
  ProductWrapper,
  ProductInfo,
  ProductInfoLine,
  PageCounter,
  BuyButton,
  PageFullPrice,
  DeliveryValue
} from "./styled";
import PopUp from "../pop-up/pop-up";
import Order from "../order/order";
import Accordeon from "../Accordeon/Accordeon";
import Slider from "../slider/slider";

const MAX_TEXT_SIZE = 200;
const COMMENTS_COUNT = 3;

function ProductPage({ product, showInAccordeon }) {
  const [productCount, setProductCount] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [isShowAllDescription, setIsShowAllDescription] = useState(false);
  const [commentsShow, setCommentsShow] = useState(COMMENTS_COUNT);

  const price = product.price * productCount;
  const oldPrice = product.oldPrice * productCount;

  const tabs = [
    {
      title: "Описание",
      content: (
        <Description
          text={
            isShowAllDescription
              ? product.description
              : product.description.slice(0, MAX_TEXT_SIZE)
          }
          onShowMore={() => setIsShowAllDescription(!isShowAllDescription)}
          isShowAllDescription={isShowAllDescription}
        />
      )
    },
    {
      title: "Комментарии",
      content: (
        <Comments
          comments={product.comments.slice(0, commentsShow)}
          onShowMore={() => setCommentsShow(commentsShow + COMMENTS_COUNT)}
          allCommentsLength={product.comments.length}
        />
      )
    }
  ];

  return (
    <StyledProductPage>
      <Header>
        <Title>{product.name}</Title>
        <Code>{product.code}</Code>
      </Header>
      <ProductWrapper>
        {/* <Image
          width="200"
          height="257"
          maxWidth="200"
          src={product.src}
          alt={product.name}
        /> */}
        <Slider images={product.images} />
        <ProductInfo>
          <ProductInfoLine>
            Цена: <PageFullPrice price={price} oldPrice={oldPrice} />
          </ProductInfoLine>
          <ProductInfoLine>
            Количество:{" "}
            <PageCounter
              value={productCount}
              onChange={setProductCount}
              minValue={1}
            />
          </ProductInfoLine>
          <ProductInfoLine>
            <span>Доставка:</span>{" "}
            <DeliveryValue>{product.delivery}</DeliveryValue>
          </ProductInfoLine>
          <BuyButton size="large" onClick={() => setShowPopup(true)}>
            Купить
          </BuyButton>
          <Popularity count={product.comments.length} />
        </ProductInfo>
      </ProductWrapper>
      {showInAccordeon ? <Accordeon items={tabs} /> : <Tabs tabs={tabs} />}
      <PopUp
        isShow={showPopup}
        title="Оформление"
        onClose={() => setShowPopup(!showPopup)}
      >
        <Order />
      </PopUp>
    </StyledProductPage>
  );
}

export default ProductPage;
