import { useReactiveVar } from "@apollo/client";
import { testVar } from "../Apollo/client";

function TestApolloState() {
  const numbers = useReactiveVar(testVar);

  const handleClick = () => {
    testVar([4,5,6]);
  };

  return (
    <div>
      <div>{numbers.map((n)=>{
        return(
            <p key={n}>n:{n}</p>
        )
      })}</div>
      <div>
      <button onClick={handleClick}>Update Value</button>
    </div>
    </div>
  );
}

export default TestApolloState;
