import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return(
    <div>
      <h1>This is Home</h1>
      <p>You can also read more <Link to="/aboutme">about me.</Link></p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, qui suscipit eius voluptate molestiae dicta, tempora nam aliquam soluta quae illum, aperiam odio voluptatum quisquam error minus minima! At, cupiditate?
      <p>Warning: In order to access the content of this website, you must enable Cookies!</p>
    </div>
  )
}

export default Home