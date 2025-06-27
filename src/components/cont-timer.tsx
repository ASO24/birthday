import type { FC } from "react"

interface Props{
    text:number
    com:string
}
const  ContTimer:FC<Props>=({text,com})=>{ 
    return(
        <div className="flex flex-row bg-[#bd6725] p-3 rounded-2xl">
            <p className="text-xl text-white font-bold">
                {text} {com}
            </p>
        </div>
    )
}
export default ContTimer