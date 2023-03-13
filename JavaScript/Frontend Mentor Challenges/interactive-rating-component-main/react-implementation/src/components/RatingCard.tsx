import star from "../assets/images/icon-star.svg";
type propVals = {
    rating:number,
    setRating: (num:number)=>void,
    onRatingState:(val:boolean)=>void
}

const RatingCard = ({rating,setRating,onRatingState}:propVals) =>{
    const ratings = [1, 2, 3, 4, 5];
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

  export default RatingCard