import React from 'react';
const InputName = (props) => {
return <label>
Input Name :
<input value={props.name} onChange={props.changeName}/>
</label>;
}
export default InputName;