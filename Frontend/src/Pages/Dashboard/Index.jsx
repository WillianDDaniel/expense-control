import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'

import Sidebar from '../../Components/Sidebar/Index'
import DashHome from '../../Components/Containers/DashHome/Index'
import Settings from '../../Components/Containers/Settings/Index'
import Footer from '../../Components/Footer/Index'

export default function Dashboard() {

    const navigate = useNavigate()
    const [sheet, setSheet] = useState('DashHome')

    useEffect(() => {
        const token = Cookies.get('token')

        if (!token) {
            navigate('/signin')
        }

        const decodedToken = jwtDecode(token)
        const tokenExpiration = new Date(decodedToken.exp * 1000)

        if (tokenExpiration <= new Date()) {

            Cookies.remove('token')
            navigate('/signin')
        }

    }, [])

    const handleLogOut = () => {
        Cookies.remove('token');
        navigate('/signin');
    }

    const handleSwitchSheet = (sheet) => {
        setSheet(sheet)
    }

    return (
        <div className='w-full'>
            {/* This Sidebar is a container that wrap all DashBoard Items */}
            <Sidebar
                switchSheet={handleSwitchSheet}
                logOut={handleLogOut}
            >
                {sheet === 'DashHome' &&

                    <DashHome />
                }

                {sheet === 'Settings' &&

                    <Settings />
                }

                <Footer/>
            </Sidebar>
        </div>
    )
}