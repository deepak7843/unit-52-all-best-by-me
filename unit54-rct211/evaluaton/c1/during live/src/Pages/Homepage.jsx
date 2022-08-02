import { Axios } from "axios";
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
    <div>
      <table>
        <thead style={{ fontWeight: "700" }}>
          <tr>
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
              <tr>
              <th>{item.id}</th>
              {/* <th>{item.profile_pic}</th> */}
              <th>{ <img src={item.profile_pic} alt="" /> }</th>
              <th>{item.first_name}</th>
              <th>{item.last_name}</th>
              <th>{item.email}</th>
              <th>{item.gender}</th>
              <th>{item.country}</th>
            </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Homepage;
