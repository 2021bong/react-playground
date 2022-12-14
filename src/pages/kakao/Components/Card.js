import ItemList from './ItemList';
import './Card.scss';

const FormLayout = (props) => {
  const { bgImg, type, typeClassName, title, content, list } = props;
  return (
    <article className='card'>
      <div className='cardImg'>
        <img alt='cardImg' src={bgImg} />
      </div>
      <div className='cardMain'>
        <div className='status'>
          <span className={typeClassName}>{type}</span>
        </div>
        <h3>{title}</h3>
        <div>
          <p>{content}</p>
        </div>
        {list && <ItemList type={type} list={list} />}
      </div>
    </article>
  );
};

export default FormLayout;
