import React,{useState, useEffect}from "react";
import { useSelector,useDispatch } from "react-redux";
import { Button, Col, Radio,Row} from "antd";
import filterVaccines from "../actions/filteraction";
import Doctor from "./Hospital";


const Filter = () =>{
    const [vaccines,setVaccines] = useState('all');
    const dispatch = useDispatch();
    return(
        <>
        <Col>
        <select value = {vaccines} onChange={e => setVaccines(e.target.value)}>
        <option>all</option>
        <option>A</option>
        <option>B</option>
        </select>
        </Col>
        <Col>
        <Button onClick={()=>{dispatch(filterVaccines(vaccines))}}>
            Search
        </Button>
        
        </Col>
        
        </>
    )
}

export default Filter;