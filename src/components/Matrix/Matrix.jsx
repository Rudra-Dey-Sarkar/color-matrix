import React from "react";
import { v4 as uuidv4 } from 'uuid';

// Feature to control colors 
function addBox(arr, id) {
    if (arr.length < 9 - 1) {
        if (arr.length === 0 || arr.indexOf(id) === -1) {
            arr.push(id);
            document.getElementById(id).style.backgroundColor = "#32CD32";
        } else {
            document.getElementById(id).style.backgroundColor = "white";
            arr.pop(arr.indexOf(id));
        }
    } else {
        arr.push(id);
        document.getElementById(id).style.backgroundColor = "orange";
        let i = arr.length - 1;
        const interval = setInterval(() => {
            if (i >= 0) {
                document.getElementById(arr[i]).style.backgroundColor = "orange";
                arr.pop(i);
                i--;
            } else {
                clearInterval(interval);
            }
        }, 100);
    }
}

function Matrix() {
    const uuid = uuidv4();
    const matrix = [];
    const arr = [];

    for (let i = 0; i < 3; i++) {
        const row = [];
        for (let j = 0; j < 3; j++) {
            row.push(<button
                key={uuid + i + j}
                id={uuid + i + j}
                className="m-[1px] p-10 bg-white"
                onClick={(e) => addBox(arr, e.target.id)}>
            </button>);
        }
        matrix.push(<div key={i} className="w-fit bg-slate-500">{row}</div>);
    }


    return (
        <div className="w-full h-[100vh] flex justify-center pt-[25vh]">
            <div>
                <p className="text-[1.2rem] font-semibold mb-5">Tap to change box color 👇🏼</p>
                {matrix}
            </div>
        </div>
    );

}

export default Matrix;
