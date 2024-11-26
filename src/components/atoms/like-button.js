import { useDispatch, useSelector } from "react-redux";
import Button from "./button";
import classes from "./like-button.module.css";
import { userActions } from "../../store/user-slice";

const LikeButton = (props) => {
  const dispatch = useDispatch();
  const favoriteJobs = useSelector((state) => state.user.favoriteJobs);
  const clickLikeHandler = () => {
    dispatch(userActions.addFavorite(props.job));
  };

  const clickNotLikeHandler = () => {
    dispatch(userActions.removeFavorite(props.job));
  };

  return (
    <Button
      title={favoriteJobs[props.job.id] ? "Liked" : "Like"}
      className={`${classes[componentName]} ${
        favoriteJobs[props.job.id]
          ? `${classes[`${componentName}--liked`]}`
          : ""
      }`}
      onClick={
        favoriteJobs[props.job.id] ? clickNotLikeHandler : clickLikeHandler
      }
    />
  );
};

const componentName = "LikeButton";

export default LikeButton;
