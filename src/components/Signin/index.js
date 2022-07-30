import React from 'react'
import {FaFacebookF , FaLinkedinIn ,FaGithub} from "react-icons/fa";
import {FcGoogle} from "react-icons/fc"
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormWrap, Icon, StyledIcon, Text} from './SigninElements'




const SignIn = () => {
  return (
    <>
    <Container>

        <FormWrap>
            <Icon to="/">Grammered</Icon>
            <FormContent>
                <Form action='#'>
                    <FormH1>Sign-In</FormH1>
                    <FormInput type='email' placeholder='Email' required/>
                    <FormInput type='password' placeholder='Password' required/>
                    <FormButton>Sign-In</FormButton>
                    <Text>Forgot Password</Text>
                    <StyledIcon>
                      <FaFacebookF style={{"color":"	#4267B2"}} />
                      <FcGoogle />
                      <FaLinkedinIn style={{"color":"#0A66C2"}} />
                      <FaGithub style={{"color":" #171515"}} />
                    </StyledIcon>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
    </>
  )
}

export default SignIn