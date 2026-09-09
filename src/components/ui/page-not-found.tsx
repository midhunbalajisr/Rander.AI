import { useEffect, useRef, useState } from "react";

export default function UnderConstructionPage() {
  return (
    <div className="w-full h-screen bg-black overflow-x-hidden flex justify-center items-center relative">
      <MessageDisplay />
      <CharactersAnimation />
      <CircleAnimation />
    </div>
  );
}

// ── 1. Message Display ──────────────────────────────────────
function MessageDisplay() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute flex flex-col justify-center items-center w-[90%] h-[90%] z-[100]">
      <div
        className={`flex flex-col items-center transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Construction icon */}
        <div className="mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="6" width="20" height="12" rx="2" />
            <path d="M12 12h.01" />
            <path d="M17 12h.01" />
            <path d="M7 12h.01" />
          </svg>
        </div>

        <div className="text-[15px] font-semibold tracking-widest uppercase text-black mb-2 opacity-60">
          Coming Soon
        </div>

        <div className="text-[40px] md:text-[52px] font-bold text-black text-center leading-tight m-[1%]">
          Page Is Under
          <br />
          Construction
        </div>

        <div className="text-[15px] w-1/2 min-w-[280px] text-center text-black m-[1%] opacity-70 leading-relaxed">
          We are working hard to bring this page to life.
          <br />
          We will touch back with you soon.
        </div>
      </div>
    </div>
  );
}

// ── 2. Characters Animation ─────────────────────────────────
type StickFigure = {
  top?: string;
  bottom?: string;
  src: string;
  transform?: string;
  speedX: number;
  speedRotation?: number;
};

function CharactersAnimation() {
  const charactersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stickFigures: StickFigure[] = [
      {
        top: "0%",
        src: "https://cdn.21st.dev/assets/mirror/54/54f366bdbf75b7a2d3b9f2264c3ada12aefcaf6e6a467bcecc856ffcd686e52e.svg",
        transform: "rotateZ(-90deg)",
        speedX: 1500,
      },
      {
        top: "10%",
        src: "https://cdn.21st.dev/assets/mirror/7e/7e48603d6fd3fac9720b25b4b6a06d107feea2d21ef8fa0720921808b9808514.svg",
        speedX: 3000,
        speedRotation: 2000,
      },
      {
        top: "20%",
        src: "https://cdn.21st.dev/assets/mirror/4f/4fd3a604a36cc8811c341ef3221010ed11e2563d4add29901922d7464c28c186.svg",
        speedX: 5000,
        speedRotation: 1000,
      },
      {
        top: "25%",
        src: "https://cdn.21st.dev/assets/mirror/54/54f366bdbf75b7a2d3b9f2264c3ada12aefcaf6e6a467bcecc856ffcd686e52e.svg",
        speedX: 2500,
        speedRotation: 1500,
      },
      {
        top: "35%",
        src: "https://cdn.21st.dev/assets/mirror/54/54f366bdbf75b7a2d3b9f2264c3ada12aefcaf6e6a467bcecc856ffcd686e52e.svg",
        speedX: 2000,
        speedRotation: 300,
      },
      {
        bottom: "5%",
        src: "https://cdn.21st.dev/assets/mirror/66/668d66f4c4d1dbc5c421692b4e5ad644c0f11f0327da214bcae21f78816c6b2f.svg",
        speedX: 0,
      },
    ];

    if (charactersRef.current) {
      charactersRef.current.innerHTML = "";
    }

    stickFigures.forEach((figure, index) => {
      const stick = document.createElement("img");
      stick.style.position = "absolute";
      stick.style.width = "18%";
      stick.style.height = "18%";

      if (figure.top) stick.style.top = figure.top;
      if (figure.bottom) stick.style.bottom = figure.bottom;
      stick.src = figure.src;
      if (figure.transform) stick.style.transform = figure.transform;

      charactersRef.current?.appendChild(stick);

      if (index === 5) return;

      stick.animate([{ left: "100%" }, { left: "-20%" }], {
        duration: figure.speedX,
        easing: "linear",
        fill: "forwards",
      });

      if (index === 0) return;

      if (figure.speedRotation) {
        stick.animate(
          [{ transform: "rotate(0deg)" }, { transform: "rotate(-360deg)" }],
          { duration: figure.speedRotation, iterations: Infinity, easing: "linear" }
        );
      }
    });

    return () => {
      if (charactersRef.current) {
        charactersRef.current.innerHTML = "";
      }
    };
  }, []);

  return <div ref={charactersRef} className="absolute w-[99%] h-[95%]" />;
}

// ── 3. Circle Animation ─────────────────────────────────────
interface Circulo {
  x: number;
  y: number;
  size: number;
}

function CircleAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestIdRef = useRef<number>();
  const timerRef = useRef(0);
  const circulosRef = useRef<Circulo[]>([]);

  const initArr = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    circulosRef.current = [];
    for (let index = 0; index < 300; index++) {
      const randomX =
        Math.floor(
          Math.random() * (canvas.width * 3 - canvas.width * 1.2 + 1)
        ) +
        canvas.width * 1.2;
      const randomY =
        Math.floor(
          Math.random() * (canvas.height - canvas.height * -0.2 + 1)
        ) +
        canvas.height * -0.2;
      const size = canvas.width / 1000;
      circulosRef.current.push({ x: randomX, y: randomY, size });
    }
  };

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    timerRef.current++;
    context.setTransform(1, 0, 0, 1, 0, 0);

    const distanceX = canvas.width / 80;
    const growthRate = canvas.width / 1000;

    context.fillStyle = "white";
    context.clearRect(0, 0, canvas.width, canvas.height);

    circulosRef.current.forEach((circulo) => {
      context.beginPath();
      if (timerRef.current < 65) {
        circulo.x -= distanceX;
        circulo.size += growthRate;
      }
      if (timerRef.current > 65 && timerRef.current < 500) {
        circulo.x -= distanceX * 0.02;
        circulo.size += growthRate * 0.2;
      }
      context.arc(circulo.x, circulo.y, circulo.size, 0, 360);
      context.fill();
    });

    if (timerRef.current > 500) {
      if (requestIdRef.current) cancelAnimationFrame(requestIdRef.current);
      return;
    }
    requestIdRef.current = requestAnimationFrame(draw);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    timerRef.current = 0;
    initArr();
    draw();

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      timerRef.current = 0;
      if (requestIdRef.current) cancelAnimationFrame(requestIdRef.current);
      const context = canvas.getContext("2d");
      if (context) context.reset?.();
      initArr();
      draw();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (requestIdRef.current) cancelAnimationFrame(requestIdRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}
