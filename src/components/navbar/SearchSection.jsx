import React, { memo } from "react";

const SearchSection = ({ data }) => {
  const searchItems = data?.map((el) => (
    <div key={el.id}>
      <img src={el.images[0]} width={50} alt={el.title} />
      <span>{el.title}</span>
    </div>
  ));

  return <div className="navbar__search-model">{searchItems}</div>;
};

export default memo(SearchSection);
