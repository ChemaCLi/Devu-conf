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
            <h3>Próximo evento:</h3>
            <p>
              ¡Prepárate para vivir el International Women's Day 2024: Impact the Future en Xalapa por primera vez! ✨🤩
              <br />
              ⏰ A partir de las 10:00 horas
              📆 Viernes, 19 de abril
              #IWDXalapa #WTM #IWD
            </p>
            <a
              className="link-registration"
              target="blank"
              rel="noopener noreferrer"
              href="https://lu.ma/IWDXalapa"
            >
                ¡Regístrate y asiste gratis! 
            </a>
            <div className="content-network">
              <NetworksList networks={SOCIAL_NETWORK} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
