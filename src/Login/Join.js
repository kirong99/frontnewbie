import React, { useRef } from "react";
import { useForm } from 'react-hook-form';
import './join.css';

function Join(){
	const {
		register,
		handleSubmit,
        watch,
		formState: { errors },
	} = useForm();
    const onSubmit = data => console.log(data);
    const password = useRef({});
    password.current = watch("password","");
    
    return (
        <div>
            <form className="join" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="title">회원가입</h1>
                <div className="text id">
                    <label htmlFor="id">아이디<span className="dot"></span></label>
                        <div className="id_box">
                            <input
                                className="input id_input"
                                id="id"
                                type="text"
                                placeholder="아이디를 입력해주세요."
                                {...register("id", {
                                required: "아이디는 필수 입력입니다.",
                                })}
                            />
                            <button type="submit" className="dupli">중복확인</button>
                        </div>
                </div>
                {errors.id && <small role="alert" className="alert">{errors.id.message}</small>}
                <div className="text pwd">
                    <label htmlFor="pwd">비밀번호<span className="dot"></span></label>
                        <div>
                            <input
                                className="input"
                                id="pwd"
                                type="password"
                                placeholder="영문,숫자,특수문자를 혼합해서 비밀번호를 입력해주세요."
                                {...register("pwd", {
                                required: "비밀번호는 필수 입력입니다.",
                                pattern:{
                                    value : /^(?=.*\d)(?=.*[a-zA-ZS]).{8,}/,
                                    message : "비밀번호 형식에 맞지 않습니다."
                                }
                                })}
                            />
                        </div>
                </div>
                {errors.pwd && <small role="alert" className="alert">{errors.pwd.message}</small>}
                <div className="text pwd_conf">
                    <label htmlFor="pwd_conf">비밀번호 확인<span className="dot"></span></label>
                        <div>
                            <input
                                className="input"
                                id="pwd_conf"
                                type="password"
                                {...register("pwd_conf",{
                                    required:"비밀번호를 한번 더 입력해주세요.",
                                    validate: value => value === password.current || "패스워드가 일치하지 않습니다."
                                })}
                            />
                        </div>
                </div>
                {errors.pwd_conf && <small role="alert" className="alert">{errors.pwd_conf.message}</small>}
                <div className="text name">
                    <label htmlFor="name">이름<span className="dot"></span></label>
                    <div>
                        <input
                            className="input"
                            id="name"
                            type="text"
                            placeholder="이름을 입력해주세요."
                            {...register("name", {
                            required: "이름은 필수 입력입니다.",
                            })}
                        />
                    </div>
                </div>
                {errors.name && <small role="alert" className="alert">{errors.name.message}</small>}
                <div className="text email">
                    <label htmlFor="email">이메일<span className="dot"></span></label>
                    <div>
                        <input
                            className="input"
                            id="email"
                            type="text"
                            placeholder="abcd@email.com"
                            {...register("email", {
                            required: "이메일은 필수 입력입니다.",
                            pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "이메일 형식에 맞지 않습니다.",
                            },
                            })}
                        />
                    </div>
                </div>
                {errors.email && <small role="alert" className="alert">{errors.email.message}</small>}
                <div className="text birth">
                    <label htmlFor="birthdate">생년월일</label>
                    <div>
                        <input
                            className="input"
                            id="birthdate"
                            type="date"
                            {...register("birthdate",{
                                required: "생년월일은 필수입니다."
                            })}
                            
                        />
                    </div>
                </div>
                <div>
                    <input className="join_btn" type="submit" value="회원가입" ></input>
                </div>
                
            </form>
        </div>
    )
}

export default Join;