import './LoginPage.css'

export const LoginPage = (props) => {
    return (
        <div>
            <div className="title">
               <span id="title">Seatin'</span>
            </div>
            <div className="box">
                <div className="container">
                    <div className="center">
                        <button class="btn">
                        <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
                        <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
                        <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
                        </svg>
                        <span>Login with SSO</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;