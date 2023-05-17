import Long from '../components/content/practiceImages/longImage';
import Short from '../components/content/practiceImages/shortImage';
import img1 from '../public/assets/images/img1.png'
import img2 from '../public/assets/images/img2.png'
import img3 from '../public/assets/images/img3.png'
import img4 from '../public/assets/images/img4.png'
import img5 from '../public/assets/images/img5.png'
import img6 from '../public/assets/images/img6.png'
import AreaType from '../models/areaOfPractice';

// type Props = {
//     areaOfPractice :AreaType[]
// }

const strapiAssetsUrl = "http://127.0.0.1:1337";

const AreaOfPractice :React.FC<any> = ({areaOfPractice}) => {
    return (
        <div className='py-10 xl:py-20'>
            <h2 className='text-center font-semibold text-6xl mb-14'>{areaOfPractice.title}</h2>
            <div className='grid grid-cols-12'>
                <Long title={areaOfPractice.card[0].title} img={`${strapiAssetsUrl}${areaOfPractice.card[0].cover.data.attributes.formats}`}/>
                <Short title={areaOfPractice.card[1].title} img={`${strapiAssetsUrl}${areaOfPractice.card[1].cover.data.attributes.formats}`}/>
                <Short title={areaOfPractice.card[2].title} img={`${strapiAssetsUrl}${areaOfPractice.card[2].cover.data.attributes.formats}`}/>
                <Long title={areaOfPractice.card[3].title} img={`${strapiAssetsUrl}${areaOfPractice.card[3].cover.data.attributes.formats}`}/>
                <Long title={areaOfPractice.card[4].title} img={`${strapiAssetsUrl}${areaOfPractice.card[4].cover.data.attributes.formats}`}/>
                <Short title={areaOfPractice.card[5].title} img={`${strapiAssetsUrl}${areaOfPractice.card[5].cover.data.attributes.formats}`}/>
            </div>
        </div>
    );
}
export default AreaOfPractice;