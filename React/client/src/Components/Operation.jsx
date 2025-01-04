import {add,sub,mul,div} from './Calculator.js';

const Operation = () => {
  return (
  <>
  <ul>
    <li>{add(1,2)}</li>
    <li>{sub(1,2)}</li>
    <li>{mul(1,2)}</li>
    <li>{div(1,2)}</li>
  </ul>
  </>
  )
}

export default Operation    