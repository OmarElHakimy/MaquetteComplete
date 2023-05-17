import {FC} from "react";
import Type from '../../../models/whyUs';

type Props = {
    data: any
    addWhyUs: () => Promise<void>   ,
    removeWhyUs: (id :number) => Promise<void>
};

const WhyUs :FC<Props> = ({data, addWhyUs, removeWhyUs}) => {
    return (
        <div className='p-8'>
            <div className='relative rounded-full bg-white w-[90px] h-[90px]'>
                <i className='absolute inset-y-5 inset-x-0 mx-auto bi bi-gift-fill text-5xl text-center text-zinc-900'></i>
            </div>
            <h4 className='my-4 font-semibold font-lg'>{data.rate}% Success Rate</h4>
            <p className='my-2 text-zinc-600 font-medium text-sm'>{data.description}</p>
            <button className='mt-4 bg-green-500 rounded-full font-semibold text-black py-2 px-4 border-0 hover:bg-green-600' onClick={addWhyUs}>ADD</button>
            <button className='mt-4 bg-red-500 rounded-full font-semibold text-black py-2 px-4 border-0 hover:bg-red-600' onClick={()=>(removeWhyUs(data.id))}>REMOVE</button>
        </div>
    )
}
export default WhyUs;