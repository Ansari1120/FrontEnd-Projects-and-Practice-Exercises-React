import React, { useEffect, useState } from 'react'

function Pagination({ showPerPage, onPaginationChange }) {
  const [count, setCount] = useState(1);

  const PreviousPage = () => {
    setCount(count - 1);
    // console.log(count)
  };

  const NextPage = () => {
    setCount(count + 1);
    // console.log(count);
  };

  useEffect(() => {
    const value = showPerPage * count;
    const subtractionValue = value - showPerPage;
    onPaginationChange(subtractionValue, value)
    console.log(subtractionValue);
  }, [count]);
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <button className="btn btn-primary" onClick={PreviousPage}>
          {" "}
          Previous
        </button>
        <button className="btn btn-primary" onClick={NextPage}>
          {" "}
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination