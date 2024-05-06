import React, { useEffect, useState } from 'react'
import { Header } from '../components/header'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

export const Add = () => {
    const { id } = useParams();
    const nevigate = useNavigate()
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [desc, setDesc] = useState('');
    const [category, setCatecory] = useState('');
    const [old, setOld] = useState((JSON.parse(localStorage.getItem('prdata'))) || [])
    const editid = Number(id)


    const handalSubmit = (e) => {
        e.preventDefault();


        if (editid) {
            console.log(editid);
            let up = old.map((val)=>{
                if(val.id === editid){
                    return{
                        ...val,
                        name : name,
                        price: price,
                        desc : desc,
                        category : category
                    }
                }
                return val
            })
            localStorage.setItem('prdata',JSON.stringify(up));
            nevigate('/')


        } else {
            let obj = {
                id: Math.floor(Math.random() * 100),
                name,
                price,
                desc,
                category
            };
            let old = JSON.parse(localStorage.getItem('prdata')) || [];
            let mrg = [...old, obj];
            localStorage.setItem('prdata', JSON.stringify(mrg))
            setOld(mrg)
        }

    }
    useEffect(() => {
        if (editid) {
            let single = old.find(item => item.id === editid);
            setName(single.name);
            setPrice(single.price);
            setDesc(single.desc);
            setCatecory(single.category);
        }
    }, [editid])

    return (
        <>
            <Header />
            <Container>
                <Row>
                    <div className="w-50">
                        <Form onSubmit={handalSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} value={name} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasictext">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="text" placeholder="Enter Price" onChange={(e) => setPrice(e.target.value)} value={price} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows={3} onChange={(e) => setDesc(e.target.value)} value={desc} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasictext">
                                <Form.Label>Category</Form.Label>
                                <Form.Control type="text" placeholder="Enter Category" onChange={(e) => setCatecory(e.target.value)} value={category} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </Row>
            </Container>
        </>
    )
}
