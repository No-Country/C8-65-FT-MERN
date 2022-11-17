import imagenes from '../../assets/imagenes'
import {AiOutlineHeart,AiOutlineStar}  from 'react-icons/ai'
import {FcLike} from 'react-icons/fc'
//swipper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Thumbs, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const FakeApp = [{
  id: 1, 
  title: 'Aspirina',
  description: 'una nueva pastilla para tomar, cada ciertas horas',
  image: imagenes.img3,
  isFavorite: false, 
  price: 4.41
}, 
{
  id: 2, 
  title: 'Al dia siguiente',
  description: 'Famosa pastilla para mujeres que cogieron sin proteccion y no quieren hijos porque todas putas',
  image: imagenes.img3,
  isFavorite: true, 
  price: 4.41
}, 
{
  id: 3, 
  title: 'Simvastatina',
  description: 'una nueva pastilla para tomar, cada ciertas horas',
  image: imagenes.img3,
  isFavorite: true, 
  price: 4.41
}, {
  id: 4, 
  title: 'Amlodipina',
  description: 'una nueva pastilla para tomar, cada ciertas horas',
  image: imagenes.img3,
  isFavorite: true, 
  price: 4.41
}, {
  id: 5, 
  title: 'Paracetamol',
  description: 'una nueva pastilla para tomar, cada ciertas horas',
  image: imagenes.img3,
  isFavorite: true, 
  price: 4.41
},
{
  id: 6, 
  title: 'KevinFake',
  description: 'una nueva pastilla para tomar, cada ciertas horas',
  image: imagenes.img3,
  isFavorite: true, 
  price: 4.41
},
 {
  id: 7, 
  title: 'Ultra',
  description: 'una nueva pastilla para tomar, cada ciertas horas',
  image: imagenes.img3,
  isFavorite: true, 
  price: 4.41,
},
{
  id: 8, 
  title: 'Lexotiroxina sódica',
  description: 'una nueva pastilla para tomar, cada ciertas horas',
  image: imagenes.img3,
  isFavorite: true, 
  price: 4.41
}, 
]

function Card() {
  return (


<Swiper
        slidesPerView={1}
        loop={true}
        navigation={true}
        modules={[Autoplay, Navigation, Thumbs]}
        grabCursor={true}
        className="  md:w-full"

        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
      >{
        
        <div className="flex justify-center items-center h-screen space-x-5">
      
        {FakeApp.map((item)=>(
   
         <SwiperSlide className='flex items-center justify-center h-screen space-x-5 mt-20'>

       <div key={item.id} className=" max-w-[290px] max-h-[30rem] flex flex-col bg-white border-gray-200
       p-4 border-2 rounded-2xl shadow-slate-200 shadow-md"> 
          {item.isFavorite 
          ? <FcLike className='w-8 h-8 flex self-end'/> 
          : <AiOutlineHeart  className='w-8 h-8 flex self-end'/> } 
          <img className=" w-52 h-52 mt-2 self-center" src={item.image} alt="" srcset=""/>
          <h2 className="flex self-center mt-3 text-2xl font-medium" >{item.title}</h2>
          <p className="flex mt-4 ml-2 text-gr" >{item.description}</p>
          
          <div className="flex row-auto mt-2 gap-2">     
          {[...new Array(5)].map((item,index)=>(
            <AiOutlineStar key={index} className='w-5 h-5 '/>
          ))}
          </div>
    
          <div className="flex row-auto mt-2 space-x-14">
            <div className="">
              <p className="mt-2 ml-3">$ {item.price}</p>
              <p className="ml-3 text-gray-500 line-through">$5,550</p>
            </div>
             
             <div className="h-11 flex border-2 mt-2 border-red-400 rounded-lg">
               <button className=" w-28 bg-red-400  text-white font-semibold rounded-md hover:bg-red-600">Buy</button>
               <img className="w-9 h-9 ml-2 mr-2" src={imagenes.img2} alt="" srcset=""/>
             </div>
          </div>
    </div>
      </SwiperSlide>       
       ))}
      </div>  
      }
      </Swiper>
    
  );
}

export default Card;
