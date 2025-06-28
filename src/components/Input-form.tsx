import type { FC } from "react"

interface Props{
    title:string,
    placeHolder:string,
    value:string,
    onChange:(value:string)=>void

}
const InputForm:FC<Props> =({title,placeHolder,onChange ,value})=>{
    return(
        <div className="flex flex-col my-3">
            <p className="text-[#bd6725]">
                {title}
            </p>
            <input 
            type="text" 
            value={value}
            placeholder={placeHolder}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
            className="text-black border-1 p-1 border-[#bd6725] rounded-md"/>
        </div>
    )
}
export default InputForm