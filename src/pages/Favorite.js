import { useSelector, useDispatch } from "react-redux";
import Card from "../components/atoms/card";
import classes from "./favorite.module.css";
import { useEffect, useState } from "react";
import { userActions } from "../store/user-slice";

const Favorite = () => {
  const favJobs = useSelector((state) => state.user.favoriteJobs);
  const favoriteJobs = Object.values(favJobs);
  const dispatch = useDispatch();

  useEffect(() => {
    const getFavoriteData = async () => {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/favorite`);
      const favoriteJobsData = await res.json();
      dispatch(userActions.updateFavorite(favoriteJobsData));
    };
    getFavoriteData();
  }, []);

  useState(() => {
    const sendFavoriteData = async () => {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/favorite`, {
        method: "PUT",
        body: JSON.stringify(favJobs),
      });
      const data = await res.json();
      console.log(data);
    };
    sendFavoriteData();
  }, []);

  return (
    <div className={classes.favorite__container}>
      {favoriteJobs.map((job) => (
        <Card className={classes.favorite__card}>
          <h2>{job.title}</h2>
        </Card>
      ))}
    </div>
  );
};

export default Favorite;
