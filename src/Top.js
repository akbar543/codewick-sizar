import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import banner from './assets/banner.png'
import smartphone from './assets/smartphone.png'
import rect1 from './assets/rect1.png'
import rect2 from './assets/rect2.png'
import rect3 from './assets/rect3.png'
import serviceImg from './assets/serviceImg.png'
import purpleCircle from './assets/purpleCircle.svg'
import customerImg from './assets/customerImg.png'
import greenCircle from './assets/greenCircle.png'
import subscribeImg from './assets/subscribeImg.png'
import grayCircle from './assets/grayCircle.png'

const Top = () => {
  return (
    <Container>
      <div className="comp1 flex a-center flex-col">
        <div className="tagline">
          <p>Design. Brand. Marketing.</p>
          <p>A full service studio.</p>
        </div>

        <div>
          <p className="tag2">Our subscriptions to scale up your business</p>
        </div>

        <div className="buttons flex a-center">
          <div className="btn flex j-center a-center">
            <Link className="btn-text" to="/home">
              See Plans
            </Link>
          </div>
          <Link className="btn-text-right" to="/home">Connect with us</Link>
        </div>

        <div>
            <img className="banner" src={banner} alt="" />
        </div>
      </div>

      <div className="comp2 flex a-center j-center">
        <div className="margin2 flex j-center flex-col">
            <span className="title2">Creative Freedom That Resonates</span>
            <span className="text2">SIZAR replaces unreliable freelancers & expensive agencies for a flat monthly fee, with services delivered so fast that it will blow your mind.</span>

            <div className="buttons2 flex">
                <div className="btn2 flex a-center j-center" >
                    <div className="btn-text2">
                        Lorem
                    </div>
                </div>
                <div className="btn2 flex a-center j-center">
                    <div className="btn-text2">
                        Lorem                        
                    </div>
                </div>
            </div>
        </div>

            <img className="smartphone" src={smartphone} alt="" />
      </div>

      <div className="comp3 flex j-center a-center flex-col">
        <div className="margin3 flex j-center flex-col">
            <div className="title3">
                Our Latest Projects
            </div>
            <div className="text3">
                Take a look at our work!
            </div>
        </div>
            <div className="project-h-scroll flex">
                <img className="project-img" src={rect1} alt="img1" />
                <img className="project-img" src={rect2} alt="img2" />
                <img className="project-img" src={rect3} alt="img3" />
            </div>
      </div>

      <div className="comp4 flex j-center">
        <div className="margin4">
            <div className="title4">
                We Create Narratives
            </div>
            <div className="text4">
                A fresh new things on how things are done.
            </div>
        </div>
        <div className="para4">
            “Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.”
        </div>
      </div>

      <div className="comp5 flex a-center j-center">
        <div className="service-image">
            <img src={serviceImg} alt="" />
        </div>
        <div className="margin5">
            <div className="flex a-center">
                <img className="purpleCircle" src={purpleCircle} alt="" />
                <div className="title5">
                    <span className="circleText">Wi</span>de Range Of Services
                </div>
            </div>
            <div className="text5">
                To a plan & request as many services as you'd like.
            </div>
        </div>
      </div>

      <div className="comp6 flex a-center j-center">
        <div className="margin6 flex a-center">
                <img className="grayCircle" src={grayCircle} alt="" />
            <div className="flex a-center j-right">
                <div className="title6">
                    <span className="circleText">Su</span>bscribe
                </div>
                <div className="text6">
                    Receive your services within a few business days on average, Monday to Friday.
                </div>
            </div>
        </div>
        <img className="subscribeImg" src={subscribeImg} alt="" />
      </div>

      <div className="comp7 flex a-center j-center">
        <div className="customer-image">
            <img src={customerImg} alt="" />
        </div>
        <div className="margin7">
            <div className="flex a-center">
                <img className="greenCircle" src={greenCircle} alt="" />
                <div className="title7">
                    <span className="circleText">Cu</span>stomer Satisfaction
                </div>
            </div>
            <div className="text7">
                We'll revise the services until you're 100% satisfied.
            </div>
        </div>
      </div>
    </Container>
  );
};

export default Top;

const Container = styled.div`
  background-color: whitesmoke;
  * {
    padding: 0;
    margin: 0;
  }
  .flex{
    display: flex;
  }
  .a-center{
    align-items: center;
  }
  .j-center{
    justify-content: center;
  }
  .j-between{
    justify-content: space-between;
  }
  .flex-col{
    flex-direction: column;
  }
  .j-right{
    justify-content: right;
  }

  .tagline {
    padding: 85px 0 22px 0;
    p {
      color: #000;
      text-align: center;
      font-size: 64px;
      font-weight: 600;
    }
  }
  .tag2 {
    color: #000;
    font-size: 24px;
    font-weight: 600;
    opacity: 0.699999988079071;
    margin-bottom: 44px;
  }
  .buttons{
    margin-bottom: 102px;
  }
  .btn {
    width: 227px;
    height: 64px;
    border-radius: 30px;
    background: #010302;
    margin-right: 54px;
}
.btn-text {
    color: #F8F8F8;
    text-decoration: none;
    font-size: 24px;
    font-weight: 700;
}
.btn-text-right{
    color: #000;
    font-size: 24px;
    font-weight: 700;
    opacity: 0.8999999761581421;
    text-decoration-line: underline;
  }
  .banner{
    width: 1573px;
    height: 650px;
    border-radius: 30px;
    margin-bottom: 327px;
    background: url(<path-to-image>), lightgray 50% / cover no-repeat;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }



  .comp2{
    background: rgba(217, 217, 217, 0.699999988079071);
    margin-bottom: 191px;
  }
  .margin2{
    padding: 0 658px 0 129px;
    margin: 104px 0 160px 0;
  }
  .title2{
    color: #000;
    font-size: 52px;
    font-weight: 600;
    margin-bottom: 19px;
  }
  .text2{
    color: #000;
    font-size: 28px;
    width: 941px;
    font-weight: 600;
    opacity: 0.699999988079071;
  }

  .buttons2{
    margin: 65px 0 0 0;
  }
  .btn2{
    width: 222px;
    height: 72px;
    border-radius: 30px;
    background: #000;
    color: white;
    margin-right: 56px;
  }
  .btn-text2{
    color: #F8F8F8;
    font-size: 24px;
    font-weight: 700;
  }
  .smartphone{
    position: absolute;
    width: 438px;
    height: 872px;
    margin: 0 0 0 1034px;
  }



  .comp3{
    padding-bottom: 289px;
  }
  .margin3{
    margin: 0 970px 0 151px;
  }
  .title3{
    color: #000;
    font-size: 64px;
    font-weight: 600;
  }
  .text3{
    color: #000;
    font-size: 24px;
    font-weight: 600;
  }
  .project-h-scroll{
    margin: 0 0 0 142px;
    overflow: hidden;
  }
  .project-img{
    margin: 0 49px 0 0;
    width: 519px;
    height: 519px;
  }



  .comp4{
    padding: 0 76px 95px 151px;
  }
  .service-image{
    width: 759px;
    height: 531px;
    margin-right: 0;
  }
  .title4{
    color: #000;
    font-size: 64px;
    font-weight: 600;
    margin-bottom: 22px;
  }
  .text4{
    color: #000;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 0.699999988079071;
  }
  .para4{
    color: #000;
    text-align: right;
    font-size: 16px;
    font-weight: 600;
    margin-left: 175px;
    width: 627px;
    opacity: 0.6700000166893005;
  }


  .comp5{
    padding: 0 0 104px 0;
    /* padding-right: 151px;
    padding-left: 127px; */
  }
  .margin5{
    margin: 0 127px 0 91px;
  }
  .title5{
    font-size: 48px;
    font-weight: 600;
    position: absolute;
    margin-left: 24px;
}
.purpleCircle{
    position: absolute;
}
.text5{
    color: #000;
    width: 371px;
    font-size: 20px;
    font-weight: 600;
    margin-top: 59px;
    margin-left: 24px;
    position: relative;
    opacity: 0.699999988079071;
  }
  .circleText{
    color: white;
  }




.comp6{
    padding-right: 76px;
    padding-left: 361px;
    padding-bottom: 104px;
}
.grayCircle{
    position: absolute;
    margin-left: 95px;
}
.margin6{
    margin-right: 80px;
}
.subscribeImg{
    margin-left: 80px;
}
.title6{
    position: absolute;
    text-align: right;
    font-size: 48px;
    font-weight: 600;
}
.text6{
    width: 371px;
    text-align: right;
    font-size: 20px;
    font-weight: 600;
    position: relative;
    margin-top: 209px;
}




  .comp7{
    padding: 0 0 104px 0;
    /* padding-right: 151px;
    padding-left: 127px; */
  }
  .margin7{
    margin: 0 156px 0 86px;
  }
  .title7{
    font-size: 48px;
    font-weight: 600;
    position: absolute;
    margin-left: 24px;
}
.greenCircle{
    position: absolute;
}
.text7{
    color: #000;
    width: 371px;
    font-size: 20px;
    font-weight: 600;
    margin-top: 59px;
    margin-left: 24px;
    position: relative;
    opacity: 0.699999988079071;
  }
  .circleText{
    color: white;
  }
`;
