interface Greeting{
  name:string; // mandatory props
  msg?:string; //optional props
}
export default function PropsDemo1({name, msg = 'good morning'}:Greeting){
  return <h3>Hello, {name} -- {msg}</h3>;
}





/*This below code is written in java script
import PropTypes from 'prop-types';

export default function PropsDemo1(props:any) {
  return <h3>Hello, {props.name} -- {props.msg}</h3>;
}

PropsDemo1.propTypes = {
  name: PropTypes.string.isRequired, //mandatory props
  msg: PropTypes.string
};
*/
