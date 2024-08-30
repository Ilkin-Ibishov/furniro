import '../../assets/styles/common/NavigationBreadCrumb.scss';
import { Link, useLocation } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface NavigationBreadCrumb {
  }

const NavigationBreadCrumb: React.FC<NavigationBreadCrumb>  = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/')
    console.log(pathnames);
    
    return (
        <section className="BreadCrumbSection">
            <div>
                <h2>{pathnames[pathnames.length - 1]}</h2>
                <p className='breadcrumb-links'>
                    <Link to='/'>Home</Link>
                    {pathnames?.map((path, index)=>{
                        const to = `${pathnames.slice(0, index + 1).join('/')}`
                        console.log(to);
                        if(index === pathnames.length - 1){
                            return <p><Link to={to}>{path}</Link></p>
                        }else{
                            return <p><Link to={to}>{path}<NavigateNextIcon /></Link></p>
                        }
                    })}
                </p>
            </div>
        </section>
    )
}

export default NavigationBreadCrumb


