'use client'
import React, { useEffect, useState } from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  try {
    const res = await fetch(process.env.APP_URL + "/api/categories", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return an empty array in case of an error.
  }
};

const CategoryList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData()
      .then((result) => setData(result))
      .catch((error) => console.error("Error setting data:", error));
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {Array.isArray(data) &&
          data.map((item) => (
            <Link
              href={`/blog?cat=${item.slug}`}
              className={`${styles.category} ${styles[item.slug]}`}
              key={item._id}
            >
              {item.img && (
                <Image
                  src={item.img}
                  alt={item.title}
                  width={32}
                  height={32}
                  className={styles.image}
                />
              )}
              {item.title}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default CategoryList;
