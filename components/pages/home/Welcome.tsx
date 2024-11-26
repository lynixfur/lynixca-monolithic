import Navbar from "@/components/nav/NavbarHome";

export default function Welcome() {
    return (
        <div className="background-div">
            <div className="absolute top-5 left-5 py-1.5 px-3 bg-red-700 rounded-full">
                <i className="fa-solid fa-triangle-exclamation mr-2"></i> Howl Network Emergency - Biotechnolocial Fusion in Progress 78%
            </div>

            <p className="absolute bottom-5 right-5 text-sm">Version v25.0.1_lynixca.fink</p>

            <div className="flex justify-center items-center p-10 min-h-screen" style={{ background: "rgba(0, 0, 0, 0.5)"}}>
                <div className="flex items-center flex-col pt-14 gap-5">
                    <img src="/imgs/pfp.jpg" className="w-[200px] rounded-full"></img>
                    <h1 className="text-6xl font-bold">Hey, I'm Lynix!</h1>
                    <p className="text-2xl text-center w-full">I'm a biotechnological purple folf, blending tech, creativity, and cosmic adventures.</p>
                    <div className="flex space-x-5 text-white text-2xl">
                        <p><i className="fa-brands fa-discord"></i></p>
                        <p><i className="fa-brands fa-twitter"></i></p>
                        <p><i className="fa-brands fa-instagram"></i></p>
                        <p><i className="fa-brands fa-github"></i></p>
                        <p><i className="fa-solid fa-paw"></i></p>
                    </div>
                    <a href="" className="font-semibold text-center bg-neutral-950 border border-neutral-700 px-3 py-2 rounded-2xl w-[300px] mt-5">Planned Conventions</a>
                    <a href="" className="font-semibold text-center bg-neutral-950 border border-neutral-700 px-3 py-2 rounded-2xl w-[300px]">Furtrack</a>
                    <a href="" className="font-semibold text-center bg-neutral-950 border border-neutral-700 px-3 py-2 rounded-2xl w-[300px]">Refsheet</a>
                    <a href="" className="font-semibold text-center bg-neutral-950 border border-neutral-700 px-3 py-2 rounded-2xl w-[300px]">Projects</a>
                </div>    
            </div>
        </div>
    )
}