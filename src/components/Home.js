/* eslint-disable react/prop-types */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/destructuring-assignment */
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Home(props) {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${props.match.params.idOfTheProfile}`)
      .then((response) => {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return <div>{data && <img src={data.avatar_url} alt="" />}</div>;
}
export default Home;
