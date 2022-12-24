import { forwardRef, useRef} from "react";

const MyInput = forwardRef((props,ref) => <input ref={ref} type="text" className="mr-15"/>)

function UseRefComposant() {
    const inputRef = useRef(null);
    console.log(inputRef);
    function handleClick() {
        inputRef.current.focus()
    }

    return <>
        <MyInput ref={inputRef}/>
        <button onClick={ handleClick} className="btn btn-primary">focus me!</button>
    </>
}

export default UseRefComposant;