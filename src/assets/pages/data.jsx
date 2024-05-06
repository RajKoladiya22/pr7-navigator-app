import Table from 'react-bootstrap/Table';
import { Header } from '../components/header';
import { Button, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const Data = () => {

    const [show, setShow] = useState(false);
    const [read, setRead] = useState('')

    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        console.log(id);
        let readrec = record.find(item => item.id === id);
        setRead(readrec)
        setShow(true)
    };

    const { id } = useParams();
    const [record, setRecord] = useState((JSON.parse(localStorage.getItem('prdata'))) || []);


    const DeleteData = (id) => {
        console.log(id);
        let del = record.filter(item => item.id != id);
        localStorage.setItem('prdata', JSON.stringify(del));
        setRecord(del);
    }

    return (
        <>
            <Header />
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
                                record.map((val, i) => {
                                    i++
                                    return (
                                        <tr key={val.id}>
                                            <td>{i}</td>
                                            <td>{val.name}</td>
                                            <td>{val.price}</td>
                                            <td>{val.desc}</td>
                                            <td>{val.category}</td>
                                            <td>
                                                <Button variant="primary" onClick={()=>handleShow(val.id)}>&#x2637; Read</Button>
                                                <Button as={Link} variant="success" className='mx-2' to={`/add/${val.id}`}>&#9998; Edit</Button>
                                                <Button variant="danger" onClick={() => DeleteData(val.id)}>&#10005; Delete</Button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }


                        </tbody>
                    </Table>
                </Row>
            </Container>


            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='text-bg-dark'></Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-dark'>{read.name}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

