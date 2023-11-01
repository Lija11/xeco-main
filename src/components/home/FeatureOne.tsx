import Image, { StaticImageData } from "next/image"
import Link from "next/link";

import featureImg_1 from "@/assets/img/images/features_img01.png";
import featureImg_2 from "@/assets/img/images/features_img02.png";
import featureImg_3 from "@/assets/img/images/features_img03.png";
import featureImg_4 from "@/assets/img/images/features_img04.png";

interface DataType {
   id: number;
   title: JSX.Element;
   desc: JSX.Element;
   img: StaticImageData;
}
const feature_data: DataType[] = [
   {
      id: 1,
      title: (<>Mobile Payment Make Easy</>),
      desc: (<>Add new, trending and rare artwork to your collection.</>),
      img: featureImg_1,
   },
   {
      id: 2,
      title: (<>Lifetime Free Transaction</>),
      desc: (<>Add new, trending and rare artwork to your collection.</>),
      img: featureImg_2,
   },
   {
      id: 3,
      title: (<>Protect the <br /> Identity</>),
      desc: (<>Add new, trending and rare artwork to your collection.</>),
      img: featureImg_3,
   },
   {
      id: 4,
      title: (<>Security & Control Over Money</>),
      desc: (<>Add new, trending and rare artwork to your collection.</>),
      img: featureImg_4
   },
]
const FeatureOne = () => {
   return (
      <section id="feature" className="features-area pt-140 pb-110">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-10">
                  <div className="section-title text-center mb-70">
                     <h2 className="title">Revolutionary ICO Platform with Exclusive Rewards Program</h2>
                  </div>
               </div>
            </div>
            <div className="row">
               {feature_data.map((item) => (
                  <div key={item.id} className="col-lg-6">
                     <div className="features-item">
                        <div className="features-content">
                           <h2 className="title"><Link href="#!">{item.title}</Link></h2>
                           <p>{item.desc}</p>
                        </div>
                        <div className="features-img">
                           <Image src={item.img} alt="" />
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default FeatureOne
