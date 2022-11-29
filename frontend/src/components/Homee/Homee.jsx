import { IconContext } from 'react-icons/lib';
import {MdOutlineVerifiedUser, MdOutlineSavings,MdOutlineComputer} from "react-icons/md";
import {CiDeliveryTruck} from "react-icons/ci"

function Homee() {
  return (
    <IconContext.Provider value={{ color:'#24BAA0'}}>

    <div class=" grid grid-cols-1 mt-5 ">
      <div class="flex">
        <div class="w-2/5 flex flex-col place-items-center place-content-center ">
          <div className="ml-10 flex flex-col items-start ">
            <div className="flex row-auto">
            <img
              className="flex"
              src="./img/pills.png"
              width="50px"
              height="50px"
              alt=""/>
            <div className="flex flex-col">
              <h2 className=" text-base cursor-pointer  text-black text-center font-bold ">
                Pharmacy
              </h2>
              <p className="text-center text-ms font-bold text-[#0097a7]">
                Medicamentos
              </p>
            </div>
            </div>

            <div className="flex flex-col text-start items-start justify-start">
            <h1 className="text-xl font-medium mb-4">Phamarcy Medicamentos</h1>
            <p class="flex text-start">
          Farmacia orientada a los servicios que sustentan en un nuevo tipo de cliente interesado en la búsqueda del bienestar y en el conocimiento de su salud para cuidarla y reforzarla.
            </p>

            <button className=" mt-5 border-2 border-celeste rounded-lg bg-celeste px-10 py-1 text-white hover:bg-celeste_oscuro">Buy</button>
            </div>
          </div>
        </div>

        <div class="w-3/5 h-full flex place-content-center">
          <img src='./img/medicine.svg' width="650px" height="400px" alt="" srcset="" />
        </div>
      </div>

      <div class="w-full h-28 mt-10 flex place-items-center content-center space-x-5">

        <div className=" flex row">
          <MdOutlineSavings className="w-24 h-11"></MdOutlineSavings>
          <div className="flex flex-col">
            <h3 className="text-lg font-medium" >Donaciones</h3>
            <p>Donaciones a los necesitados.</p>
          </div>
        </div>

        <div className=" flex row">
          <MdOutlineVerifiedUser className="w-24 h-11"></MdOutlineVerifiedUser>
          <div className="flex flex-col">
            <h3 className="text-lg font-medium" >Verificar</h3>
            <p>Verificate iniciando seccion. </p>
          </div>
        </div>

        <div className=" flex row">
          <MdOutlineComputer className="w-24 h-11"></MdOutlineComputer>
          <div className="flex flex-col">
            <h3 className="text-lg font-medium ">Online</h3>
            <p>Hacer pedidos via online.</p>
          </div>
        </div>

        <div className=" flex row">
          <CiDeliveryTruck className="w-24 h-11"></CiDeliveryTruck>
          <div className="flex flex-col">
            <h3 className="text-lg font-medium">Delivery</h3>
            <p>contamos con hacer envio hasta su casa.</p>
          </div>
        </div>
      </div>
    </div>

    </IconContext.Provider>
  );
}

export default Homee;
