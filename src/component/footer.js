import * as React from 'react'
import tw from 'twin.macro'

const Section = tw.footer`w-full mt-16`
const FooterItems = tw.div`bg-blue h-40`
const Copyright = tw.div`bg-cream`
const Heading = tw.h1``
const Paragraph = tw.p`text-center text-blue text-base`

export default function Footer() { 
    return(
        <> 
            <Section> 
                <FooterItems> 
                    s
                </FooterItems>

                <Copyright> 
                    <Paragraph>copyright 2022 by SPNF SKB Kota Bekasi  Team</Paragraph>
                </Copyright>
            </Section>
        </>
    )
}