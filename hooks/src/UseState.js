import { useState } from "react";


function StateUse() {

    const[user, setUser] = useState({
       name: '',
       age: null, 
    });

    const [userList, setUserList] = useState([]);

    function handleClick(e) {
        e.preventDefault()
        const newUserList = [...userList, {...user}];
        setUserList(newUserList);
    }

    // function handleInput(e) {
    //     const value = e.target.value;
    //     setUser({
    //         ...user,
    //         name : value,
    //     }) 
    //     console.log(e);
    // }

    // function handleInput(e) {
    //     const value = +e.target.value;
    //     setUser({
    //         ...user,
    //         // name : user.name,
    //         age : value,
    //     });
    //     console.log(e);
    // }

    /** On va utiliser une fonction genérique pour gérer les deux inputs*/

      function handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;
        if(name === 'age') {
            value = +value;
        }
        setUser({
            ...user,
            [name] : value,
        }) 
        console.log(user);
    }

    function handleClickDeleteUser(index) {
        const newUserList = userList.filter((u, i) => i !== index);
        setUserList(newUserList);
    }

    function handleClickSort() {
        const newUserList = [ ...userList];
        newUserList.sort((a, b) => (a.name).localeCompare(b.name));
        setUserList(newUserList);
    }

  return (
  <div className="">
    <form className="d-flex flex-column card p-20 mb-20">
    <input onInput={handleInput} type="text" placeholder="name" name="name" className="mb-20"/>
    <input onInput={handleInput}  type="number" name="age" />
    <button onClick={handleClick} type="submit"  className="btn btn-primary m-20">Submit</button>
    </form>
    <button onClick={handleClickSort} className="mb-20 btn btn-reverse-primary"> trier la liste</button>
    <ul className="d-flex flex-column card p-20">
        {userList.map( (u, index) => (
            <div key={index} className="d-flex flex-row mb-20">
        <li ><span className="flex-fill mr-5">{u.name }</span> </li>
          <button onClick={() => handleClickDeleteUser(index)} className="btn btn-primary">delete</button>
            </div>
        ))}
    </ul>
  
  </div>
  )
}

export default StateUse;
