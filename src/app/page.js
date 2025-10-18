'use client'

import Image from "next/image";
import { useState } from "react";
import Counter from "./component/counter";

function Header(){
  return (
    <>
    <p>This is Header</p>
    </>
  )
}

//function Counter(){
  //const [count, setCount] = useState(0);

  //return (
    //<div>
      //{count}
      //<button type='button' onClick={() => setCount(count + 1)}>Increase Counter</button>
      //<button type='button' onClick={() => setCount(count - 1)}>Decrease Counter</button>
      //<button type='button' onClick={() => setCount(0)}>Reset Counter</button>
    //</div>
  //);
//}


export default function Home() {
  return (
    <div>
      <Header />
      <p>Hello React</p>
      <Counter initCount='0'/>
    </div>
  );
}
