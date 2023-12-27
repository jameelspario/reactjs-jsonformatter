import { Button } from '@mui/material'
import React from 'react'

const Controll = ({ format, minify, stringify }) => {
    return (
        <div>
            <Button className='hover:bg-blue-400 rounded-full hover:text-white my-2'>Paste</Button>
            <Button className='hover:bg-blue-400 rounded-full hover:text-white my-2'>Copy</Button>
            <Button className='hover:bg-blue-400 rounded-full hover:text-white my-2'
                onClick={format}>Format</Button>
            <Button className='hover:bg-blue-400 rounded-full hover:text-white my-2'
                onClick={minify}>Minify</Button>
            <Button className='hover:bg-blue-400 rounded-full hover:text-white my-2'
                onClick={stringify}>Stringify</Button>
        </div>
    )
}

export default Controll