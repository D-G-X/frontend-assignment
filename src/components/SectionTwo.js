import "../styles/SectionTwo.css"
import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';

function SectionTwo(){
    const data = 
        [
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

    return (
        <div className="lg:flex lg:flex-row">
          <div className="lg:basis-1/2 p-5 flex flex-row pl-20">
            <div className="employee-image relative lg:w-[60%] xl:w-[70%]">
                <img src="/images/zigzag4.png" className="absolute z-10 top-30 -left-10 rounded-[30px] w-[30%]" alt=""/>
                <img src="/images/pic1.jpg" className="relative w-full" alt=""/>
                <img src="/images/zigzag2.png" className="absolute -right-[10%] -bottom-[5%] w-[40%]" alt=""/>
            </div>
          </div>
          <div className="w-[90%] lg:basis-1/2 self-center p-5 pl-16">
            <ChartComponent className="w-90%"/>
            <button className="bg-[#5663da] p-3 text-white rounded-md">Get Started</button>
          </div>
        </div>
    )
}

function  ChartComponent() {
  useEffect(() => {
    const options = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Booking History'
      },
      xAxis: {
        categories: ['2023-05-12', '2023-05-13', '2023-05-14','2023-05-15','2023-05-16','2023-05-17']
      },
      yAxis: {
        title: {
          text: 'Bookings'
        }
      },
      series: [
        {
          name:"Via",
          data: [23, 7, 30, 33, 36, 21]
        },
        {
          name:"Main",
          data: [22, 22, 8, 12,15,20]
        },
      
      ]
    };

    Highcharts.chart('chart-container', options);
  }, []);

  return <div className="w-[90%]" id="chart-container"></div>;
};

export default SectionTwo;