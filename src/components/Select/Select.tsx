import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import MuiSelect, { SelectChangeEvent } from '@mui/material/Select'

const Select = (props) => {
  const [age, setAge] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string)
  }
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id='demo-simple-select-label'>Age</InputLabel>
      <MuiSelect
        {...props}
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={age}
        label='Age'
        onChange={handleChange}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </MuiSelect>
    </FormControl>
  )
}

export default Select
