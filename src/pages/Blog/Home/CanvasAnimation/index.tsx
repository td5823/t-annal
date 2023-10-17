import React, { useEffect } from "react";
import { Layout } from "antd";

class Star {
  orbitRadius: number;
  radius: number;
  orbitX: number;
  orbitY: number;
  timePassed: number;
  speed: number;
  alpha: number;

  constructor(w: number, h: number, maxStars: number) {
    this.orbitRadius = this.random(this.maxOrbit(w, h));
    this.radius = this.random(60, this.orbitRadius) / 12;
    this.orbitX = w / 2;
    this.orbitY = h / 2;
    this.timePassed = this.random(0, maxStars);
    this.speed = this.random(this.orbitRadius) / 50000;
    this.alpha = this.random(2, 10) / 10;
    // count++;
  }

  draw(ctx: CanvasRenderingContext2D, canvas2: HTMLCanvasElement) {
    const x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX;
    const y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY;
    const twinkle = this.random(10);

    if (twinkle === 1 && this.alpha > 0) {
      this.alpha -= 0.05;
    } else if (twinkle === 2 && this.alpha < 1) {
      this.alpha += 0.05;
    }

    ctx.globalAlpha = this.alpha;
    ctx.drawImage(
      canvas2,
      x - this.radius / 2,
      y - this.radius / 2,
      this.radius,
      this.radius
    );
    this.timePassed += this.speed;
  }

  private random(min: number = 0, max: number = 0) {
    if (arguments.length < 2) {
      max = min;
      min = 0;
    }

    if (min > max) {
      const hold = max;
      max = min;
      min = hold;
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private maxOrbit(x: number, y: number) {
    const max = Math.max(x, y);
    const diameter = Math.round(Math.sqrt(max * max + max * max));
    return diameter / 2;
  }
}

const CanvasAnimation: React.FC<{
  children?: React.ReactNode;
}> = (props) => {
  useEffect(() => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    const w = (canvas.width = window.innerWidth);
    const h = (canvas.height = window.innerHeight);
    const hue = 217;
    const stars: Star[] = [];
    const maxStars = 1400;

    const canvas2 = document.createElement("canvas");
    const ctx2 = canvas2.getContext("2d") as CanvasRenderingContext2D;
    canvas2.width = 100;
    canvas2.height = 100;
    const half = canvas2.width / 2;
    const gradient2 = ctx2.createRadialGradient(
      half,
      half,
      0,
      half,
      half,
      half
    );
    gradient2.addColorStop(0.025, "#fff");
    gradient2.addColorStop(0.1, "hsl(" + hue + ", 61%, 33%)");
    gradient2.addColorStop(0.25, "hsl(" + hue + ", 64%, 6%)");
    gradient2.addColorStop(1, "transparent");

    ctx2.fillStyle = gradient2;
    ctx2.beginPath();
    ctx2.arc(half, half, half, 0, Math.PI * 2);
    ctx2.fill();

    for (let i = 0; i < maxStars; i++) {
      stars.push(new Star(w, h, maxStars));
    }

    function animation() {
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 0.8;
      ctx.fillStyle = "hsla(" + hue + ", 64%, 6%, 1)";
      ctx.fillRect(0, 0, w, h);

      ctx.globalCompositeOperation = "lighter";
      for (let i = 1, l = stars.length; i < l; i++) {
        stars[i].draw(ctx, canvas2);
      }

      window.requestAnimationFrame(animation);
    }

    animation();
  }, []);

  return (
    <Layout className="full" style={{ backgroundColor: "unset" }}>
      <canvas id="canvas" style={{ position: "absolute", zIndex: -1 }}></canvas>
      {props.children}
    </Layout>
  );
};

export default CanvasAnimation;
