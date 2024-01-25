import "../styles/login.css"

function LoginPage(){
    return (
    <>
        <div className="login-app">
            <div className="login-container">
                <form action="" id="login-inputs" method="post">
                    <header>
                        <h1>Login</h1>
                    </header>
                    <main>
                        <div className="login-input">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" id="username" />
                        </div>
                        <div className="login-input">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" />
                        </div>
                    </main>
                    <footer>
                        <button id="login-btn">Login</button>
                        <button id="register-btn">Register</button>
                    </footer>
                </form>
            </div>
        </div>
    </>)
}

export default LoginPage;