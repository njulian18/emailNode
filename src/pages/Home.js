import React from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap/'
import { useForm } from "react-hook-form";

export default function Home() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    
    const style = {
        gral:{
            display:'block',           // flex:1,
            margin: '15% auto', 
        },
        styleInput:{
            marginBottom: '5px',
            display: 'block',
            width:'100%',
            padding: '15px',

        },
        
        text:{
            color:'#fff',
            textAlign:'center',
            width:'100%'
        },
        select:{
            textAlign: 'center',
            width:'100%',
            marginBottom: '5px',

        },
        button:{
            backgroundColor: '#ec5990',
            marginBottom: '5px',
            width:'100%',
            textAlign:'center',
            color: '#fff',
            border: 'none',
            padding: '10px 18px',
        },
            hover:{
               button:{
                backgroundColor:'red',
               }
            }
// --color-light-pink: #ec5990;

    }

    
    return (
        <div > 
            <Container fluid >
                <Row md={4}>
                    <Col xl={4}></Col>
                    <Col xs={12} md={8} xl={4}>
                    <form  style={style.gral}  className=" justify-content-between" onSubmit={handleSubmit(onSubmit)}>
                    <input style={style.styleInput} type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
                    <input style={style.styleInput} type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
                    <input style={style.styleInput}  type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
                    <input style={style.styleInput}  type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
                    <Form.Label style={style.text}>Are you working?</Form.Label> <br />
                    <select style={style.select} {...register("Title", { required: true })}>
                        <option value="Yes">Yes</option>
                        <option value="NO">No</option>
                        {/* <option value="Miss">Miss</option>
                        <option value="Dr">Dr</option> */}
                    </select>
                    <br />
                    <input style={style.button} type="submit" />
                    </form>
                    </Col>
                    <Col xl={4}></Col>
                </Row>
            </Container>
        </div>
    )
}
