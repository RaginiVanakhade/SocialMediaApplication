// import React from "react";

const categories = [
  {
    title: "Nature",
    imgUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
  },
  {
    title: "Technology",
    imgUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    title: "Travel",
    imgUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  {
    title: "Food",
    imgUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
  }
];

const Category = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
      {categories.map((cat, index) => (
        <div key={index} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "10px" }}>
          <img
            src={cat.imgUrl}
            alt={cat.title}
            style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "10px" }}
          />
          <h3 style={{ marginTop: "10px", textAlign: "center" }}>{cat.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Category;
