import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Auth</Link>
      <Link to="/home">Home</Link>
      <Link to="/list">List</Link>
    </nav>
  );
};

export default Navigation;
