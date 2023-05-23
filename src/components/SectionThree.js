import React from 'react';
import DataTable from 'react-data-table-component';

function SectionThree(){
    return (
        <>
            <div className='flex flex-row m-10 space-x-10'>
                <div className='basis-1/3'>
                    <SeatsTable />
                </div>
                <div className='basis-2/3 self-center relative'>
                    <div className='relative flex h-96 justify-center'>
                        <img src='images/pic3.jpg' className='border rounded-md' alt=''/>
                        <img src='images/zigzag3.png' className='absolute w-[60%] lg:w-[40%] -bottom-[10%] right-[15%]' alt=''/>
                    </div>
                    <div className='border p-5 space-y-5 bg-white rounded-md shadow-md w-58 top-[45%] left-[10%] absolute'>
                        <div className='flex flex-row'>
                            <div className='basis-1/3'>
                                <div className='rounded-full bg-[#ffded6] inline-block w-6 text-transparent'> a</div>
                            </div>
                            <span className='basis-2/3 text-laila text-xl'>Seat Availability</span>
                        </div>
                        <div className='text-laila text-center border-b'>
                            REPORT: 2023 - 05 - 23
                        </div>
                        <div className='flex flex-row'>
                            <div className='basis-2/3 space-x-2 self-center'>
                                <div className='rounded-full bg-[#99ddff] inline-block w-6 text-transparent'> a</div>
                                <div className='rounded-full bg-[#ffeb99] inline-block w-6 text-transparent'> a</div>
                                <div className='rounded-full bg-[#c499ff] inline-block w-6 text-transparent'> a</div>
                            </div>
                            <button className='basis-2/3 text-laila text-md bg-[#130b46] hover:bg-white hover:text-[#130b46] hover:border hover:border-[#130b46] text-white p-1  rounded-md'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border bg-black'>
                <div className=''>
                    <div className='rounded-full bg-[#ffded6] w-20'> </div>
                </div>
            </div>
        </>
    )
}

function SeatsTable(){

const columns = [
  {
    name: 'SEATS',
    selector: 'seat_no',
    sortable: true
  },
  {
    name: 'PRICE',
    selector: 'price',
    sortable: true
  },
  {
    name: 'STATUS',
    selector: 'status',
    sortable: true
  }
];

const apiData = [
    {
      "price": 2400, 
      "seat_no": "U1", 
      "status": "B"
    }, 
    {
      "price": 2800, 
      "seat_no": "L1", 
      "status": "B"
    }, 
    {
      "price": 1600, 
      "seat_no": "L2", 
      "status": "A"
    }, 
    {
      "price": 1848, 
      "seat_no": "L3", 
      "status": "B"
    }, 
    {
      "price": 2071, 
      "seat_no": "U2", 
      "status": "A"
    }, 
    {
      "price": 1790, 
      "seat_no": "U3", 
      "status": "B"
    }, 
    {
      "price": 2400, 
      "seat_no": "U4", 
      "status": "B"
    }, 
    {
      "price": 2410, 
      "seat_no": "L4", 
      "status": "A"
    }, 
    {
      "price": 2338, 
      "seat_no": "L5", 
      "status": "B"
    }, 
    {
      "price": 2338, 
      "seat_no": "L6", 
      "status": "A"
    }
  ]


  return <DataTable className='border border-[#cdd6ff]' customStyles={{
        headRow: {
            style: {
                background: '#cdd6ff'
            }
        },
        rows: {
            style: {
              borderBottomColor: '#cdd6ff'
            }
          },
        
    }} columns={columns} data={apiData} />;

}

export default SectionThree;