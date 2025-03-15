import {create} from "zustand";
import axios from "axios";
import toast from "react-hot-toast";



const companyStore = create((set)=>({
    CompanyData:[],

    CompanyRequest: async () => {
        try {
            const result = await axios.get("/api/get-company");
            const data = result.data;

            if (data.status === true && data.companies) {
                set({ CompanyData: [data.companies] });
                return true;
            }
        } catch (error) {
            toast.error("Something went wrong!");
            return { status: false, message: error.toString() };
        }
    },

    FormData:{},
    FormDataOnChange: (name, value)=>{
        set((state)=>({
            FormData:{
                ...state.FormData,
                [name]:value
            }
        }))
    },
    SearchKeyword:"",
    SetSearchKeyword:async (keyword)=>{
        set({SearchKeyword:keyword})
    },

    ColleagueData:null,
    ColleagueRequest: async (keyword) => {
        try {
            const result = await axios.get(`/api/colleague-search/${keyword}`);
            if (result?.data?.status === true) {
                set({ ColleagueData:result?.data?.search });
                return true;
            }
        } catch (error) {
            toast.error("Something went wrong!");
            return { status: false, message: error.toString() };
        }
    },
    ReviewData:null,
    ReviewRequest: async (id) => {
        try {
            const result = await axios.get(`/api/colleague-reviews/${id}`);
            if (result.data.status === true) {
                set({ ReviewData:result.data.review });
                return true;
            }
        } catch (error) {
            toast.error("Something went wrong!");
            return { status: false, message: error.toString() };
        }
    }



}))

export default companyStore;