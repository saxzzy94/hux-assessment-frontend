import { FC, FormEventHandler, RefObject } from "react";
import Input from "../../component/TextInput";
import Button from "../../component/Button";

type Props = {
	btnText: string;
	emailRef: RefObject<HTMLInputElement>;
	passwordRef: RefObject<HTMLInputElement>;
	onSubmit: FormEventHandler<HTMLFormElement>;
};

const AuthForm: FC<Props> = ({ btnText, emailRef, passwordRef, onSubmit }) => {
	return (
		<form onSubmit={onSubmit}>
			<Input
				reference={emailRef}
				label={"Email"}
				type={"email"}
				name={"email"}
				placeholder="Enter you email"
			/>
			<Input
				reference={passwordRef}
				label={"Password"}
				type={"password"}
				name={"password"}
				placeholder="Enter your password"
			/>
			<Button
				className={"bg-blue-900 w-full text-white max-w-md"}
				type="submit"
			>
				{btnText}
			</Button>
		</form>
	);
};
export default AuthForm;
