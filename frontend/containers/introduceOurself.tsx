
const IntroduceOurself :React.FC<any> = ({introduceOurself}) => {

    return (
        <div className='py-10 xl:py-20'>
            <div className='grid grid-cols-12'>
                <div className='col-span-12 lg:col-span-6 my-auto me-2'>
                    <h1 className='font-semibold text-center lg:text-start text-6xl leading-normal'>{introduceOurself.title}</h1>
                </div>
                <div className='col-span-1 border-l-2 border-zinc-900 hidden lg:block'>

                </div>
                <div className="col-span-12 md:block lg:hidden my-4">

                </div>
                <div className='col-span-12 lg:col-span-5'>
                    <div className='ms-auto'>
                        <h4 className='font-semibold text-4xl my-6'>{introduceOurself.subTitle}</h4>
                        <p className='text-zinc-700 font-medium text-lg my-6'>
                            {introduceOurself.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default IntroduceOurself;