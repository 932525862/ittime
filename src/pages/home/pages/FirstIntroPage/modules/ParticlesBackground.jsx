import { useEffect } from "react";

const ParticlesBackground = () => {
    useEffect(() => {
        if (window.particlesJS) {
            const configFile = window.innerWidth <= 768 ? "/particles-mobile.json" : "/particles.json";
            window.particlesJS.load("particles-js", configFile, function () {
                console.log("Particles.js config loaded");
            });
        }
    }, []);

    return (
        <div
            id="particles-js"
            style={{
                position: "absolute",
                width: "100%",
                height: "100%",         
                backgroundColor: "#ffffff",
                top: 0,
                 zIndex: 0
            }}
        ></div>
    );
};

export default ParticlesBackground;
