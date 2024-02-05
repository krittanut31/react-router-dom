import React from "react";
import {
  Link,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

const Page1 = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name");
  const age = searchParams.get("age");
  const color = searchParams.get("color");
  const { pageId } = useParams();
  const location = useLocation();
  const pathName = location.pathname.split("/");

  console.log(location.pathname);
  console.log(pathName);

  if (pathName[2] === "login" && role === 'admin') {
    console.log("ture");
  } else console.log("false");

  return (
    <div className="bg-slate-500 h-screen w-full flex justify-center flex-col items-center">
      {/* <Link to={"/page2"}>Go to Page2</Link> */}
      <p>This is page {pageId}</p>
      <p>Hello Mr.{name}</p>
    </div>
  );
};

export default Page1;
