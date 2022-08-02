// import { Axios } from "axios";

import React, { useEffect } from "react";
import {
  getProfileDetailFailure,
  getProfileDetailRequest,
  getProfileDetailSuccess,
} from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Homepage = () => {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profileData);

  const getProfileData = () => {
    dispatch(getProfileDetailRequest());
    axios
      .get("/profile")
      .then((r) => {
        console.log("r---", r);
        dispatch(getProfileDetailSuccess(r.data));
      })
      .catch((e) => dispatch(getProfileDetailFailure(e)));
  };

  useEffect(() => {
    if (profileData?.length === 0) {
      getProfileData();
    }
  }, []);

  console.log(profileData);

  return (
    // <div style={{justifyContent: 'center'}} >
    <div className="flex">
      {/* // <div> */}
      {/* <table style={{marginLeft: "200px"}} > */}
      <table className="table" >
        <thead style={{ fontWeight: "700" }}>
          <tr className="row" >
            <th>ID</th>
            <th>Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody data-cy="profile-wrapper">
          {/* Map through the profileData received from the json-server on mounting the component to show it in a table format */}

          {profileData?.map((item) => {
            return (
              <tr className="row" >
                <td>{item.id}</td>
                {/* <th>{item.profile_pic}</th> */}
                <td>{<img src={item.profile_pic} alt="" />}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.country}</td>
              </tr>
            );
          })}

        </tbody>
      </table>
    </div>
  );
};

export default Homepage;
