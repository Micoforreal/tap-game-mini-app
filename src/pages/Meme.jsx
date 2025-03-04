import {
  Copy,
  Download,
  Gamepad2,
  Heart,
  LucideTrainFrontTunnel,
  RotateCcw,
  Skull,
  Smile,
} from "lucide-react";
import { useState } from "react";
import axios from "axios";
import Loading from "../components/loading";
import { BASE_URL } from "../helpers/constants";
import { toast } from "react-hot-toast";

export default function Meme() {
  const [input, setInputs] = useState({ userPrompt: "" });
  const [generatedImage, setGeneratedImage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${BASE_URL}api/user/generate-image`, {
        prompt: input.userPrompt,
      });

      if (response.status === 200) {
        setIsLoading(false);
        setGeneratedImage(response.data.imageUrl);
      }
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
      console.log(error);
    }
  };


  const downloadImage = async () => {
    if (!generatedImage) {
      return;
    }
    try {
      setIsLoading(true)

      axios.post(`${BASE_URL}/api/user/send-user-image`,{imageUrl:generatedImage})
      // const proxyUrl = `${BASE_URL}api/user/proxy-image?url=${encodeURIComponent(generatedImage)}`;
    
      // const response = await fetch(proxyUrl);
      // const blob = await response.blob();
      // const url = URL.createObjectURL(blob);
  
      // // Create a hidden <a> tag to trigger download
      // const link = document.createElement("a");
      // link.href = url;
      // link.download = "generated-image.png";
      // document.body.appendChild(link);
      // link.click();
      // document.body.removeChild(link);
      
      // // Free memory
      // URL.revokeObjectURL(url);
      setIsLoading(false)
    } catch (error) {

      setIsLoading(false)
      toast.error("Couldn't download image try again")
      console.error("Error downloading image:", error);
    }
  };
  
  
  return (
    <>
    {isLoading ? (
      <div className="w-full absolute h-full flex items-center justify-center ">
        <Loading />
      </div>
    ) : (
      <>
    <section className="flex flex-col items-center justify-start w-full px-4 pt-5 pb-10">
      <p className="text-3xl font-bold leading-none text-white font-grotesk">
        Meme Generator
      </p>
      <p className="text-[#E4DEEF] font-jakarta text-sm font-medium leading-snug max-w-[382px] w-full text-center mt-4">
        Enter a prompt and choose your preferred style to generate your
        mind-blowing memes
      </p>
      <form className="w-full max-w-[382px]">
        <section className="   rounded-3xl flex flex-col justify-cente items-end gap- mt-12">
          <input
            placeholder="Enter a prompt"
            value={input.userPrompt}
            name="userPrompt"
            onChange={handleChange}
            className="w-full
            
            py-20
            
            relative h-[8rem] 
            max-w-[382px] bg-[#D9D9D9]/10
            border border-[#60A5FA]/30  
            px-4 pt-2 rounded-3xl 
            
            text-white
            "
            />

          <div className="bg-[#FFFFFF]/40 border relative bottom-8 right-2 border-[#D9D9D9]/30 rounded-full py-0.5 px-2 flex justify-center items-center  gap-2">
            <Copy className="size-4 stroke-[#1A1A1A]" />
            <RotateCcw className="size-4 stroke-[#1A1A1A]" />
          </div>
          {error && <p className="text-red-400 mr-auto ms-3 ">{error}</p>}

          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className=" disabled:bg-gray-400  disabled:text-gray-500 border-[#60A5FA]/30 bg-accent  rounded-full py-2 px-4"
            >
            Generate
          </button>
        </section>
      </form>

      <section className="flex flex-col items-start justify-start w-full gap-6 mt-7">
        <p className="text-sm font-jakarta font-medium text-[#E4DEEF]">
          Select a style
        </p>
        <section className="flex flex-wrap items-center justify-start w-full gap-3">
          <button className="items-center justify-start gap-2 text-black stroke-black flex bg-accent border border-[#F7F7F7]/5 rounded-full py-2 px-4 outline-none">
            <Smile className="size-5" />
            <p className="text-xs font-semibold font-jakarta">Classic</p>
          </button>
          <button className="items-center justify-start gap-2 text-white flex bg-[#F7F7F7]/5 border border-white/5 rounded-full py-2 px-4 outline-none">
            <Skull className="size-5 stroke-white" />
            <p className="text-xs font-semibold font-jakarta">Dark</p>
          </button>
          <button className="items-center justify-start gap-2 text-white flex bg-[#F7F7F7]/5 border border-white/5 rounded-full py-2 px-4 outline-none">
            <Heart className="size-5 stroke-white" />
            <p className="text-xs font-semibold font-jakarta">Cute</p>
          </button>
          <button className="items-center justify-start gap-2 text-white flex bg-[#F7F7F7]/5 border border-white/5 rounded-full py-2 px-4 outline-none">
            <Smile className="size-5 stroke-white" />
            <p className="text-xs font-semibold font-jakarta">Funny</p>
          </button>
          <button className="items-center justify-start gap-2 text-white flex bg-[#F7F7F7]/5 border border-white/5 rounded-full py-2 px-4 outline-none">
            <Gamepad2 className="size-5 stroke-white" />
            <p className="text-xs font-semibold font-jakarta">Gaming</p>
          </button>
        </section>
        <section
          className="w-full max-w-[350px] h-[280px] 
          border-2 border-primary mx-auto rounded-[40px]
          bgray-400"
          >{

          generatedImage && (
            <>
                <img
                  src={generatedImage}
                  alt="generated meme"
                  className="w-full h-full object-cover rounded-[40px]"
                  />
                <div className="flex justify-end my-4 ">
            <button 
            onClick={downloadImage}
            className="items-center  text-white flex bg-[#F7F7F7]/5 border border-white/5 rounded-full py-2 px-4 outline-none">
                      <Download className="size-4" />
                    </button>
                
                </div>
              </>
            )
          }
        </section>
      </section>
      </section>
      </>
    )}
    </>
  );
}







