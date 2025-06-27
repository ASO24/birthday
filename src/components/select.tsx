import React from 'react';
import '../index.css'

type Props = {
    name: string;
    value: boolean | null; // null si no se ha seleccionado nada
    onChange: (value: boolean) => void;
};

const RadioSiNo: React.FC<Props> = ({ name, value, onChange }) => {
    return (
        <div className='flex flex-col my-5'>
            <p className='text-[#bd6725] mb-5'>
                Asistiras?
            </p>
            <div className='p-1'>
                <label className="items-center cursor-pointer text-[#bd6725] mr-3">
                    <input
                        type="radio"
                        name={name}
                        checked={value === true}
                        onChange={() => onChange(true)}
                        className="peer hidden"
                    />
                    <span className="p-3 border rounded-full peer-checked:bg-[#bd6725] peer-checked:text-white transition-all">
                        Sí, asistire
                    </span>
                </label>

                <label className="items-center cursor-pointer text-[#bd6725]">
                    <input
                        type="radio"
                        name={name}
                        checked={value === false}
                        onChange={() => onChange(false)}
                        className="peer hidden"
                    />
                    <span className="p-3 border rounded-full peer-checked:bg-[#bd6725] peer-checked:text-white transition-all">
                        No podre asistir
                    </span>
                </label>
            </div>
        </div>
    );
};

export default RadioSiNo;
