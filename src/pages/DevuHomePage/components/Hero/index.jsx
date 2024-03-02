import { Description } from "./Description";
import "./Hero.css";
import { NetworksList } from "../../../DevuNetworkPage/components/NetworksList";
import { Title } from "./Title";
import { SOCIAL_NETWORK } from "../../../../data/devuconf/networks";

export const Hero = () => {
  return (
    <div className="DevuHomePage__hero-center">
      <div style={{ margin: "auto" }}>
        <div className="DevuHomePage__hero-container">
          <div className="DevuHomePage__title">
            <Title />
          </div>
          <div className="DevuHomePage__pet">
            <img src="/assets/devu-pet.png" />
          </div>
          <div className="DevuHomePage__description">
            <Description />
            <div className="content-network">
              <NetworksList networks={SOCIAL_NETWORK} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
