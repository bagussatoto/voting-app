import bagus from '@/assets/img/1.png';
import Aldy from '@/assets/img/2.png';
import kholan from '@/assets/img/4.png';
import fadhil from '@/assets/img/5.png';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="container my-10 ">
      <h1 className="text-[#4A1B9D] text-center text-3xl font-bold">Tentang Kami</h1>
      <p className="text-center text-[#3C3C3C] my-2">Ayo berkenalan dengan orang-orang keren dari pengembang aplikasi Voting Apps</p>
      <div className="flex justify-center my-12">
        <div className="flex flex-wrap items-center justify-center gap-4 lg:w-4/5 lg:gap-12">
          <div className="group relative max-w-[150px] max-h-[150px] overflow-x-hidden overflow-y-hidden rounded-full ">
            <Image src={bagus} alt="Bagus Budi Satoto" className="w-full h-full bg-[#4A1B9D] mx-auto transition duration-150 group-hover:opacity-60" />
            <div className="absolute bottom-0 text-white transition duration-150 ease-in scale-0 group-hover:scale-100 ">
              <div className="p-2 bg-[#3C3C3C] ">
                <h1 className="text-sm font-semibold text-center">Bagus</h1>
                <p className="text-sm text-center text-zinc-500">Coding</p>
              </div>
            </div>
          </div>
          <div className="group relative max-w-[150px] max-h-[150px] overflow-x-hidden overflow-y-hidden rounded-full ">
            <Image src={Aldy} alt="Aldyansyah" className="w-full h-full bg-[#4A1B9D] mx-auto transition duration-150 group-hover:opacity-60" />
            <div className="absolute bottom-0 w-full text-white transition duration-150 ease-in scale-0 group-hover:scale-100">
              <div className="p-2 bg-[#3C3C3C] ">
                <h1 className="text-sm font-semibold text-center">Aldy</h1>
                <p className="text-sm text-center text-zinc-400">Design</p>
              </div>
            </div>
          </div>
          <div className="group relative max-w-[150px] max-h-[150px] overflow-x-hidden overflow-y-hidden rounded-full ">
            <Image src={kholan} alt="Kholan Susuri" className="w-full h-full bg-[#4A1B9D] mx-auto transition duration-150 group-hover:opacity-60" />
            <div className="absolute bottom-0 w-full text-white transition duration-150 ease-in scale-0 group-hover:scale-100">
              <div className="p-2 bg-[#3C3C3C] ">
                <h1 className="text-sm font-semibold text-center">Kholan</h1>
                <p className="text-sm text-center text-zinc-400">Tester</p>
              </div>
            </div>
          </div>
          <div className="group relative max-w-[150px] max-h-[150px] overflow-x-hidden overflow-y-hidden rounded-full ">
            <Image src={fadhil} alt="Faadhil Arsyad" className="w-full h-full bg-[#4A1B9D] mx-auto transition duration-150 group-hover:opacity-60" />
            <div className="absolute bottom-0 w-full text-white transition duration-150 ease-in scale-0 group-hover:scale-100">
              <div className="p-2 bg-[#3C3C3C] ">
                <h1 className="text-sm font-semibold text-center">Faadhil</h1>
                <p className="text-sm text-center text-zinc-400">koor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
