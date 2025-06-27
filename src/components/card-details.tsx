import { type IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { FC } from "react"

interface Props {
    title:string,
    description:string
    icon:IconDefinition
}
const CardDetails:FC<Props> =({title,description,icon})=>{
    return(
        <div className="flex flex-col bg-[#fffbeb] rounded-2xl p-10 w-96 m-1 shadow">
            <div className="flex flex-row">
                <FontAwesomeIcon icon={icon} color="#78350f" className="self-center mr-3"/>
                <p className="text-[#78350f] font-bold">
                    {title}
                </p>
            </div>
            <p className="text-[#92400e] font-medium">
                {description}
            </p>
        </div>
    )
}
export default CardDetails