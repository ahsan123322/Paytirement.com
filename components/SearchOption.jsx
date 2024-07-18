'use client'
// import { Input } from "./ui/input"
import { Input } from "@/utils/ui/input"
import { Button } from "./ui/button"
import { SignupFormDemo } from "@/utils/ui/Signup"
import { Label } from "@/utils/ui/label"
// import { Card } from "./ui/card"
const SearchOption = ({ onClose }) => {
  return (
    <>
       <div style={{zIndex:'9999999'}} className=" bg-metal-900 fixed left-0 right-0 top-0 z-[99] flex animate-bounce items-center justify-center">
      <div className="relative h-auto w-full max-w-xl p-4">
        <div className="relative rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200 ">
          <div className=" rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark ">
            <div className="bg flex items-center justify-between border-b border-dashed border-b-borderColor pb-5 dark:border-borderColor-dark">
              <h3 className="text-paragraph dark:text-white">Signup</h3>
              <button onClick={onClose} className="text-paragraph dark:text-white" id="ok-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 256 256">
                  <rect width="256" height="256" fill="none"></rect>
                  <circle
                    cx="128"
                    cy="128"
                    r="96"
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    strokeWidth="16"></circle>
                  <line
                    x1="160"
                    y1="96"
                    x2="96"
                    y2="160"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"></line>
                  <line
                    x1="160"
                    y1="160"
                    x2="96"
                    y2="96"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"></line>
                </svg>
              </button>
            </div>
           {/* <div className="relative z-10 mx-auto max-w-[510px]">
            <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:flex-col">
              <div className="rounded-full bg-primary-200/30  blur-[145px] max-1xl:h-[335px]  max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
              <div className="-ml-[170px] rounded-full  bg-primary-200/50 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
              <div className="-ml-[170px] rounded-full  bg-primary-200/30 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
            </div>
            <div className="rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200">
              <div className="rounded border border-dashed border-gray-100 bg-white p-12 dark:border-borderColor-dark dark:bg-dark-200 max-md:px-5 max-md:py-7">

                <form className=''>
                <div class="mb-4">
                    <Label for="email" style={{color:'black'}}   class="block text-gray-100  mb-2">Enter your  Email</Label>
                    <Input placeholder="Enter Your Name" />
                </div>
                <div class="mb-6">
                    <Label for="password" style={{color:'black'}} class=" block text-gray-100  mb-2">Enter your Password</Label>
                    <Input placeholder="Enter Your Email" />
                    
                </div>
                <div class=" items-center mb-4">
              
              <Button  variant="outline"> Signup </Button>
                    
                    
                </div>
            </form>

                <div className="relative py-8 after:absolute after:top-1/2 after:h-[1px] after:w-full after:-translate-y-1/2 after:border after:border-dashed after:border-borderColor dark:after:border-borderColor-dark">
                  <span className=" absolute left-1/2 top-1/2 z-10 inline-block w-10 -translate-x-1/2 -translate-y-1/2 bg-white text-center dark:bg-dark-200">
                    Or
                  </span>
                </div>
                <div className="mb-8">
                  <button className=" group mb-6 flex w-full items-center justify-center gap-2  rounded-[30px] border border-borderColor bg-white  px-[30px] py-3.5 font-jakarta_sans text-sm font-medium -tracking-[0.3px] text-paragraph dark:border-borderColor-dark dark:bg-transparent dark:text-white max-md:px-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M21.7502 12.216C21.7502 11.4143 21.6839 10.8293 21.5402 10.2227H12.1992V13.8409H17.6822C17.5717 14.7401 16.9747 16.0943 15.6482 17.0043L15.6296 17.1254L18.583 19.3676L18.7876 19.3877C20.6669 17.6868 21.7502 15.1843 21.7502 12.216Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12.2002 21.7495C14.8864 21.7495 17.1415 20.8828 18.7886 19.3878L15.6492 17.0044C14.8091 17.5786 13.6815 17.9794 12.2002 17.9794C9.56932 17.9794 7.33635 16.2786 6.54036 13.9277L6.42369 13.9374L3.35266 16.2666L3.3125 16.3761C4.94853 19.5611 8.30907 21.7495 12.2002 21.7495Z"
                        fill="#34A853"
                      />
                      <path
                        d="M6.53907 13.9286C6.32904 13.322 6.20749 12.6719 6.20749 12.0003C6.20749 11.3286 6.32904 10.6786 6.52802 10.072L6.52246 9.94276L3.41294 7.57617L3.3112 7.6236C2.63691 8.94528 2.25 10.4295 2.25 12.0003C2.25 13.5711 2.63691 15.0553 3.3112 16.3769L6.53907 13.9286Z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12.2003 6.01997C14.0685 6.01997 15.3286 6.8108 16.0472 7.47168L18.855 4.785C17.1306 3.21417 14.8865 2.25 12.2003 2.25C8.3091 2.25 4.94854 4.43832 3.3125 7.62329L6.52933 10.0717C7.33638 7.72083 9.56936 6.01997 12.2003 6.01997Z"
                        fill="#EB4335"
                      />
                    </svg>
                    <span className="font-jakarta_sans font-medium  "> Continue with Google </span>
                  </button>
                  <button className="group flex w-full items-center justify-center gap-2 rounded-[30px]  border border-borderColor bg-white px-[30px]  py-3.5 font-jakarta_sans text-sm font-medium -tracking-[0.3px] text-paragraph dark:border-borderColor-dark dark:bg-transparent dark:text-white max-md:px-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M22.5 12.0642C22.5 6.22974 17.799 1.5 12 1.5C6.20101 1.5 1.5 6.22974 1.5 12.0642C1.5 17.337 5.33968 21.7075 10.3594 22.5V15.1179H7.69336V12.0642H10.3594V9.73675C10.3594 7.08911 11.927 5.62663 14.3254 5.62663C15.4738 5.62663 16.6758 5.83296 16.6758 5.83296V8.43274H15.3518C14.0475 8.43274 13.6406 9.24713 13.6406 10.0834V12.0642H16.5527L16.0872 15.1179H13.6406V22.5C18.6603 21.7075 22.5 17.337 22.5 12.0642Z"
                        fill="#0C63D4"
                      />
                    </svg>
                    <span className="font-jakarta_sans text-sm font-medium "> Continue with Facebook </span>
                  </button>
                </div> 
                 <p className="ont-jakarta_sans text-center text-sm font-medium leading-[24px] ">
                  Already Have an account?
                  <Link
                    href="/login"
                    className="relative inline-block overflow-hidden align-bottom font-jakarta_sans text-sm font-medium leading-[24px] text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph  before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:text-white dark:before:bg-white">
                    login
                  </Link>
                </p>
              </div>
            </div>
          </div>  */}
          <SignupFormDemo/>
          </div>
        </div>
      </div>
    </div> 

      {/* <form className="my-8">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword">Your twitter password</Label>
          <Input
            id="twitterpassword"
            placeholder="••••••••"
            type="twitterpassword"
          />
        </LabelInputContainer>
 
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>
 
        {/* <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" /> */}
 
        {/* <div className="flex flex-col space-y-4">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              GitHub
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Google
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
           

          </button>
        </div> */}
      {/* </form> */}
    </>
  
  )
}

export default SearchOption
