import { Link, NavLink,useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../auth/context/AuthContext';
export let Navbar = () => {
    

let {user}=useContext(AuthContext)
console.log(user)
    // const { user } = useContext(AuthContext);
    // console.log(user);
    // const { logged } = useContext(AuthContext);
    // console.log(logged);
    // const { name } = useContext(AuthContext);
    // console.log(name);


let navigate = useNavigate();

    let onLogout=()=>{
navigate('/login',{
replace:true
})

    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link className="navbar-brand" to="/">
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink 
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/Search"
                    >
                        Search
                    </NavLink>

                    <NavLink
                    to="hero"
                    >

                    </NavLink>

                    <NavLink 
                    to='/login'
                    >

                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-info">
                       {user?.name}
                    </span>
                    <button className="nav-item nav-link btn btn-outline"
                    onClick={onLogout}
                    >Logout</button>
                </ul>
            </div>
        </nav>
    );
}
