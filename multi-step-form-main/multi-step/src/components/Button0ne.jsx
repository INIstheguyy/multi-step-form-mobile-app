import "./Button.css";

const Button1 = ({ nextPage, isFormValid }) => {
  let defualtState = " bg-blue-400 text-white rounded-md py-2 px-4 float-right text-sm mr-2 mt-2 next-step cursor-pointer";
  let validState = "bg-blue-900 text-white rounded-md py-2 px-4 float-right text-sm mr-2 mt-2 next-step cursor-pointer"
  let classState = isFormValid? validState : defualtState
  return (
    <button className={classState} onClick={nextPage } disabled={!isFormValid}>
      Next Step
    </button>
  );
};

export default Button1;
