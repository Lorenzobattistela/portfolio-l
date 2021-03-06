import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import "./layout.scss";
import ParticlesBg from "particles-bg";
import Footer from "../Footer/footer";

const Layout = () => {
    let config = {
        num: [4, 5],
        rps: 0.8,
        radius: [5, 40],
        life: [1.5, 3],
        v: [2, 3],
        tha: [-40, 40],
        alpha: [0.6, 0],
        scale: [.1, 0.4],
        position: "all",
        color: "#033249",
        cross: "dead",
        // emitter: "follow",
        random: 15
      };

    if (Math.random() > 0.85) {
        config = Object.assign(config, {
          onParticleUpdate: (ctx, particle) => {
            ctx.beginPath();
            ctx.rect(
              particle.p.x,
              particle.p.y,
              particle.radius * 2,
              particle.radius * 2
            );
            ctx.fillStyle = particle.color;
            ctx.fill();
            ctx.closePath();
          }
        });
      }
    return(
        <>  
            <ParticlesBg type="custom" config={config} bg={true} />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;