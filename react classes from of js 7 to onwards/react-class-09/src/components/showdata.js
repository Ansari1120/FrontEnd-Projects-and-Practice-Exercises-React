function ShowData(props) {
  const { data,onRowClick } = props;
  let keys = Object.keys(data[0]);
  return (
    <table className="table">
      <thead>
        <tr>
          {keys.map((e, i) => (
            <th key={i}>{e}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((x, i) => (
          <tr onClick={()=>onRowClick(x)} key={i}>
            {keys.map((y, ind) => (
              <td key={ind}>{x[y]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ShowData;
