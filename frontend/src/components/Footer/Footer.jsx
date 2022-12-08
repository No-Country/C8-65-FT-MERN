

function Footer() {
  return (
    <div className="flex gap-3 flex-wrap mt-15 items-center justify-center font-poppins ">


      <div className="flex w-92 h-[490px] ml-7 ">

        <div className="w-92 flex flex-col justify-center items-center">

          <div className="flex w-[350px] h-72">
            <img className="rounded-xl" src='./img/mascarilla1.jpg' alt="" />
          </div>

          <div className=" flex flex-col justify-start items-start text-start mt-4 space-y-2">
            <h3 className="text-lg font-Montserrat">
            ¿Es importante usar mascarilla?</h3>
            <p className="w-80">El buen uso de la mascarilla es hoy día fundamental para preservar nuestra salud y la de las personas que nos rodean.</p>
            <a className="text-blue-700" href="http://">Informacion</a>
          </div>

        </div>
         
      </div>
      
      <div className="w-[330px] flex flex-col justify-center items-center m-11">
        <div className="flex w-[330px] h-72">
          <img className="rounded-xl" src='./img/lavarManos.jpg' alt="" />
        </div>

        <div className="flex flex-col mt-4 space-y-2">
          <h3 className="text-lg font-Montserrat">¿Es importante lavarse las manos?</h3>
          <p className="w-80">Si, mantener las manos limpias es una de las medidas que podemos tomar para evitar enfermarnos y transmitir los microbios.</p>
          <a className="text-blue-700" href="http://">Informacion</a>
        </div>
        </div>
    
      <div className=" flex flex-col justify-center items-center">
        <div className="flex w-[330px] h-72">
          <img className="rounded-xl" src='./img/manitoLimpia.jpg' alt="" />
        </div>

        <div className="flex flex-col mt-4 space-y-2 ">
          <h3 className="text-lg font-Montserrat">¿Por que es importante usar gel?</h3>
          <p className="w-80">Los desinfectantes de manos a base de alcohol gel pueden reducir rápidamente la cantidad de microbios que se encuentran.</p>
          <a className="text-blue-700" href="http://">Informacion</a>
        </div>
      

      </div>




    
       



    </div>

  );
}

export default Footer;