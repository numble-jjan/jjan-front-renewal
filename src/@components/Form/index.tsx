import Main from "./Form";
import ErrorMessage from "./ErrorMessage";
import InputField from "./InputField";
import Label from "../Molecule/FormInput/Label";

const Form = Object.assign(Main, { Label, InputField, ErrorMessage });

export default Form;
