import "./Button.css";

const Button1 = ({ nextPage,disable }) => {
  let defualtState =
    " bg-blue-900 text-white rounded-md py-2 px-4 float-right text-sm mr-2 mt-2 next-step";
  return (
    <button className={defualtState} onClick={nextPage } disabled={disable}>
      Next Step
    </button>
  );
};

export default Button1;
