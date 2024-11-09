import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import Modal from './Modal';
import useAuthModal from '../../hooks/useAuthModal';
import GoogleLoginButton from './GoogleLoginButton';
import CustomButton from './CustomButton';
import { handleLogin } from '../../lib/auth/actions';
import apiService from '../../services/apiService';

const AuthModal = ({navUrl}) => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [isSignUp, setIsSignUp] = useState(false);
    const [label, setLabel] = useState('')
    
    const authModal = useAuthModal();

    useEffect(() => {
        setLabel(isSignUp? 'Sign Up' : 'Login')
    }, [isSignUp])

    const submitSignUp = async (e) => {
        e.preventDefault();

        const formData = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password:  password
        }

        const response = await apiService.post('/auth/register/', formData)
        
        if (response.access_token) {
            handleLogin(response.id, response.user_role, response.access_token, response.refresh_token);
            authModal.close()
            if (navUrl) {
                navigate(navUrl)
            }
        } else {
            setErrors(response.errors)
        }
    }

    const submitLogin = async (e) => {
        e.preventDefault();

        const formData = {
            email: email,
            password:  password
        }

        const response = await apiService.post('/auth/login/', formData)
        

        if (response.access_token) {
            handleLogin(response.id, response.first_name, response.last_name, response.user_role, response.access_token, response.refresh_token);
            authModal.close()
            if (navUrl) {
                navigate(navUrl)
            }
        } else {
            setErrors(response.errors)
        }
    }

    const handleGoogleSuccess = async (response) => {
        const authToken = response.credential;

        try {
            const response = await apiService.post('/social_auth/google/', {'auth_token': authToken})
            console.log(response.id)
            if (response.access_token) {
                handleLogin(
                    response.id,
                    response.user_role,
                    response.access_token,
                    response.refresh_token
                );
                authModal.close()
                if (navUrl) {
                    navigate(navUrl)
                }
            }
        } catch (error) {
            console.error('Error during Google authentication:', error);
            setErrors([{message: 'Failed to authenticate with Google'}])
        }
    }

    const handleGoogleFailure = (error) => {
        console.log('Google login failed:', error);
        setErrors([{message: 'Failed to authenticate with Google'}])
    }

    const content = (
        <>
            {isSignUp ? (
                <form action={submitLogin} className='space-y-4'>
                    <div className='space-y-2'>
                        <h5>Hi, Welcome to Datalab</h5>
                        <p>Create an account or <span className='underline cursor-pointer hover:underline' onClick={() => setIsSignUp(!isSignUp)}>login to existing account</span></p>
                    </div>
                    <div className='pb-4'>
                        <label htmlFor="first_name">First name</label>
                        <input 
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder='Your first name'
                            type="text"
                            className='w-full px-4 h-[54px] border border-gray-300 rounded-xl'
                        />
                    </div>

                    <div className='pb-4'>
                        <label htmlFor="last_name">Last name</label>
                        <input 
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder='Your last name'
                            type="text"
                            className='w-full px-4 h-[54px] border border-gray-300 rounded-xl'
                        />
                    </div>

                    <div className='pb-4'>
                        <label htmlFor="email">Email</label>
                        <input 
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Your email address'
                            type="email"
                            className='w-full px-4 h-[54px] border border-gray-300 rounded-xl'
                        />
                    </div>

                    <div className='pb-4'>
                    <label htmlFor="password">Password</label>
                        <input 
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Your password'
                            type="password"
                            className='w-full px-4 h-[54px] border border-gray-300 rounded-xl'
                        />
                    </div>

                    {errors.map((error, index) => {
                        return (
                            <div key={`error_${index}`} className='p-5 bg-n-17 text-n-1 rounded-xl opacity-80'>
                                {error}
                            </div>
                        )
                    })}



                    <CustomButton label="Sign up" onClick={submitSignUp} /> 
                </form>
            ) : (
                <form action={submitLogin} className='space-y-8'>
                    <div className='space-y-2'>
                        <h5>Hi, Welcome to Datalab</h5>
                        <p>Sign in to your account or <span className='underline cursor-pointer hover:underline' onClick={() => setIsSignUp(!isSignUp)}>create a new account</span></p>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input 
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Your email address'
                            type="email"
                            className='w-full px-4 h-[54px] border border-gray-300 rounded-xl'
                        />
                    </div>

                    <div>
                    <label htmlFor="password">Password</label>
                        <input 
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Your password'
                        type="password"
                        className='w-full px-4 h-[54px] border border-gray-300 rounded-xl'
                        />
                    </div>

                {errors.map((error, index) => {
                    return (
                        <div key={`error_${index}`} className='p-5 bg-n-17 text-n-1 rounded-xl opacity-80'>
                            {error}
                        </div>
                    )
                })}

                <CustomButton label="Sign in" onClick={submitLogin} /> 
                </form>
            )}

            <div className="flex items-center pt-4 pb-2">
                <hr className="flex-grow border-t" />
                <span className="px-2">OR</span>
                <hr className="flex-grow border-t" />
            </div>
            
            <div className='mt-4'>
                <GoogleLoginButton 
                    onSuccess={handleGoogleSuccess}
                    onError={handleGoogleFailure}
                />
            </div>
        </>
    )

    return (
        <Modal 
            isOpen={authModal.isOpen}
            close={authModal.close}
            label={label}
            content={content}
        />
    )
}

export default AuthModal;