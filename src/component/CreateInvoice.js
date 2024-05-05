import moment from "moment/moment";
import { useEffect, useState } from "react";



export default function CreateInvoice({setOpen,setInvoices,setInvoiceId,invoiceid}){

  const [details, setDetails] = useState([{ itemId: 1,price:'',tax:''}]);
  const [load, setLoad] = useState(false);
  const [errorMsg,setErrorMsg]=useState('')
  const [saveErrMsg,setSaveErrMsg]= useState('')
  const [totalPrice,setTotalPrice]=useState(0)
  const [totalTax,setTotalTax]=useState(0)
  const [name,setName] = useState('')


  useEffect(()=>{

  },[details,load])

  const handleDetails = async (e, no) => {
    console.log(Number('we'),'pppppppppppppppppppppppp');
    details.forEach((data) => {
      console.log(data,no);
      if (data.itemId === no && details[details.length - 1].itemId == no) {
        console.log(e.target.name);

        let value = Number(e.target.value)
        if(e.target.name == 'price' || e.target.name == 'tax'  ){

          const numericRegex = /^[0-9]*$/;
          console.log(value,e.target.name,typeof(value));
          if(numericRegex.test(value) || value === ''){
            data[e.target.name] = e.target.value;
  
          }
        }else{

          data[e.target.name] = e.target.value;
        }
        
      }
      
    });
    setLoad(!load);
  };

  console.log(details,'ppp');

  const handleAdd = () => {
   
    let valuesNotEmpty = Object.values(details[details.length - 1]).filter(
      (value) => value !== ""
    ).length;

    console.log(valuesNotEmpty,'ooooooooooooooooooo');

    if (valuesNotEmpty == 4) {
      console.log('nannoo');
      setDetails([...details, { itemId: details[details.length - 1].itemId + 1 }]);
      setErrorMsg("");
      setSaveErrMsg('')

      console.log(details);
      setTotalPrice(Number(totalPrice)+Number(details[details.length - 1].price))
      setTotalTax(Number(totalTax)+Number(details[details.length - 1].tax))
     
    } else {
      setErrorMsg(` item Id ${details[details.length - 1].itemId} has not filled`);    
    }


  };

  const handleSave =()=>{
    console.log(details[details.length],details.length,'pppppp');

    if(Number(details.length) > 1){
      let obj={
        name,date:moment().format('DD-MM-YYYY '), 
        tax:totalTax,
        price:totalPrice,
        grand:totalPrice+totalTax,
        invoiceid
      }
  
      
      setInvoiceId(invoiceid+1)
      console.log(setInvoiceId,'this is invoice id')
      setInvoices(prevItems => [...prevItems,obj ]);
      setDetails([{ itemId: 1 }])
      setOpen(false)
      setSaveErrMsg('')

    }else{
      setSaveErrMsg('Add at least one product ')
    }

  }

   useEffect(()=>{

   },[invoiceid,load])
  
    return (
      <div className="py-12  sm:px-12 lg:px-52 w-full mt-5 ">
        <div className="sm:absolute sm:hidden flex justify-end items-center w-full  ">
      
        </div>
      <div className="bg-slate-200 rounded-lg p-2">
        <div className="grid sm:grid-cols-3 gap-4 grid-cols-2 sm:gap-16 mx-auto mb-4 border-2">
          <div>
            <p className="font-semibold text-sm  text-">Invoice Number</p>
            <input
              type="number"
              name="vrNo"
            
              value={invoiceid}
              className="p-2 mb-2 w-full bg-white rounded-full mt-2 border-[#6ea864] border-2 text-sm h-10  outline-none placeholder-red-500 placeholder:font-semibold"
     
            />
           
          </div>
          <div>
            <p className="font-semibold text-sm  text-">Date</p>
            <div className="p-2 mb-2 w-full  rounded-full mt-2 border-[#6ea864] border-2 text-sm h-10  outline-none placeholder-red-500 placeholder:font-semibold">
      
              {moment().format('DD-MM-YYYY ')}
              
           
              </div>
           
          </div>
          <div>
          <p className="font-semibold text-sm  text-">customer Name</p>
            <input
              type="text"
              name="name"
              onChange={(e)=>setName(e.target.value)}
              value={name}
              className="p-2 mb-2 w-full  rounded-full mt-2 border-[#6ea864] border-2 text-sm h-10  outline-none placeholder-red-500 placeholder:font-semibold"
     
            />
           
          </div>
   
        </div>



        <div className="flex justify-end">
          <p className="text-red-500 items-center text-sm p-2">{errorMsg}</p>
          <button
            className="rounded-full font-semibold px-5  border-[#6ea864] border-2 text-sm h-10 hover:bg-[#6ea864] hover:text-white"
            onClick={handleAdd}
          >
            Add
          </button>

        </div>
        <div class="overflow-x-auto mt-3 p-2 w-full ">
            <table class="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th class="text-left pl-2 py-3 bg-[#6ea864]  text-white  text-xs leading-4 font-medium  uppercase tracking-wider  sm:w-32">
                    Item Id
                  </th>
                 
                  <th class="text-left pl-2 py-3 bg-[#6ea864] text-white  text-xs leading-4 font-medium  uppercase tracking-wider ">
                    item Name
                  </th>
                  <th class="text-left pl-2 py-3 bg-[#6ea864] text-white  text-xs leading-4 font-medium  uppercase tracking-wider sm:w-32">
                    Price
                  </th>
                  <th class="text-left pl-2 py-3 bg-[#6ea864] text-white  text-xs leading-4 font-medium  uppercase tracking-wider sm:w-32">
                    Tax
                  </th>
                  <th class="text-left pl-2 py-3 bg-[#6ea864] text-white  text-xs leading-4 font-medium  uppercase tracking-wider sm:w-32">
                    Sub Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {details.map((data,index) => (
                  <tr key={index}>
                    <td>
                      <input

                        type="number"
                        name="itemId"
                        class="py-4 whitespace-no-wrap border-b border-[#6ea864] w-14  sm:w-32  border-r-2 outline-none"
                        value={data.itemId}
                      />
                    </td>

                
                    <td>
                      <input
                        name="itemName"
                        
                        type="text"
                        value={data.itemName}
                        onChange={(e) => handleDetails(e, data.itemId)}
                        class="py-4 whitespace-no-wrap border-b border-[#6ea864] w-full  border-r-2 outline-none"
                      />
                    </td>
                    <td>
  <input
    name="price"
    type="text" // Change the type to "text"
    value={data.price}
    onChange={(e) => handleDetails(e, data.itemId)}
    className="py-4 whitespace-no-wrap border-b border-r-2  border-[#6ea864] w-20 sm:w-32  outline-none"
    pattern="[0-9]*" // Allow only numeric input
  />
</td>
<td>
  <input
    name="tax"
    type="text" // Change the type to "text"
    value={data.tax}
    onChange={(e) => handleDetails(e, data.itemId)}
    className="py-4 whitespace-no-wrap border-b border-[#6ea864] w-20 sm:w-32  border-r-2 outline-none"
    pattern="[0-9]*" // Allow only numeric input
  />
</td>

                    <td>
                      <input
                        value={Number(data.tax) + Number(data.price)}
             
                        onChange={(e) => handleDetails(e, data.srNo)}
                        name="grandTotal"
                        type="number"
                        class="py-4 whitespace-no-wrap border-b border-[#6ea864] w-20 sm:w-32    outline-none  border-r-2"
                      />
                    </td>
                  </tr>
                ))} 
                
              </tbody>
            </table>
          </div>
          <div className="flex justify-end w-full pe-2 ">

            <div>
            <div className="w-72 h-9 bg-[#afb9cc] flex justify-around items-center">
              <h1 className="text-white  text-xl">Total Price:- </h1>
              <h1 className="text-white  text-xl">{totalPrice} </h1>
            </div>
            <div className="w-72 h-9 bg-[#afb9cc] flex justify-around items-center">
              <h1 className="text-white  text-xl">Total Tax:- </h1>
              <h1 className="text-white  text-xl">{totalTax} </h1>
            </div>
            <div className="w-72 h-9 bg-[#525e75] flex justify-around items-center">
              <h1 className="text-white  text-xl">Grand Total:- </h1>
              <h1 className="text-white  text-xl">{totalPrice+totalTax} </h1>
            </div>

            </div>
          </div>
          <div className="flex justify-end w-full pe-2 gap-4 items-center">
            <p className="text-red-500 items-center text-sm p-2">{saveErrMsg}</p>
          <button onClick={()=>setOpen(false)}
              className="rounded-full font-semibold px-5 mt-2 border-[#ba5252] border-2 text-sm h-10 "
           
            >
              Close
            </button>
            <button
              className="rounded-full font-semibold px-5 mt-2 border-[#6ea864] border-2 text-sm h-10 hover:bg-[#6ea864] hover:text-white"
              onClick={handleSave}
            >
              SAVE
            </button>

          
            
          </div>
          </div>
      </div>
    );
}