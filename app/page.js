import Fitness from "@/components/Fitness";
import Header from "@/components/Header";
import Navebar from "@/components/Navebar";
import Caloryy from "@/components/Calory";
import Quiz from "@/components/Quiz";
import Services from "@/components/Services";
import AppStore from "@/components/appStore";
import Plan from "@/components/Plan";
import SliderComp from "@/components/SliderComp";
import WorkOut from "@/components/WorkOut";
import Nutrient from "@/components/Nutrient";
import RonaldoWorkOut from "@/components/RonaldoWorkOut";
import Footer from "@/components/Footer";
import Questions from "@/components/Questions";



export default function Home() {
  return (
   <div className="">
    <Navebar/>
    <Header/>
    <Fitness/>
    <Caloryy/>
    <Quiz/>
    <Services/>
    <AppStore/>
    <Plan/>
    <SliderComp/>
    <WorkOut/>
    <Nutrient/>
    <Questions/>
    <RonaldoWorkOut/>
    <Footer/>
    
   </div>
  );
}
