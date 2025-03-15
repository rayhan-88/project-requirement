import {create} from "zustand";
import axios from "axios";
import toast from "react-hot-toast";


const userStore =create((set)=>({
    FormData:{},
    FormDataOnChange: (name, value)=>{
        set((state)=>({
            FormData:{
                ...state.FormData,
                [name]:value
            }
        }))
    },

    SignUpFormRequest:async (postBody)=>{
        try {
            const result = await axios.post('/api/signup',postBody);
            console.log(result);
            if(result['data']['status'] === true) {
                toast.success(result["data"]["message"])
                return true
            }

        }
        catch(error){
            toast.error('Something went wrong!');
            return {status:false,message:error.toString()};
        }
    },
    SignInFormRequest:async (postBody)=>{
        try {
            const result = await axios.post('/api/signin',postBody);
            if(result['data']['status'] === true) {
                toast.success(result["data"]["message"])
                return true
            }

        }
        catch(error){
            toast.error('Something went wrong!');
            return {status:false,message:error.toString()};
        }
    }

}))

export default userStore;