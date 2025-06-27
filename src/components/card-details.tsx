import type { FC } from "react"

interface Props {
    title:string,
    description:string
}
const CardDetails:FC<Props> =({title,description})=>{
    return(
        <div className="flex flex-col bg-[#fffbeb] rounded-2xl p-10 w-96 m-1 shadow">
            <div >
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