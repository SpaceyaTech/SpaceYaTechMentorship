import { useState } from "react";
import CardIllustration from "./CardIlustration";
import RatingCard from "./RatingCard";
const Card = () => {
   const [rating, setRating] = useState(0);
   const [ratingState, onRatingState] = useState(false);
   return ratingState ? <CardIllustration rating={rating}/> : <RatingCard rating={rating} setRating={setRating} onRatingState={onRatingState}/>
};
export default Card;
