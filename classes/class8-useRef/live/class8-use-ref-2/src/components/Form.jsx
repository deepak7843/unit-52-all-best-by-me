import React, { useEffect } from "react";
import { useState, useRef } from "react";
import styles from './form.module.css'

// const Form = () => {
//   const [form, setForm] = useState({
//     // name: "",
//     username: "",
//     email: "",     
//     password: "",
//     age: 0,
//     isIndian: false,
//   });

////////*******************************************

// const Form = () => {
//   const [form, setForm] = useState({
//      city: "gkp"
//   });

////////*******************************************

const Form = () => {
  const [form, setForm] = useState({});
  const ref = useRef();
  const passRef = useRef();

  const handleOnChange = (e) => {
    // console.log(e);
    // console.log(e.target);

    //    if(e.keyCode===13){
    //        console.log("press enter key");
    //    }
    // if(e.keyCode===32){
    //     console.log("press space button key");
    // }
    ////////*******************************************
    // let { name, target } = e;
    // console.log(name, target);
    // console.log(e, target.value);
    ////////******************************************
    // let { name, value } = e.target;
    // console.log(name, "--", value);

    ////////*****************************************
    // let { name, value } = e.target;
    let { checked, type, name, value, files } = e.target;

    // let name = e.target.name;
    // let value = e.target.value; ////// 1--13--36

    // console.log(
    //   "type--",
    //   type,
    //   "name--",
    //   name,
    //   ",",
    //   "value--",
    //   value,
    //   "checked--",
    //   checked
    // );

    if (type === "checkbox") {
      setForm({
        ...form,
        [name]: checked,
      });
    } else if (type === "file") {
      setForm({
        ...form,
        [name]: files,
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }

    // setForm({
    //   ...form,
    //   [name]: value,
    // });
    // // console.log(form);
  };

  // useEffect(() => {
  //   console.log(form);
  // }, [form]);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    // console.log(form);
    // ref.current.focus()

    if (!form.username) {
      ref.current.focus()
      // console.log( "ref.current---" ,ref.current);
      console.log("ref--", ref);
      ref.current.className += styles.redBorder
    }
    else if (!form.password) passRef.current.focus();
  };

  return (
    <div>
      Form
      <form onSubmit={handleOnSubmit}>
        <div>
          <label> Name: </label>
          <input
            ref={ref}
            type="text "
            name="username"
            placeholder="enter name"
            value={form.name}
            onChange={handleOnChange}

            // onKeyUp={onChange}
            // onKeyDown={onChange}

            // onClick={onChange}
          />
        </div>
        <div>
          <label> Email: </label>
          <input
            type="text "
            name="email"
            placeholder="enter Email"
            value={form.email} /////50--38  ////for default value
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label> password: </label>
          <input
            ref={passRef}
            type="password "
            name="password"
            placeholder="enter password"
            value={form.password}
            onChange={handleOnChange}
          />
        </div>

        <div>
          <label> age: </label>
          <input
            type="number"
            name="age"
            placeholder="enter age"
            value={form.age}
            onChange={handleOnChange}
          />
        </div>

        <div>
          <input
            type="checkbox"
            name="isIndian"
            checked={form.isIndian}
            onChange={handleOnChange}
          />
          <label> : is Indian </label>
        </div>

        <div>
          <label> city: </label>
          <select
            name="city"
            defaultValue={form.city}
            onChange={handleOnChange}
          >
            <option value="delhi">delhi </option>

            <option value="gkp"> gkp</option>
            <option value="pune">pune</option>
          </select>
        </div>

        {/* 
        <div>
          <label> Gender: </label>
          <select
            name="selectGender"
            value={form.selectGender}
            onChange={handleOnChange}
          >
            <option value=""> </option>

            <option value="male"> Male</option>
            <option value="female">Female</option>
          </select>
        </div> */}

        <div>
          <div>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleOnChange}
            />
            <label> Male</label>
          </div>

          <div>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleOnChange}
            />
            <label> Female</label>
          </div>
        </div>

        <div>
          <label> user resume: </label>
          <input
            type="file"
            accept="image/png, image/jpeg, application/pdf"
            name="resume"
            files={form.resume}
            onChange={handleOnChange}
          />
        </div>

        <button type="submit"> submit </button>
      </form>
    </div>
  );
};

export default Form;
