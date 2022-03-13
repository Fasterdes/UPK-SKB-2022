import * as React from 'react' 
import { Global , css } from '@emotion/react'
import { GlobalStyles as BaseStyles } from 'twin.macro'
import "@fontsource/lato"
import "@fontsource/lato/700.css"

const CostumStyles = css`
    body { 
        font-family : 'Lato' , 'sans-serif' ; 
        font-weight : 400 ; 
    }
`

export default function GlobalStyles() { 
    return ( 
        <> 
            <BaseStyles/> 
            <Global styles={CostumStyles}/>
        </>
    )
}