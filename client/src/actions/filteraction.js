import React, { useEffect, useState } from "react";
import axios from "axios";



export const filterVaccines = (vaccines)=> async dispatch=>{
   
    dispatch({type:"GET_filtered"})
    let filterData;

    try{
        const response = await axios.get("/api/user/get-all-approved-doctors", {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          });
        filterData = response.data((doctor)=> doctor.vaccinesArray.includes(vaccines))
        dispatch({type:"success",payload:filterData})

    }catch(error){
        dispatch({type:"failed"})
    }
}

export default filterVaccines;