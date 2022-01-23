import Button from '@material-ui/core/Button';
// types
import { CartItemType } from '../App';
//styles
import { Wrapper } from './Item.styles';

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <p>{item.description}</p>
      <h3>$ {item.price}</h3>
    </div>
    <Button onClick={() => handleAddToCart(item)}>Add To Cart</Button>
  </Wrapper>
);

export default Item;
