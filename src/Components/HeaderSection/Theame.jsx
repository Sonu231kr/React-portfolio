import React, { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
function Theame() {

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    
    const SavedTheme = localStorage.getItem("theme");

    if (SavedTheme === "dark") {
      setTheme("dark")
      document.documentElement.classList.add("dark")
    }else{
      setTheme("light")
      document.documentElement.classList.remove("dark")
    }
  }, []);


  function ChangeTheme() {

    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme" ,"dark");
      document.documentElement.classList.add("dark");

    } else {
      setTheme("light");
      localStorage.setItem("theme","light");
      document.documentElement.classList.remove("dark");


    }
  };



  return (
    <div className='flex gap-6'>
      <button
        className='border-2 border-white bg-black text-white px-6 py-2 cursor-pointer rounded-full'>Contact me</button>
      {/* <SunMoon className='size-8 pt-2' /> */}
      <button onClick={() => {
        ChangeTheme();
      }}
        className='cursor-pointer dark:text-white  '
      >
        {theme == "dark" ? <Sun /> : <Moon />}

      </button>
    </div>
  )

}




export default Theame