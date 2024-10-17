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
            handleLogin(response.id, response.user_role, response.access_token, response.refresh_token);
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
                <form action={submitLogin} className='space-y-8'>
                    <input 
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder='Your first name'
                        type="text"
                        className='w-full px-4 h-[54px] border border-gray-300 rounded-xl'
                    />

                    <input 
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder='Your last name'
                        type="text"
                        className='w-full px-4 h-[54px] border border-gray-300 rounded-xl'
                    />

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
                            <div key={`error_${index}`} className='p-5 bg-n-17 text-n-1 rounded-xl opacity-80'>
                                {error}
                            </div>
                        )
                    })}



                    <CustomButton label="Sign up" onClick={submitSignUp} /> 
                    <p className='flex gap-2 justify-center'>Already have an account? <span className='text-n-15 cursor-pointer hover:underline' onClick={() => setIsSignUp(!isSignUp)}> Sign in</span></p>
                </form>
            ) : (
                <form action={submitLogin} className='space-y-8'>
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
                        <div key={`error_${index}`} className='p-5 bg-n-17 text-n-1 rounded-xl opacity-80'>
                            {error}
                        </div>
                    )
                })}

                <CustomButton label="Sign in" onClick={submitLogin} /> 
                <p className='flex gap-2 justify-center'>Don't have an account? <span className='text-n-15 cursor-pointer hover:underline' onClick={() => setIsSignUp(!isSignUp)}> Sign up</span></p>
            </form>
            )}
            
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