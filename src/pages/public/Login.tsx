import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuthentication } from "../../hooks/useAuthentication";

interface LoginFormModel {
    username: string;
    password: string;
}

export const Login: React.FC = () => {
    const auth = useAuthentication();
    const navigate = useNavigate();
    const {register, handleSubmit, formState} = useForm<LoginFormModel>();
    const {errors} = formState;

    const login = (data: LoginFormModel) => {
        if(auth.login(data.username, data.password)) {
            navigate('/');
        } else {
            alert('credenziali errate');
        }
    } 

    const inputClasses = (error: boolean) => {
        return error ? "form-control is-invalid" : "form-control";
    }

    return (
        <div className="row mt-4">
            <div className="col-md-4">&nbsp;</div>
            <div className="col-md-4 center">
            <form onSubmit={handleSubmit(login)}>
                    <div className="form-outline mb-4">
                        <input type="text" id="form2Example1" className={inputClasses(!!errors.username)} {...register("username", {required: true})} />
                        <label className="form-label" htmlFor="form2Example1">Email address</label>
                    </div>
                    <div className="form-outline mb-4">
                        <input type="password" id="form2Example2" className={inputClasses(!!errors.password)} {...register("password", {required: true})} />
                        <label className="form-label" htmlFor="form2Example2">Password</label>
                    </div>
                    <div className="row mb-4">
                        <div className="col d-flex justify-content-center">
                        </div>
                    </div>

                <input type="submit" className="btn btn-primary btn-block mb-4" value="Login"/>
            </form>
            </div>
            <div className="col-md-4">&nbsp;</div>
        </div>
        
    );
}