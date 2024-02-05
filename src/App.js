import { Link } from "react-router-dom";

function App() {
  const arr = [
    { name: "Non" },
    { name: "John" },
    { name: "Dom" },
    { name: "Dam" },
    { name: "Jane" },
  ];
  //

  return (
    <div className="flex flex-col gap-2 w-full h-screen justify-center items-center   md:flex-col  sm:flex-rows bg-slate-500 ">
      {/* <a href="/page1">Go to Page1</a> */}

      {arr?.map((x, index) => (
        <Link
          to={`/page1?name=${x.name}&color=black`}
          className="w-10 h-10 bg-green-500 border border-black flex justify-center items-center"
        >
          {x.name}
        </Link>
      ))}
    </div>
  );
}

export default App;
