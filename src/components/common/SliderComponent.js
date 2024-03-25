import { React, Fragment } from 'react'
import Slider from '@mui/material/Slider';
import { Stack, Typography } from '@mui/material';


export const SliderComponent = ({ defaultValue, min, max, step, onChange, value, label, unit, amount }) => {
  return (
    <Stack my={5}> {/* Fake dom */}
      <Stack gap={2}>
        <Typography variant='subtitle2'>{label}</Typography>
        <Typography variant='h5'>{unit} {amount}</Typography>
      </Stack>

      <Slider
        defaultValue={defaultValue}
        sx={{
          color: '#36a8ff', // Color of sliders
        }}
        min={min}
        max={max}
        marks
        step={step}
        onChange={onChange}
        value={value}
        aria-label="Default"
        valueLabelDisplay="auto"
      />
      <Stack direction="row" justifyContent={'space-between'}>
        <Typography variant="caption" color='text.secondary'>{unit} {min}</Typography>
        <Typography variant="caption" color='text.secondary'>{unit} {max}</Typography>
      </Stack>

    </Stack>

  )
}
