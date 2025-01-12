import React, { useEffect, useState } from "react";

const students = [
  { id: 1, name: "Sunil Lamichhane", address: "Bharatpur" },
  { id: 2, name: "Asim Thapa", address: "Shivaghat" },
  { id: 3, name: "Bigyan Sapkota", address: "Chitwan" },
  { id: 4, name: "Rupak Magar", address: "Kathmandu" },
];

const ApiData = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => response.json())
      .then((json) => {
        setData[json];
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (error) {
    return (
      <h1 className="text-red-600 text-3xl">
        Something went wrong. Try again later
      </h1>
    );
  }

  if (isLoading) {
    return <h1 className="text-4xl font-semibold">Loading...</h1>;
  }

  return (
    <div>
      {/* <ShowDetail
        name={students[0].name}
        id={students[0].id}
        address={students[0].address}
      />
      <ShowDetail
        name={students[1].name}
        id={students[1].id}
        address={students[1].address}
      />
      <ShowDetail
        name={students[2].name}
        id={students[2].id}
        address={students[2].address}
      /> */}

      {/* {students.map((item, i) => {
        return (
          <div key={i} className="bg-slate-300 rounded-xl my-4 p-4 w-64">
            <h3 className="text-xl font-semibold">
              {item.id} . {item.name}
            </h3>
            <p className="text-gray-600 mt-4">- {item.address}</p>
          </div>
        );
      })} */}
      <div>
        <h1 className="text-4xl font-semibold text-center">Posts</h1>
        {data?.map((post) => {
          return (
            <div key={post.id}>
              <p>{post.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ApiData;

// const ShowDetail = (props) => {
//   return (
//     <div>
//       <h1 className="text-2xl font-bold">
//         {props.id}.Name : {props.name}
//       </h1>
//       <p>Address: {props.address}</p>
//     </div>
//   );
// };
