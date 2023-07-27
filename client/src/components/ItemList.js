import React from "react";
import { Button, Card } from "antd";
import { useDispatch } from "react-redux";
const ItemList = ({ item }) => {
  const dispatch = useDispatch();
  //update cart handler
  const handleAddTOCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...item, quantity: 1 },
    });
  };
  const { Meta } = Card;
  const cardStyle = {
    width: 240,
    marginBottom: 20,
    overflow: "hidden", // Hide any content that might overflow (e.g., image corners)
  };

  const imageStyle = {
    height: 200,
    borderRadius: "50%", // Set the border-radius to 50% to make the image circular
  };

  return (
    <div>
      <Card
        style={cardStyle}
        cover={<img alt={item.name} src={item.image} style={imageStyle} />}
      >
        <Meta title={item.name} />
        <div className="item-button">
          <Button onClick={() => handleAddTOCart()}>Add to cart</Button>
        </div>
      </Card>
    </div>
  );
};

export default ItemList;