import {GoogleLogin} from '@react-oauth/google';

const GoogleLoginButton = ({onSuccess, onError}) => {
    
    return (
        <GoogleLogin 
            onSuccess={onSuccess}
            onError={onError}
            render={(renderProps) => (
                <button 
                    onClick={renderProps.onClick} 
                    disabled={renderProps.disabled}
                    style={{
                        backgroundColor: '#474060',
                        color: '#fff',
                        cursor: 'pointer',
                    }}
                >
                    Sign in With Google
                </button>
            )}
        />
    )
}

export default GoogleLoginButton
