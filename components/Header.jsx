import { Link, useLocation } from "react-router-dom"

const Header = () => {
    const headers = ['/host', '/about', '/vans'];
    let bolds = [0, 0, 0];
    const location = useLocation();
    const wantedStyle = {textDecorationLine: 'underline',
        fontWeight: '900'
    };

    const chosenPath = headers.filter((header) => (location.pathname.startsWith(header)));

    headers.map((header, index) => {
        chosenPath[0] === header ? bolds[index] = 1 : null;
    });

    function isSelected(index) {
        return bolds[index] === 1 ? wantedStyle : {}
    }

    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <Link style={isSelected(0)}  to="/host">Host</Link>
                <Link style={isSelected(1)} to="/about">About</Link>
                <Link style={isSelected(2)} to="/vans">Vans</Link>
            </nav>
        </header>
    )
}

export default Header