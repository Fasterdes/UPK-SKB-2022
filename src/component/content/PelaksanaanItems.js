import tw from "twin.macro"

import Data from "../../data/DataPelaksanaan"

const Title = tw.h1`text-2xl font-bold text-center  text-blue`
const SubTitle = tw.p`text-base text-blue text-center`

const Pelaksanaan = tw.section`relative mt-16 px-4`
const PelaksanaanGroups = tw.div`flex flex-col justify-center items-center gap-9`
const PelaksanaanSubGroups = tw.div`grid gap-4 mb-16`
const PelaksanaanImages = tw.img``

export default function PelaksanaanItems() {
    return (
        <>
            {Data.map((data, index) =>
                <Pelaksanaan key={index}>
                    <PelaksanaanGroups>
                        <PelaksanaanImages src={data.image} />

                        <PelaksanaanSubGroups>
                            <Title>{data.title}</Title>
                            <SubTitle>{data.text}</SubTitle>
                        </PelaksanaanSubGroups>
                    </PelaksanaanGroups>
                </Pelaksanaan>
            )}
        </>
    )
}