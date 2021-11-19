import React from 'react'
import {Container, Table,Image } from 'react-bootstrap'
import {FiPhoneCall} from 'react-icons/fi'
import {ImMobile} from 'react-icons/im'
import {AiOutlineMail} from 'react-icons/ai'
const Contact = () => {
    return (
        <>
            <Container style={{marginTop:"25px"}}>
                <Image src="assets/bg.jpg"  style={{width:'100%',heigth:'5%'}}/>
                <Table stripped bordered hover className="text-center">
                    <thead>
                        <tr>
                            <th className="bg-info text-center" colSpan={3} style={{color: '#141414',fontFamily:'serif',fontStyle:'italic'}}>
                                Contact Details
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <FiPhoneCall/>

                            </td>
                            <td>Phone</td>
                            <td>0123-45678</td>
                        </tr>
                        <tr>
                            <td>
                                <ImMobile/>
                            </td>
                            <td>Call</td>
                            <td>12345678</td>
                        </tr>
                        <tr>
                            <td>
                                <AiOutlineMail/>

                            </td>
                            <td>Email</td>
                            <td>helpdesk@domain.com</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default Contact;
