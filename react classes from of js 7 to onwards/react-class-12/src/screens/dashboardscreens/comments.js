import { useEffect, useState } from "react";
import SMGrid from "../../components/SMGrid";
import SMSearchbar from "../../components/SMSearchbar";
import { Get } from "../../config/apibasemethods";

function CommentsScreen() {
  const [listData, setListData] = useState([]);

  let cols = [
    {
      displayName: "Id",
      key: "id",
    },
    {
      displayName: "Full Name",
      key: "name",
      searchAble: true,
    },
    {
      displayName: "User Email",
      key: "email",
      searchAble: true,
    },
    {
      displayName: "Content",
      key: "body",
    },
    {
      displayName: "Post",
      key: "postId",
    },
  ];

  let getData = () => {
    Get("comments")
      .then((res) => {
        if (res.data) {
          setListData([...res.data]);
        }
      })
      .catch((err) => {});
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div>
        <SMSearchbar
          label="Search Roll #"
          searchList={[
            {
              displayName: "User Name",
              key: "name",
            },
            {
              displayName: "User Email",
              key: "email",
            },
          ]}
          onSearch={(selectVal, inputVal) => {
            console.log(selectVal, inputVal);
          }}
        />
      </div>
      <SMGrid title="Comments" datasource={listData} cols={cols} />
    </>
  );
}
export default CommentsScreen;
