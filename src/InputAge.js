import React from 'react';
const InputAge = (props) => {
return <label>
Input Age :
<input type="number" value={props.age}
onChange={props.changeAge}/>
</label>;
}
export default InputAge;