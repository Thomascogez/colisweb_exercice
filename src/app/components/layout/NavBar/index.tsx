import React, { useContext, useState } from 'react';
import { FormInput, InputGroup, InputGroupAddon, InputGroupText, Nav, Navbar as SNavBar, NavbarBrand } from 'shards-react';
import searchIcon from '../../../assets/img/search-24px.svg';
import { AppContext } from '../../../context/AppContext';


export default function NavBar() {
    const appContext = useContext(AppContext);
    const onSubmit = (e) => {
        e.preventDefault();
        appContext.getResult(searchTerm)

    }
    const [searchTerm, setSearchTerm] = useState("")
    return (
        <SNavBar type="dark" theme="primary" >
            <NavbarBrand href="#">Colisweb Exercice</NavbarBrand>
            <Nav navbar className="ml-auto">
                <form onSubmit={onSubmit}>
                    <InputGroup size="sm" seamless>
                        <InputGroupAddon type="prepend">
                            <InputGroupText>
                                <img src={searchIcon} width="15" alt="search icon" />
                            </InputGroupText>
                        </InputGroupAddon>
                        <FormInput 
                            value={searchTerm} 
                            onChange={(e) => setSearchTerm(e.target.value)} 
                            className="border-0" placeholder="Search..." 
                        />
                    </InputGroup>
                </form>
            </Nav>
        </SNavBar>
    )
}
