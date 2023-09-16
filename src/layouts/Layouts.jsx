// import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'

const layout = () => {
    return (
        <>
            <Outlet/>
            {/* <Footer/> */}
        </>
    )
}

export default layout