/**
 * Component NavHeader
 **/

import Nav from 'react-bootstrap/Nav';

/**
 * Affiche le navigateur du header en fonction de la taille de l'écran
 */
export default function NavHeader() {
    return (
        <Nav
            className='fs-5 d-flex flex-row justify-content-end fw-bold text-uppercase'
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            <Nav.Item className='nav__item'>
                <Nav.Link >Accueil</Nav.Link>
            </Nav.Item >
            <Nav.Item className='nav__item'>
                <Nav.Link >Compétences</Nav.Link>
            </Nav.Item >
            <Nav.Item className='nav__item'>
                <Nav.Link>Projets</Nav.Link>
            </Nav.Item >
            <Nav.Item className='nav__item'>
                <Nav.Link >Contact</Nav.Link>
            </Nav.Item >
        </Nav>
    )
}