import { ActivitiesApi } from "../Context/activities/activities"
import {CitiesApi} from "../Context/cities/ContextCities";
import Image from "next/image"

// console.log("API", ActivitiesApi())
// console.log("cities", CitiesApi())
export const Prova = () => {
    return (
        <>
        <div>hello</div>
            <div>

            {console.log("why?",ActivitiesApi())}
                {ActivitiesApi()?.map(({about,uuid, title, cover_image_url}) => (
                    <div key={uuid}>
                    <Image src={cover_image_url} width={100} height={100} />
                    <p>{title}</p>
                    <div >{about}</div>
                    </div>
                ))}
            </div>
            <div>

{console.log("cities", CitiesApi())}          
  {/* 
{CitiesApi()?.map((data) => (
    <div>{data.uuid}</div>
))} */}
</div>
        </>
    )
}