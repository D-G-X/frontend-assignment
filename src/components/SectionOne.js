import "../styles/SectionOne.css"

function SectionOne(){
    return ( 
        <>
       <div className="flex flex-row ">
            <div className="md:basis-1/2 p-5 self-center">
                <div className="text-left text-3xl font-semibold">
                    We Build Buisness Convert 
                    <br />Ideas into softwares
                </div>
                <div className="text-md text-left p-4">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                    Vellit officia consequat duis enim velit mollit.
                </div>
                <div className="space-x-5 p-5">
                    <button className="p-3 space-x-2 rounded-md"> <PlayCircle className="align-middle"/><span className="align-middle">Demo</span></button>
                    <button className="p-3 align-middle bg-[#5663da] border hover:border-[#5663da] hover:text-[#5663da] hover:bg-transparent rounded-md text-lg text-white">Sign up</button>
                </div>
            </div>
            <div className="p-5 md:block">
                <div className="">
                    <div className="relative">
                        <img src="/images/analytics.png" className="absolute z-10 bg-white top-72 -left-20 w-[30%] hidden md:inline-block" alt="" />
                        <img src="/images/pic2.jpg" className="border z-0 rounded-br-[60px] rounded-tl-[60px]" alt="" />
                        <img src="/images/analytics2.jpg" className="absolute z-20 bg-white top-48 -right-4 w-[30%] hidden md:inline-block" alt="" />
                    </div>
                </div>
            </div>
       </div>
       <div className="w-full -mt-40">
       <img src="/images/background.png" className="-mt-20" alt=""/>
       </div>
       </>
    )
}

function PlayCircle(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
</svg>

    )
}
export default SectionOne;
