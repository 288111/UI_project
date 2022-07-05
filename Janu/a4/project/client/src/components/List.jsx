import Post from './Post'
const List = ({ list }) => (
    <ul className='list-group'>
      {list.map(item => (
        <li key={item.id} className='list-group-item'>
            <Post data={item}></Post>
        </li>
      ))}
    </ul>
  );

export default List;