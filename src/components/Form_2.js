const Form2 = () => {
    return (
        <div
            className="bg-secondary bg-gradient container-fluid min-vw-100 min-vh-100 d-flex justify-content-center align-items-center"
        >
            <div
                className="d-grid gap-2 col-12 col-md-9 col-lg-4 mx-auto p-4 shadow bg-light rounded"
            >
                <h3 className="text-center">Log In</h3>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label"
                    >Email address</label
                    >
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter your E-mail"
                        autofocus
                        autocomplete
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Enter your password"
                    />
                </div>
                <input type="submit" className="btn btn-primary" />
            </div>
        </div>
    )

}
export default Form2