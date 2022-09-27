import React from "react";
import { useForm } from 'react-hook-form';
import './join.css';

function Join(){
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
    const onSubmit = data => console.log(data);
    
    return (
        <div>
            <form className="join" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="title">회원가입</h1>
                <div className="text name">
                    <label htmlFor="name">이름</label>
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
                    <label htmlFor="email">이메일</label>
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
                    <input className="join_btn" type="submit" value="회원가입"></input>
                </div>
            </form>
        </div>
    )
}

export default Join;