import React from 'react'
import { ToggleButton, ToggleButtonGroup } from '@mui/material';


const MainCategory = ({ options, value, selectToggle }) => {



  return (
    <ToggleButtonGroup value={value} onChange={selectToggle} exclusive className=' bg-[#B3E8E5] font-poppins' >
      {options.map(({ label, _id, value }) =>

        <ToggleButton value={value} key={label} style={{ fontFamily: 'Poppins' }}>{label}</ToggleButton>


      )}

    </ToggleButtonGroup>
  )
}

export default MainCategory;
