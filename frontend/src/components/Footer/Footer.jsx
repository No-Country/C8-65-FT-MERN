

function Footer() {
  return (
    <div className="flex ">


<div className="flex h-[490px] ml-7 space-x-5">

       <div className="w-[525px] flex flex-col justify-center items-center"> 

       <div className="flex w-[500px] h-72">
      <img className="rounded-xl" src='./img/mascarilla1.jpg' alt="" />
      </div>

      <div className="flex flex-col justify-start items-start text-start mt-4 space-y-2">
      <h3 className="text-lg font-semibold">
      ¿Por que es importante usar mascarilla?</h3>
      <p>es importante porque se me da la gana</p>
      <a className="text-blue-700" href="http://">Informacion</a>
      </div>

       </div>

    </div>
  

<div className="flex">

<div className="w-80 flex flex-col justify-center items-center m-11 "> 
<div className="flex w-80 h-72">
<img className="rounded-xl" src='./img/lavarManos.jpg' alt="" />
</div>

<div className="flex flex-col mt-4 space-y-2">
<h3 className="text-lg font-semibold">Por que es importante usar mascarilla?</h3>
<p>es importante porque se me da la gana</p>
<a className="text-blue-700" href="http://">Informacion</a>
</div>
</div>


<div className="w-80 flex flex-col justify-center items-center"> 
<div className="flex w-80 h-72">
<img className="rounded-xl" src='./img/manitoLimpia.jpg' alt="" />
</div>

<div className="flex flex-col mt-4 space-y-2 ">
<h3 className="text-lg font-semibold">Por que es importante usar mascarilla?</h3>
<p>es importante porque se me da la gana</p>
<a className="text-blue-700" href="http://">Informacion</a>
</div>
</div>

</div>

    </div>
    
  );
}

export default Footer;