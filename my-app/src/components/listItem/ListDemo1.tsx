
function ListDemo1() {
    const carsArr = ['Tata', 'BMW', 'Honda', 'hyundai', 'Toyota']
    return <>
    <h3>Car List(with error in console 'no key'):</h3>
    <ul>
        {carsArr.map(car=>{
            return <li>{car}</li>
        })}
    </ul>

    <h3>Car List(with key no error):</h3>
    <ul>
        {carsArr.map((car, ind)=>{
            return <li key={ind}>{car}</li>
        })}
    </ul>

    <h3>Car List Dropdown:</h3>
    <select>
        {carsArr.map(car=>{
            return <option>{car}</option>
        })}
    </select>
  </>
}

export default ListDemo1