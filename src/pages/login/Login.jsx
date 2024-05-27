import Button from '../../components/HomePage/Button';

import Section from "../../components/HomePage/Section";

import { useState } from 'react';
import { handleLogin } from '../../lib/auth/actions';
import { useNavigate } from 'react-router-dom';
import apiService from "../../services/apiService";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErros] = useState([]);

    const submitLogin = async (e) => {
        e.preventDefault();

        const formData = {
            email: email,
            password:  password
        }

        const response = await apiService.post('/auth/login/', formData)
        console.log(response)

        if (response.access_token) {
            handleLogin(response.id, response.user_role, response.access_token, response.refresh_token);

            navigate('/')
        } else {
            setErros(response.errors)
        }
    }

   

    return (
        <Section crosses className="overflow-hidden mt-10 lg:mt-0" id="login">
            <div className='container relative z-2 mt-10 lg:mt-0'>
                <div className='flex flex-col justify-center items-center md:flex-row'>
                    <div className='flex flex-col border p-5 rounded-xl'>
                        <h2 className='h2 mb-4 md:mb-8 flex justify-center'>Log in</h2>

                    
                        <form className='space-y-4'>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Your email address' 
                                type="email"
                                className='w-full px-4 h-[54px] border border-gray-300 rounded-xl' 
                            />

                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Your password' 
                                type="password"
                                className='w-full px-4 h-[54px] border border-gray-300 rounded-xl' 
                            />

                            {errors.map((error, index) => {
                                return (
                                    <div key={`error_${index}`} className='p-5 bg-red-500 text-white rounded-xl opacity-80'>
                                        {error}
                                    </div>
                                )
                            })}

                            <div className="flex justify-center">
                                <Button onClick={submitLogin}>
                                    Sign in
                                </Button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Login