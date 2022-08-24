import Item from './Item';
import './ItemList.scss';

const ItemList = (props) => {
  const { type, list } = props;
  return (
    <ul className={type === 'Good' ? 'goodList' : 'themeList'}>
      {list && list.map((el) => <Item key={el.id} list={el} />)}
    </ul>
  );
};

export default ItemList;
