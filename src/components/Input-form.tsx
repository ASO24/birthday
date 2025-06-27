import type { FC } from "react"

interface Props{
    title:string,
    placeHolder:string,
}
const InputForm:FC<Props> =({title,placeHolder})=>{
    return(
        <div className="flex flex-col my-3">
            <p className="text-[#bd6725]">
                {title}
            </p>
            <input 
            type="text" 
            placeholder={placeHolder}
            className="text-black border-1 p-1 border-[#bd6725] rounded-md"/>
        </div>
    )
}
export default InputForm