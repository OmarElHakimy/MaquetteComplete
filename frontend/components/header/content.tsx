import HeaderType from '../../models/header';
import React from 'react';
import Input from './input/input';

// type Props = {
//     header: HeaderType,
// }

const Content :React.FC<any> = ({header}) => {

    return (
        <div className='py-4 grid col-span-12 xl:col-span-7 text-white text-center xl:text-start my-auto order-2 xl:order-1'>
            <div className='mb-4'>
                <div className='xl:text-start text-center'>
                    <p className='font-medium leading-tight text-7xl xl:my-4 my-2'>{header.firstTitle}</p>
                    <p className='font-semibold leading-tight text-7xl xl:my-4 my-2'>{header.secondeTitle}</p>
                </div> 
            </div>
            <p className='text-zinc-600 font-medium text-lg xl:text-start text-center mb-8'>
                {header.description}
            </p>
            <div className='mt-2 mx-0 sm:mx-auto xl:ml-0'>
               <Input title={header.input.buttonTitle} placeholder={header.input.label}/> 
            </div>
            
        </div>
    )
}
export default Content;