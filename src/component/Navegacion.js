import React from 'react'
import {Navbar,Container} from 'react-bootstrap/'

export default function Navegacion() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">
                Send email with Node/React
                </Navbar.Brand>
                </Container>
            </Navbar>
            
        </div>
    )
}
