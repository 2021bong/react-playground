import './Item.scss';

const Item = (props) => {
  const { className, img, title, price } = props.list;
  return (
    <li className={className}>
      <img alt='item' src={img} />
      <div className='content'>
        <div>
          <p>{title}</p>
          <p className='price'>{price}</p>
        </div>
        <button className='button' />
      </div>
    </li>
  );
};

export default Item;
