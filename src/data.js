import axios from 'axios';
const url="https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";
export const getData=async()=> {
    try{
    const response=await axios.get(`${url}`)
    return response.data;
    }
    catch(e){
        console.error(e)
        alert("failed to fetch data")
        return [];
    }
    
}
