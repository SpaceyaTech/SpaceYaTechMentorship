import thankyouillustration from "../assets/images/illustration-thank-you.svg";
type propVals = {
    rating: number
}
const CardIllustration = ({rating}:propVals) =>{
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

  export default CardIllustration