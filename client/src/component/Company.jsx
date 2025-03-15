import companyStore from "../store/CompanyStore.js";
import { useEffect } from "react";

function Company() {
    const { CompanyRequest, CompanyData } = companyStore();

    useEffect(() => {
        (async () => {
            await CompanyRequest();
        })();
    }, []);

    return (
        <div className="container mx-auto px-4">
            {CompanyData?.map((item, index) => {
                return (
                    <div key={index} className="flex flex-wrap justify-center gap-6 md:grid md:grid-cols-12">
                        {/* First Box */}
                        <div className="w-full md:col-span-3 flex justify-center">
                            <div className="w-full md:w-[132px] h-[72px] text-center">
                                <span className="text-[20px] md:text-[24px] font-bold">
                                    We Have A <br /> Family of
                                </span>
                            </div>
                        </div>

                        {/* Second Box */}
                        <div className="w-full md:col-span-3 flex justify-center">
                            <div className="w-full md:w-[167px] h-[82px] text-center">
                                <h3 className="text-[20px] md:text-[24px] font-bold">
                                    {item?.totalEmployees}K+
                                </h3>
                                <p className="text-sm md:text-base">Corporate Employee</p>
                            </div>
                        </div>

                        {/* Third Box */}
                        <div className="w-full md:col-span-3 flex justify-center">
                            <div className="w-full md:w-[167px] h-[82px] text-center">
                                <h3 className="text-[20px] md:text-[24px] font-bold">
                                    {item?.totalDesignations}+
                                </h3>
                                <p className="text-sm md:text-base">Designation</p>
                            </div>
                        </div>

                        {/* Fourth Box */}
                        <div className="w-full md:col-span-3 flex justify-center">
                            <div className="w-full md:w-[167px] h-[82px] text-center">
                                <h3 className="text-[20px] md:text-[24px] font-bold">
                                    {item?.totalCompanies}+
                                </h3>
                                <p className="text-sm md:text-base">Corporate Company</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Company;
