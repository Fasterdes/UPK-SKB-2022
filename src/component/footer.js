import * as React from 'react'
import tw from 'twin.macro'

import SpnfIcon from '../img/spnf.svg'

const Title = tw.h1`text-base font-bold  text-white`
const SubTitle = tw.p`text-sm text-white font-normal`

const Section = tw.footer`w-full mt-16`
const FooterItems = tw.div`grid gap-10 p-4 bg-blue`
const FooterSubItems = tw.div`grid gap-4 mb-4`
const Copyright = tw.div`bg-cream p-2`
const Paragraph = tw.p`text-center text-blue text-base`

export default function Footer() { 
    return(
        <> 
            <Section> 
                <FooterItems> 
                    <img src={SpnfIcon} alt="" />

                    <FooterSubItems> 
                        <Title>Alamat</Title>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.258431959178!2d107.00105021476926!3d-6.229620995490567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698db7f4144017%3A0x181147f5abf3a5ae!2sSPNF%20SKB%20Kota%20Bekasi!5e0!3m2!1sid!2sid!4v1647210706734!5m2!1sid!2sid"  loading="lazy"></iframe>
                    </FooterSubItems>

                    <FooterSubItems> 
                        <Title>Humas UPK</Title>
                        <SubTitle>Email : cepy.misbakhul@gmail.com   </SubTitle>
                        <SubTitle>Email : andrimarwandi44@gmail.com  </SubTitle>
                    </FooterSubItems>
                </FooterItems>

                <Copyright> 
                    <Paragraph>copyright 2022 by SPNF SKB Kota Bekasi  Team</Paragraph>
                </Copyright>
            </Section>
        </>
    )
}