import Image from "next/image";
import { BestyApi } from "../Context/BestOffersContext/ContextBestOffers";

function ActivityCard() {
  return (
    <>
      {/* CARD */}
      {BestyApi()?.map(({ title, cover_image_url, city }) => (
        <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
          <h2 className="text-2xl text-center">{city.name}</h2>
          <div className="relative h-72 w-80">
            <Image
              draggable="false"
              src={cover_image_url}
              layout="fill"
              className="rounded-xl"
            />
          </div>
          <h3 className="text-xl text-center mt-3 flex">{title}</h3>
        </div>
      ))}
    </>
  );
}

export default ActivityCard;
