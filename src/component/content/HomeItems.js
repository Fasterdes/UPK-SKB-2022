import { Link } from "react-router-dom";
import tw from "twin.macro";

import BgHero from '../../img/hero.png'

const Title = tw.h1`text-2xl font-bold text-center text-blue`
const SubTitle = tw.p`text-base text-blue`

const Hero = tw.section`flex items-center h-82 bg-contain`
const HeroItems = tw.div`flex flex-col justify-center gap-2 backdrop-blur-sm bg-blue/50  w-full h-full px-4`
const HeroTitle = tw.h1`text-4xl font-bold leading-normal text-white`
const HeroParagraph = tw.p`text-base font-normal leading-normal text-white`

const Card = tw.section`grid gap-9 mt-6 px-4`
const CardGrid = tw.div`grid grid-cols-2 gap-9`
const CardItems = tw.div`flex flex-col items-center gap-5`
const CardSubItems = tw.div`grid gap-2`
const CardImages = tw.img`rounded-lg`

export default function HomeItems() {
    return (
        <>
            <Hero style={{ backgroundImage: `url(${BgHero})` }}>
                <HeroItems>
                    <HeroTitle>Ujian Pendidikan Kesetaraan</HeroTitle>
                    <HeroParagraph>Berikut berisi informasi tentang UPK (Ujian Pendidikan Kesetaraan) SPNF SKB Kota Bekasi tahun 2022.</HeroParagraph>
                </HeroItems>
            </Hero>

            <Card>
                <Title>Informasi</Title>
                <CardGrid>
                    <CardItems>
                        <CardImages src={BgHero} alt="" />
                        <Link to='/jadwal'>
                            <SubTitle>Jadwal Ujian</SubTitle>
                        </Link>
                    </CardItems>
                    <CardItems>
                        <CardImages src={BgHero} alt="" />
                        <Link to='/pelaksanaan'>
                            <SubTitle>Alur Pelaksanaan</SubTitle>
                        </Link>
                    </CardItems>
                </CardGrid>
            </Card>

            <Card>
                <Title>Narahubung</Title>
                <CardGrid>
                    <CardItems>
                        <CardImages src={BgHero} alt="" />
                        <CardSubItems>
                            <Title>Jhon Doe</Title>
                            <SubTitle>Jadwal Ujian</SubTitle>
                        </CardSubItems>
                    </CardItems>
                    <CardItems>
                        <CardImages src={BgHero} alt="" />
                        <CardSubItems>
                            <Title>Jhon Doe</Title>
                            <SubTitle>Jadwal Ujian</SubTitle>
                        </CardSubItems>
                    </CardItems>
                    <CardItems>
                        <CardImages src={BgHero} alt="" />
                        <CardSubItems>
                            <Title>Jhon Doe</Title>
                            <SubTitle>Jadwal Ujian</SubTitle>
                        </CardSubItems>
                    </CardItems>
                    <CardItems>
                        <CardImages src={BgHero} alt="" />
                        <CardSubItems>
                            <Title>Jhon Doe</Title>
                            <SubTitle>Jadwal Ujian</SubTitle>
                        </CardSubItems>
                    </CardItems>
                </CardGrid>
            </Card>
        </>
    )
}