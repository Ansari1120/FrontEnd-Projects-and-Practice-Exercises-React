function SMGrid(props) {
  const { datasource, title, cols } = props;
  return (
    <>
      <div>
        <div>
          <h2>{title}</h2>
        </div>
        {datasource && Array.isArray(datasource) && (
          <table className="table table-striped">
            <thead>
              <tr>
                {cols && Array.isArray(cols) && cols.length > 0
                  ? cols.map((x, i) => <th key={i}>{x.displayName}</th>)
                  : null}
              </tr>
            </thead>
            <tbody>
              {datasource.map((x, i) => (
                <tr key={i}>
                  {cols.map((e, ind) => (
                    <td key={ind}>
                        {x[e.key]}                    
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
export default SMGrid;
