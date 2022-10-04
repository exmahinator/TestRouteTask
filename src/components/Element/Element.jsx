// 1)--------------------------------------------------------------
// import { useParams } from 'react-router-dom';

// 2)--------------------------------------------------------------
// import {
//   useSearchParams,
//   useLocation,
//   useNavigate,
//   Link,
// } from 'react-router-dom';

// 3)-------------------------------------------------------------
import { useSearchParams, useLocation, useNavigate } from 'react-router-dom';

const Element = () => {
  // 1)-------------------------------------------------------------
  // const { elementId } = useParams();

  const navBack = useNavigate();

  const [search] = useSearchParams();
  const location = useLocation();
  console.log('Search:', search);
  console.log('Location:', location);

  // 2)------------------------------------------------------------
  //   const name = search.get('name');

  // 3)----------------------------------------------------------
  const name = location.state.name;

  return (
    //   1)-----------------------------------------------------------
    // <>
    //   <h2>Element</h2>
    //   <div>This is {elementId}'s text</div>
    //   </>

    //   2)-----------------------------------------------------------
    <>
      <h2>Element</h2>
      <div>This is {name}'s text</div>
      {/* Variant 1 - back */}
      {/* <Link to="/list">Go back</Link> */}

      {/* Variant 2 - back */}
      {/* <button
        type="button"
        onClick={() => {
          navBack('/list');
        }}
      >
        Go back!
      </button> */}

      {/* Vairant 3 - back */}
      {/* <button
        type="button"
        onClick={() => {
          navBack(-1);
        }}
      >
        Go back!
      </button> */}

      {/* Vairant 4 - back */}
      <button
        type="button"
        onClick={() => {
          navBack(location.state?.from);
        }}
      >
        Go back!
      </button>
    </>
  );
};

export default Element;
