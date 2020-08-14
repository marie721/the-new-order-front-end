import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import "../../styles/home.scss";

export const SignUp = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = data => {
		console.log(data);
	};

	return (
		<div className="container text-center d-flex p-5 mt-5 h-75 bg-danger">
			<div className="w-50 border border-white">
				<div>
					<h1 className="w-50 text-center mr-auto ml-auto mt-5 text-white">{"Welcome to the New Order"}</h1>
				</div>
			</div>
			<div className="w-50">
				<form
					className="d-flex flex-column mr-auto ml-auto w-75 h-75 justify-content-between mt-5"
					onSubmit={() => handleSubmit(onSubmit)}>
					<h3 className="text-white">{"Let's grow your business"}</h3>
					<input
						type="text"
						id="name"
						name="name"
						ref={register}
						placeholder="Vendor Name"
						className="rounded"
					/>
					<input type="text" id="email" name="email" ref={register} placeholder="Email" className="rounded" />
					<input
						type="password"
						id="password"
						name="password"
						ref={register}
						placeholder="Password"
						className="rounded"
					/>
					<input
						type="tel"
						id="phone"
						name="phone"
						ref={register}
						placeholder="Phone Number"
						className="rounded"
					/>
					<input
						type="submit"
						name="submit"
						ref={register}
						value="SIGN UP"
						className="w-50 ml-auto mr-auto rounded bg-white"
					/>
				</form>
			</div>
		</div>
	);
};