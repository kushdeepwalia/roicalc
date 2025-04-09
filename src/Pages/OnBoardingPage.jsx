import Header from "../Components/Header";
import Body from "../Components/Body";
import Button from "../Components/Button";
import Picture from "../assets/Onboarding.svg"

const OnBoardingPage = () => {
    return <>
        <Header tbtn='Hello'/>
        <Body>
            <div className="flex justify-items-center content-center w-[60%]">
                <div className="w-[50%]">
                    <img src={Picture}/>
                </div>
                <div className="bg-slate-200 w-[50%]">
                    <div>
                        <p>Hi User,</p>
                        <h2>Welcome to AppName</h2>
                        <p>Everything you need to deliver strategic, impactful UX — in one powerful suite.</p>
                    </div>
                    <div>
                        <p>To get started, let's create your first project</p>
                        <input className="border-2 border-black" type="text" placeholder="Enter the name of your prohect"/>
                    </div>
                    <Button className='border-2 border-black'>Next</Button>
                </div>
            </div>
        </Body>
    </>
}

export default OnBoardingPage