import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                color: '#52af77',
                height: 1,
                '& .MuiSlider-thumb': {
                    width: 24,
                    height: 24,
                    backgroundColor: '#fff',
                    border: '2px solid currentColor',
                    marginTop: 0,
                    marginLeft: 0,
                    '&:focus, &:hover, &$active': {
                        boxShadow: 'inherit',
                    },
                },
                '& .MuiSlider-track': {
                    height: 8,
                    borderRadius: 4,
                },
                '& .MuiSlider-rail': {
                    height: 8,
                    borderRadius: 4,
                },
            }}
            {...props}
        />
    )
}

export default SuperRange
