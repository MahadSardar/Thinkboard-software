import Myimg from "../assets/ChatGPT Image Sep 15, 2026, 05_40_50 PM.png"
import MainPageNavbar from "../Components/MainPageNavbar"
import { Smartphone, ZapIcon, ShieldIcon, SmartphoneIcon } from "lucide-react";
import LoginPage from "./LoginPage"

const MainPage = () => {
    return (
        <div className="relative w-full min-h-screen overflow-x-hidden">

            {/* Background image layer */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${Myimg})` }}
            />

            {/* Dark overlay layer, sits on top of the image only */}
            <div className="absolute inset-0 bg-black/15" />

            {/* Actual content, full opacity, sits above both */}
            <div className="relative z-10 w-full min-h-screen flex flex-col">
                <MainPageNavbar />

                <div className="flex-1 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 lg:gap-6 xl:gap-12 px-4 sm:px-8 lg:pl-14 xl:pl-18 lg:pr-8 xl:pr-16 py-10 lg:py-0 w-full max-w-[1440px] mx-auto">

                    {/* Left text/feature column */}
                    <div className="flex flex-col gap-6 sm:gap-8 w-full lg:w-1/2 items-center lg:items-start text-center lg:text-left -mt-10">
                        <div className="w-full flex flex-col items-center lg:items-start">
                            <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold leading-tight">
                                <span className="block mb-1 sm:mb-4">Keep Your</span>
                                <span className="block"><span className="text-primary">Notes</span> Safe</span>
                            </h1>
                            <p className="mt-2 text-sm sm:text-base max-w-[420px]">Thinkboard helps you capture your thoughts,<br className="hidden md:block" />ideas and tasks--all in one place.Simple,<br className="hidden md:block" />fast and secure</p>
                        </div>

                        <div className="flex flex-col justify-center items-center lg:items-start w-full max-w-[320px] gap-5">

                            <div className="w-full flex items-center gap-4">
                                <div className="w-[40px] h-[40px] shrink-0 bg-primary-content flex justify-center items-center rounded-full">
                                    <ZapIcon className="text-primary size-6" />
                                </div>
                                <div className="flex flex-col items-start">
                                    <h3 className="font-bold">Quick & Easy</h3>
                                    <h3 className="">Create notes in seconds</h3>
                                </div>
                            </div>

                            <div className="w-full flex items-center gap-4">
                                <div className="w-[40px] h-[40px] shrink-0 bg-primary-content flex justify-center items-center rounded-full">
                                    <ShieldIcon className="text-primary size-6" />
                                </div>
                                <div className="flex flex-col items-start">
                                    <h3 className="font-bold">Secure</h3>
                                    <h3 className="">Your data stays with you</h3>
                                </div>
                            </div>

                            <div className="w-full flex items-center gap-4">
                                <div className="w-[40px] h-[40px] shrink-0 bg-primary-content flex justify-center items-center rounded-full">
                                    <SmartphoneIcon className="text-primary size-6" />
                                </div>
                                <div className="flex flex-col items-start">
                                    <h3 className="font-bold">Access Anywhere</h3>
                                    <h3 className="">Use it on any device, anytime</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Login card column */}
                    <div className="w-full sm:w-auto shrink-0 flex justify-center">
                        <LoginPage />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainPage