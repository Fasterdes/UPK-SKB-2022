import { Link } from "react-router-dom";
import tw from "twin.macro";

import BgHero from '../../img/hero.png'
import SpnfIcon from '../../img/spnf.svg'

import BgJadwal from '../../img/jadwal.png'
import BgPelaksanaan from '../../img/pelaksanaan.jpeg'

import Kepsek from '../../img/kepsek.jpeg'
import WalasA from '../../img/walasPaketA.jpeg'
import WalasB from '../../img/walasPaketB.jpeg'
import WalasC from '../../img/walasPaketC.jpeg'

const Title = tw.h1`text-2xl font-bold text-center text-blue`
const SubTitle = tw.p`text-base text-blue text-center mt-4`

const Nav = tw.nav`grid place-content-center bg-blue h-24 w-full px-4 border-b-2 `

const Hero = tw.section`flex items-center h-82 bg-contain`
const HeroItems = tw.div`flex flex-col justify-center gap-2 backdrop-blur-sm bg-blue/50  w-full h-full px-4`
const HeroTitle = tw.h1`text-4xl font-bold leading-normal text-white`
const HeroParagraph = tw.p`text-base font-normal leading-normal text-white`

const Card = tw.section`grid gap-9 mt-6 px-4`
const CardGrid = tw.div`grid grid-cols-2 gap-9`
const CardItems = tw.div`flex flex-col items-center gap-5`
const CardSubItems = tw.div`grid`
const CardImages = tw.img`rounded-lg h-52`

export default function HomeItems() {
    return (
        <>
            <Nav>
                <img src={SpnfIcon} alt="" />
            </Nav>
            <Hero style={{ backgroundImage: `url(${BgHero})` }}>
                <HeroItems>
                    <HeroTitle>Ujian Pendidikan Kesetaraan</HeroTitle>
                    <HeroParagraph>Berikut berisi informasi tentang UPK (Ujian Pendidikan Kesetaraan) SPNF SKB Kota Bekasi tahun 2021-2022.</HeroParagraph>
                </HeroItems>
            </Hero>

            <Card>
                <Title>Informasi</Title>
                <CardGrid>
                    <CardItems>
                        <Link to='/jadwal'>
                            <CardImages src={BgJadwal} alt="" />
                            <SubTitle>Jadwal Ujian</SubTitle>
                        </Link>
                    </CardItems>
                    <CardItems>
                        <Link to='/pelaksanaan'>
                            <CardImages src={BgPelaksanaan} alt="" />
                            <SubTitle>Alur Pelaksanaan</SubTitle>
                        </Link>
                    </CardItems>
                </CardGrid>
            </Card>

            <Card>
                <Title>Narahubung</Title>
                <CardGrid>
                    <CardItems>
                        <CardImages src={Kepsek} alt="" />
                        <CardSubItems>
                            <Title>EEP Saepul Turjaman , S.pd , M.pd</Title>
                            <SubTitle>PLT Kepala SPNF SKB Kota Bekasi</SubTitle>
                        </CardSubItems>
                    </CardItems>
                    <a href='https://api.whatsapp.com/send?phone=6281585055700'>
                        <CardItems>
                            <CardImages src={WalasA} alt="" />
                            <CardSubItems>
                                <Title>SYAHRUDIN, S.Pd.I </Title>
                                <SubTitle>Wali Kelas Paket A</SubTitle>
                                <SubTitle>+62 815-8505-5700</SubTitle>
                            </CardSubItems>
                        </CardItems>
                    </a>
                    <a href='https://api.whatsapp.com/send?phone=6281316498746'>
                        <CardItems>
                            <CardImages src={WalasB} alt="" />
                            <CardSubItems>
                                <Title>AGUNG DWI WASKITO, S.Pd</Title>
                                <SubTitle>Wali Kelas Paket B</SubTitle>
                                <SubTitle>+62 813-1649-8746</SubTitle>
                            </CardSubItems>
                        </CardItems>
                    </a>
                    <a href='https://api.whatsapp.com/send?phone=+6281333209385'>
                        <CardItems>
                            <CardImages src={WalasC} alt="" />
                            <CardSubItems>
                                <Title>PIPIT SLAMET EKAWATI, S.Pd., M.M</Title>
                                <SubTitle>Wali Kelas Paket C</SubTitle>
                                <SubTitle>+62 813-3320-9385</SubTitle>
                            </CardSubItems>
                        </CardItems>
                    </a>
                </CardGrid>
            </Card>
        </>
    )
}