import { IconContext } from 'react-icons/lib';
import { MdOutlineVerifiedUser, MdOutlineSavings, MdOutlineComputer, MdOutlineDirectionsBusFilled } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci"
import { Link } from 'react-router-dom';

function Homee() {
  return (
    <IconContext.Provider value={{ color: '#24BAA0' }}>

      <div className=" grid grid-cols-1 mt-10 mb-28 w-full h-auto font-poppins bg-white ">
        <div className="flex flex-col lg:flex-row my-5 mb-[100px] gap-y-8">
          <div className=" w-full lg:w-2/5 flex flex-col place-items-center place-content-center lg:my-0 my-10">
            <div className="ml-10 flex flex-col lg:items-start items-center  ">

              <div className="flex flex-col text-start lg:items-start lg:justify-start items-center justify-center ">
                <h1 className="text-2xl font-Montserrat mb-4">Phamarcy Medicamentos</h1>
                <p className="flex text-start w-[70%]">
                  Farmacia orientada a los servicios que sustentan en un nuevo tipo de cliente interesado en la búsqueda del bienestar y en el conocimiento de su salud para cuidarla y reforzarla.
                </p>

                <Link to='/products'>
                  <button className=" mt-5 border-2 border-celeste rounded-lg bg-celeste px-10 py-1 text-white hover:bg-celeste_oscuro">Buy</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-3/5 h-full flex place-content-center lg:my-0 my-10">
            <img src='./img/medicine.svg' alt="" className='lg:w-[650px] lg:h-[400px] w-[550px] h-[300px]' />
          </div>
        </div>

        <div className="w-full  lg:h-28 h-auto mt-10 flex lg:items-center lg:justify-center space-y-6 lg:flex-row
        flex-col lg:my-0 my-5 items-center justify-center ">

          <div className=" flex row w-[300px] mt-7 ">
            <MdOutlineSavings className="w-[40px] h-[40px] mr-6"></MdOutlineSavings>
            <div className="flex flex-col">
              <h3 className="text-lg  font-[30px] lg:font-medium" >Donaciones</h3>
              <p>Donaciones a los necesitados.</p>
            </div>
          </div>

          <div className=" flex row w-[300px]  ">
            <MdOutlineVerifiedUser className="w-[40px] h-[40px] mr-6"></MdOutlineVerifiedUser>
            <div className="flex flex-col">
              <h3 className="text-lg  font-[30px] lg:font-medium" >Verificar</h3>
              <p>Puedes verificarte iniciando seccion. </p>
            </div>
          </div>

          <div className=" flex row w-[300px] ">
            <MdOutlineComputer className="w-[40px] h-[40px] mr-6"></MdOutlineComputer>
            <div className="flex flex-col">
              <h3 className="text-lg  font-[30px] lg:font-medium ">Online</h3>
              <p>Podes realizar pedidos via online.</p>
            </div>
          </div>

          <div className=" flex row w-[300px] ">
            <MdOutlineDirectionsBusFilled className="w-[40px] h-[40px] mr-6"></MdOutlineDirectionsBusFilled>
            <div className="flex flex-col">
              <h3 className="text-lg  font-[30px] lg:font-medium">Delivery</h3>
              <p>contamos con hacer envio hasta su casa.</p>
            </div>
          </div>
        </div>
          </div>
    </IconContext.Provider>
  );
}

export default Homee;
