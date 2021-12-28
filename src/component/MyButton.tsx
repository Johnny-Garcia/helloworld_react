import React from "react";

export default function MyButton(){
    const handleClick = () => {
        alert('Hello World')
    };

    const handleClick2: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        alert('Clicked: ' + event.currentTarget.name);
    };
return(
    <button onClick={handleClick2} name="hallo">
        Clique Aqui
    </button>
    );
}