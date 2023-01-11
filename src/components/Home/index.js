import './index.scss'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom';


const Home = () => {
    

    return (
        <div className='container home-page '>
            <div className='text-zone'>
                <h1>Hi, <br/> I'm 
                <img src={LogoTitle} alt="developer" />
                arth <br/> software developer
                </h1>
                <h2>Software Developer / ML Researcher </h2>
                <Link to="/contact" className="flat-button">Connect with me</Link>
            </div>

        </div>
    );
}

export default Home