import { Outlet, Link, useLocation } from 'react-router-dom';
import database from '../../database/database.json';

const List = () => {
  const location = useLocation();

  return (
    //   1)------------------------------------------------------------------
    // <>
    //   <h2>It's List Page</h2>
    //   <ul>
    //     {database.map(({ name }) => (
    //       <li key={name}>
    //         <Link to={name}>{name}</Link>
    //       </li>
    //     ))}
    //   </ul>
    //   <Outlet />
    // </>

    // 2)-----------------------------------------------------------------
    // <>
    //   <h2>It's List Page</h2>
    //   <ul>
    //     {database.map(({ name }) => (
    //       <li key={name}>
    //         <Link to={`/element?name=${name}`}>{name}</Link>
    //       </li>
    //     ))}
    //   </ul>
    //   <Outlet />
    // </>

    //   3)-----------------------------------------------------------------
    // <>
    //   <h2>It's List Page</h2>
    //   <ul>
    //     {database.map(({ name }) => (
    //       <li key={name}>
    //         <Link to={`/element`} state={{ name }}>
    //           {name}
    //         </Link>
    //       </li>
    //     ))}
    //   </ul>
    //   <Outlet />
    // </>

    //   4)------------------------------------------------------------------
    <>
      <h2>It's List Page</h2>
      <ul>
        {database.map(({ name }) => (
          <li key={name}>
            <Link to={`/element`} state={{ name, from: location.pathname }}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export default List;
