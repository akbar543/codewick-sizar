import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import banner from './assets/banner.png'
import smartphone from './assets/smartphone.png'

const Top = () => {
  return (
    <Container>
      <div className="comp1">
        <div className="tagline">
          <p>Design. Brand. Marketing.</p>
          <p>A full service studio.</p>
        </div>

        <div>
          <p className="tag2">Our subscriptions to scale up your business</p>
        </div>

        <div className="buttons">
          <div className="btn">
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

      <div className="comp2">
        <div className="margin2 flex">
            <span className="title2">Creative Freedom That Resonates</span>
            <span className="text2">SIZAR replaces unreliable freelancers & expensive agencies for a flat monthly fee, with services delivered so fast that it will blow your mind.</span>

            <div className="buttons2">
                <div className="btn2" >
                    <div className="btn-text2">
                        Lorem
                    </div>
                </div>
                <div className="btn2">
                    <div className="btn-text2">
                        Lorem                        
                    </div>
                </div>
            </div>

            <img className="smartphone" src={smartphone} alt="" />
        </div>
      </div>

      {/* <div className="comp3">
        <div className="title3">
            Our Latest Projects
        </div>
        <div className="text3">
            Take a look at our work!
        </div>
      </div> */}
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
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
  }
    .comp1{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
  .tagline {
    display: flex;
    padding: 85px 0 22px 0;
    flex-direction: column;
    p {
      color: #000;
      text-align: center;
      font-family: Poppins;
      font-size: 64px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
  .tag2 {
    color: #000;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 0.699999988079071;
    margin-bottom: 44px;
  }
  .buttons{
    display: flex;
    align-items: center;
    margin-bottom: 102px;
  }
  .btn {
    width: 227px;
    height: 64px;
    border-radius: 30px;
    background: #010302;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 54px;
}
.btn-text {
    color: #F8F8F8;
    text-decoration: none;
    /* font-family: Poppins; */
    font-size: 24px;
    /* font-style: normal; */
    font-weight: 700;
    /* line-height: normal; */
}
.btn-text-right{
    color: #000;
    /* font-family: Poppins; */
    font-size: 24px;
    /* font-style: normal; */
    font-weight: 700;
    opacity: 0.8999999761581421;
    /* line-height: normal; */
    text-decoration-line: underline;
  }
  .banner{
    /* padding: 0; */
    /* margin: 0; */
    width: 1573px;
    height: 650px;
    border-radius: 30px;
    margin-bottom: 327px;
    background: url(<path-to-image>), lightgray 50% / cover no-repeat;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }



  .comp2{
    /* margin: 0 658px 0 129px; */
    /* margin-bottom: 624px; */
    /* height: 624px; */
    padding: 104px 0 160px 0; 
    display: flex;
    justify-content: center;
    align-items: center;
    /* justify-content: center; */
    flex-direction: column;
    background: rgba(217, 217, 217, 0.699999988079071);
    /* margin-bottom: 291px; */
    /* opacity: 0.699999988079071; */
  }
  .margin2{
    padding: 0 658px 0 129px;
    /* margin: 104px 0 0 0; */
  }
  .title2{
    color: #000;
    /* font-family: Poppins; */
    font-size: 52px;
    /* font-style: normal; */
    font-weight: 600;
    margin-bottom: 19px;
    /* line-height: normal; */
  }
  .text2{
    color: #000;
    /* font-family: Poppins; */
    font-size: 28px;
    width: 941px;
    /* font-style: normal; */
    font-weight: 600;
    /* line-height: normal; */
    opacity: 0.699999988079071;
  }

  .buttons2{
    display: flex;
    margin: 65px 0 0 0;
  }
  .btn2{
    width: 222px;
    height: 72px;
    border-radius: 30px;
    background: #000;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 56px;
  }
  .btn-text2{
    color: #F8F8F8;
    /* font-family: Poppins; */
    font-size: 24px;
    /* font-style: normal; */
    font-weight: 700;
    /* line-height: normal; */
  }
  .smartphone{
    position: absolute;
    width: 438px;
    height: 872px;
    margin: 0 0 0 1034px;
    /* margin: ; */
  }
`;
