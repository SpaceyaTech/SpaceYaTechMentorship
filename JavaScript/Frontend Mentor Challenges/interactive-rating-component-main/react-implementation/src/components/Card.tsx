import star from "../assets/images/icon-star.svg";
import { useState } from "react";
import thankyouillustration from "../assets/images/illustration-thank-you.svg";

const Card = () => {
  const ratings = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState(0);
  const [ratingState, onRatingState] = useState(false);
  const CardIllustration = () =>{
    return (
      <section className="flex flex-col bg-DarkBlue max-w-[375px] rounded-xl p-12 gap-6 items-center">
        <img src={thankyouillustration} alt="Thank you illustration" />
        <p className="text-Orange p-2 rounded-md bg-pillBG">
          You selected {rating} out of 5
        </p>
        <div className="flex flex-col gap-2 items-center">
          <h4 className="text-White text-2xl font-bold font-overpass">
            Thank you!
          </h4>
          <p className="text-LightGrey max-w-[25rem] text-center text-[18px]">
            We appreciate you taking the time to give a rating. If you need more
            support, don't hesitate to get in touch!
          </p>
        </div>
      </section>
    );
  }
  const RatingCard = () =>{
    return (
      <section className="flex flex-col bg-DarkBlue max-w-[375px] rounded-xl p-8 gap-6">
        <img src={star} alt="star illustration" className="max-w-[20px]" />
        <h1 className="font-overpass text-White text-2xl font-bold">
          How did we do?
        </h1>
        <p className="text-LightGrey max-w-[20rem]">
          Please let us know how we did with your support request. All feedback is
          appreciated to help us improve our offering
        </p>
        <div className="flex justify-between">
          {ratings.map((num) => (
            <button
              key={ratings.indexOf(num)}
              className="h-10 w-10 rounded-full text-LightGrey bg-pillBG hover:bg-Orange hover:text-White active:bg-LightGrey focus:bg-MediumGrey focus:text-White"
              onClick={() => setRating(num)}
            >
              {num}
            </button>
          ))}
        </div>
        <button
          className="bg-Orange rounded-full hover:bg-White hover:text-Orange text-White py-2 uppercase font-overpass font-bold"
          onClick={() => (rating > 0 ? onRatingState(true) : "")}
        >
          Submit
        </button>
      </section>
    );
  }
  if (ratingState) {
    return <CardIllustration/> 
  }
  return <RatingCard/>
};
export default Card;
