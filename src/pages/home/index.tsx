import './index.module.scss';
import React, { FC, ReactNode } from 'react';

interface props {
  children?: ReactNode;
}
const Home: FC<props> = (props) => {
  console.log(props);
  return <div>home</div>;
};

export default Home;
