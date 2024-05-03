import Table from 'react-bootstrap/Table';
import { Header } from '../components/header';
import { Container, Row } from 'react-bootstrap';
import { useState } from 'react';

export const Data = () => {

    const [record, setRecord] = useState((JSON.parse(localStorage.getItem('prdata'))) || []);

    return (
        <>
        <Header/>
        <Container>
            <Row>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        record.map((val,i)=>{ i++
                            return(
                                <tr>
                                <td>{i}</td>
                                <td>{val.name}</td>
                                <td>{val.price}</td>
                                <td>{val.desc}</td>
                                <td>{val.category}</td>
                                <td></td>
                            </tr>
                            )
                        })
                    }
                   
                   
                </tbody>
            </Table>
            </Row>
        </Container>
        </>
    );
}

