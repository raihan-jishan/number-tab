import React from 'react';
import Dashboard_Layout from '../../components/dash-layout';
import DashHero from '../../components/ui/dashHero';

const GroupCategories = () => {
  return (
    <Dashboard_Layout>
    <DashHero
      label={" Your favourite Contact"}
      btnText={"Add favourite contact"}
      image={handCrafHeart}
    />
  </Dashboard_Layout>
  )
}

export default GroupCategories;