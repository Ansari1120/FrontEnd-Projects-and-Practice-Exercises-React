import React, { useEffect, useState } from "react";
import SMinput from "./SMInput";
import SMTable from "./SMTable";
import Pagination from "./SMPagination";
function SMGridpersoanl({
  aboutTable,
  list,
  tilte,
  setList,
  searchfilter,
  setSearchfilter,
}) {
  const [search, setSearch] = useState("");
  const [selectorlist, setSelectorlist] = useState("name");
  const [showPerPage, setShowPerPage] = useState(4);
  const [pagination, setPagination] = useState({
    start: 0,
    endPint: showPerPage,
  });

  useEffect(() => {
    let work = list.filter((x) =>
      x[selectorlist].includes(search.toLocaleLowerCase())
    );
    setSearchfilter(work);
  }, [search]);

  const selecterValue = (e) => {
    setSelectorlist(e.target.value);
  };

  let inputSearchValue = (e) => {
    setSearch(e.target.value);
  };

  console.log(selectorlist);

  // Sorting function //

  const sorting = () => {
    const result = searchfilter.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });

    console.log(result);
    setSearchfilter([...result]);
  };

  const sortingReverse = () => {
    const result = searchfilter.sort((a, b) => b.name.localeCompare(a.name));
    setSearchfilter([...result]);
  };

  // sorting end //

  // pagination function
  const onPaginationChange = (start, end) => {
    console.log("start", start);
    console.log("end", end);
    setPagination({ start: start, endPint: end });
  };
  // pagination End //

  return (
    <div>
      <h1>{tilte}</h1>

      <button className="btn btn-primary" onClick={sorting}>
        Sorting
      </button>
      <button className="btn btn-danger" onClick={sortingReverse}>
        sortingReverse
      </button>
      <div
        className="my-3"
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <div>
          <input type="text" onChange={(e) => inputSearchValue(e)} />
        </div>

        <div>
          <select onChange={(e) => selecterValue(e)}>
            <option value="name"> Select </option>
            {aboutTable.map((x) => (
              <option>{x.key}</option>
            ))}
          </select>
        </div>
      </div>

      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            {aboutTable &&
              Array.isArray(aboutTable) &&
              aboutTable.length > 1 &&
              aboutTable.map((x) => <th>{x.key} </th>)}
          </tr>
        </thead>

        <tbody>
          {searchfilter &&
            Array.isArray(searchfilter) &&
            searchfilter.length > 1 &&
            searchfilter
              .slice(pagination.start, pagination.endPint)
              .map((x) => (
                <tr>
                  {aboutTable &&
                    Array.isArray(aboutTable) &&
                    aboutTable.length > 1 &&
                    aboutTable.map((e, i) => (
                      <td> {e.displayField ? e.displayField(x) : x[e.key]} </td>
                    ))}{" "}
                </tr>
              ))}
        </tbody>
      </table>
      <div className="my-4">
        <Pagination
          showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
        />
      </div>
    </div>
  );
}

export default SMGridpersoanl;
