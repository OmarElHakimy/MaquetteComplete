import {FC} from 'react';
// import WhyUsLighter from '../components/content/whyUs/whyUsLighter';
// import WhyUsDarker from '../components/content/whyUs/whyUsDarker';
import WhyUsComp from '../components/content/whyUs/whyUs';
import Type from '../models/whyUs';

type Props = {
    whyUs: any,
    addWhyUs: () => Promise<void>,
    removeWhyUs: (id :number) => Promise<void>
}

const WhyUs :FC<Props> = ({whyUs, addWhyUs, removeWhyUs}) => {
    return (
        <div className='py-10 xl:py-20'>
            <p className='text-center mb-14 font-semibold text-6xl'>{whyUs.title}</p>
            <div className='grid grid-cols-12'>
                {
                    whyUs.card?.map( (data :any) => (
                            <div key={data.id} className='col-span-12 lg:col-span-6 xl:col-span-4 my-2 mx-2 odd:bg-inherit even:bg-zinc-950 rounded-xl border-white border-2 border-opacity-5'>
                                <WhyUsComp data={data} addWhyUs={addWhyUs} removeWhyUs={removeWhyUs}/>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}
export default WhyUs;