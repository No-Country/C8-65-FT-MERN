import { IconContext } from 'react-icons/lib';
import { MdOutlineVerifiedUser, MdOutlineSavings, MdOutlineComputer } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci"
import { Link } from 'react-router-dom';

function Homee() {
  return (
    <IconContext.Provider value={{ color: '#24BAA0' }}>

      <div className=" grid grid-cols-1 mt-5 ">
        <div className="flex flex-col md:flex-row">
          <div className=" w-full md:w-2/5 flex flex-col place-items-center place-content-center md:my-0 my-10">
            <div className="ml-10 flex flex-col md:items-start items-center  ">
              <div className="flex row-auto">
                <img
                  className="flex"
                  src="https://res.cloudinary.com/dbovldjfc/image/upload/v1669327355/farmacia/pills_llhrbs.png"
                  width="50px"
                  height="50px"
                  alt="" />
                <div className="flex flex-col">
                  <h2 className=" text-base cursor-pointer  text-black text-center font-bold ">
                    Pharmacy
                  </h2>
                  <p className="text-center text-ms font-bold text-[#0097a7]">
                    Medicamentos
                  </p>
                </div>
              </div>

              <div className="flex flex-col text-start md:items-start md:justify-start items-center justify-center ">
                <h1 className="text-xl font-medium mb-4">Phamarcy Medicamentos</h1>
                <p className="flex text-start w-[50%]">
                  Farmacia orientada a los servicios que sustentan en un nuevo tipo de cliente interesado en la búsqueda del bienestar y en el conocimiento de su salud para cuidarla y reforzarla.
                </p>

                <Link to='/products'>
                  <button className=" mt-5 border-2 border-celeste rounded-lg bg-celeste px-10 py-1 text-white hover:bg-celeste_oscuro">Buy</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full md:w-3/5 h-full flex place-content-center md:my-0 my-10">
            <img src='./img/medicine.svg' alt="" className='md:w-[650px] md:h-[400px] w-[550px] h-[300px]' />
          </div>
        </div>

        <div className="w-full  md:h-28 h-auto mt-10 flex md:items-center md:justify-center space-y-6 md:flex-row
        flex-col md:my-0 my-5 items-start justify-start">

          <div className=" flex row">
            <MdOutlineSavings className="w-28 h-11"></MdOutlineSavings>
            <div className="flex flex-col">
              <h3 className="text-lg font-medium" >Donaciones</h3>
              <p>Donaciones a los necesitados.</p>
            </div>
          </div>

          <div className=" flex row">
            <MdOutlineVerifiedUser className="w-28 h-11"></MdOutlineVerifiedUser>
            <div className="flex flex-col">
              <h3 className="text-lg font-medium" >Verificar</h3>
              <p>Verificate iniciando seccion. </p>
            </div>
          </div>

          <div className=" flex row">
            <MdOutlineComputer className="w-28 h-11"></MdOutlineComputer>
            <div className="flex flex-col">
              <h3 className="text-lg font-medium ">Online</h3>
              <p>Hacer pedidos via online.</p>
            </div>
          </div>

          <div className=" flex row">
            <CiDeliveryTruck className="w-28 h-11"></CiDeliveryTruck>
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
