import React from "react";
import { useState } from "react";
import CreateInvoice from "./CreateInvoice";


export default function InvoiceList() {
  const [load, setLoad] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [open, setOpen] = useState(false);
  const [showAndHide, setShowAndHide] = useState(true);
  const [invoices,setInvoices] = useState([])
  const [invoiceid,setInvoiceId]=useState(1000)


   
  return (
    <div className="w-full h-full flex justify-between gap-16 px-10">
      {/* <div className="h-[400px] rounded-e-full w-10 bg-[#6ea864] sm:static sm:visible invisible absolute top-36"></div> */}
      <div className="w-full ">
        <div className=" flex justify-between pr-2">
          <h1 className="font-semibold text-4xl  font-mono text-[#78938a] mt-3 pl-2">
            Invoice
          </h1>
        </div>
        <div className=" flex justify-between pr-2 px-4 pt-3">
        <button className="rounded-full font-semibold px-5 mt-2 border-[#6ea864] border-2 text-sm h-10 hover:bg-[#6ea864] hover:text-white"
            onClick={ ()=>{ setOpen(true)}}
            >
              Create
            </button>

          <div className="gap-2 flex pr-4 h-10">
          <div className="w-full border-2 rounded-lg p-1 h-10   flex mt-2 ">
              <input
                type="search"
                placeholder="Search"
                className=" outline-none  w-full text-base"
              />
              
            </div>
            <button className="rounded-full font-semibold px-5 mt-2 border-[#6ea864] border-2 text-sm h-10 hover:bg-[#6ea864] hover:text-white "
        
            >
              Search
            </button>

          </div>
        </div>


          <div>
            <div class="overflow-x-auto mt-1 p-2 w-full ">
             
              <table class="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th class="text-left pl-2 py-3 bg-[#6ea864]  text-white  text-xs leading-4 font-medium  uppercase tracking-wider  sm:w-32">
                      Invoice Number
                    </th>
                    <th class="text-left pl-2 py-3 bg-[#6ea864] text-white  text-xs leading-4 font-medium  uppercase tracking-wider sm:w-40">
                      Date
                    </th>
                    <th class="text-left pl-2 py-3 bg-[#6ea864] text-white  text-xs leading-4 font-medium  uppercase tracking-wider ">
                      customer Name
                    </th>
                    <th class="text-left pl-2 py-3 bg-[#6ea864] text-white  text-xs leading-4 font-medium  uppercase tracking-wider sm:w-32">
                      Total
                    </th>
                    <th class="text-left pl-2 py-3 bg-[#6ea864] text-white  text-xs leading-4 font-medium  uppercase tracking-wider sm:w-32">
                      Tax
                    </th>
                    <th class="text-left pl-2 py-3 bg-[#6ea864] text-white  text-xs leading-4 font-medium  uppercase tracking-wider sm:w-32">
                      Grand Total
                    </th>
                  </tr>
                </thead>
            
                <tbody>
                    
                  {invoices.map((data,index) => (
                    <tr>
                      <th class="py-4  border-b border-r-2  border-[#6ea864] w-20 sm:w-32 text-xs text-start pl-2">
                        {data.invoiceid}
                      </th>
                      <th class="py-4  border-b border-r-2  border-[#6ea864] w-20 sm:w-32 text-xs text-start pl-2">
                         {data.date}
                      </th>
                      <th class="py-4  border-b border-r-2  border-[#6ea864] w-20 sm:w-32 text-xs text-start pl-2">
                         {data.name == '' ? 'Unnamed Invoice' : data.name}
                      </th>
                      <th class="py-4  border-b border-r-2  border-[#6ea864] w-20 sm:w-32 text-xs text-start pl-2">
                      {data.price}

                      </th>
                      <th class="py-4  border-b border-r-2  border-[#6ea864] w-20 sm:w-32 text-xs text-start pl-2">
                      {data.tax}

                      </th>
                      <th class="py-4  border-b border-r-2  border-[#6ea864] w-20 sm:w-32 text-xs text-start pl-2">
                      {data.grand}

                      </th>
                    </tr>
                   ))} 
                </tbody>
              </table>
            </div>
          </div>
   
      {open &&   <CreateInvoice  setOpen={setOpen} setInvoices={setInvoices} invoiceid={invoiceid} setInvoiceId={setInvoiceId} />  }
      </div>

      <div>

      </div>

    
    </div>
  );
}

