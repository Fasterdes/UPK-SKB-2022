import React, { useState } from 'react'
import tw, { styled , css } from "twin.macro";
import 'react-modern-calendar-datepicker/lib/DatePicker.css'
import { Calendar } from 'react-modern-calendar-datepicker'

const Title = tw.h1`text-2xl font-bold text-center  text-blue`
const SubTitle = tw.p`text-base text-blue mb-16 leading-normal`

const Jadwal = tw.section`grid gap-16 mt-16 px-4`
const CalendarStyle = css`
    .calendar { 
        width : 100%;
        background-color : red;
    }
`

export default function JadwalItems() {

    const defaultFrom = {
        year: 2022,
        month: 3,
        day: 21,
    };

    const defaultTo = {
        year: 2022,
        month: 3,
        day: 24,
    };

    const defaultRange = {
        from: defaultFrom,
        to: defaultTo,
    };

    const minimumDate = {
        year: 2022,
        month: 3,
        day: 1,
    }

    const maximumDate = {
        year: 2022,
        month: 3,
        day: 31,
    }
    const [selectedDayRange, setSelectedDayRange] = useState(defaultRange)

    return (
        <>
            <Jadwal>
                <Calendar
                    value={selectedDayRange}
                    onChange={setSelectedDayRange}
                    maximumDate={maximumDate}
                    minimumDate={minimumDate}
                    calendarClassName={CalendarStyle}
                    colorPrimary="#D96098"
                    shouldHighlightWeekends
                />
                <SubTitle>Pelaksanaan UPK (Ujian Pendidikan Kesetaraan) dilakukan pada tanggal 21 - 24 Maret 2021</SubTitle>
            </Jadwal>
        </>
    )
}