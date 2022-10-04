import gsap from "gsap";

window.addEventListener("load", () => {
  const time = gsap.timeline({
    // 重复无限次
    // repeat: 1,
    // 执行完第一次动画后反向执行动画
    // yoyo: true,
  });

  time
    .from(["#wheel1", "#wheel2", "#wheel3", "#wheel4"], {
      // 从隐藏到显示
      scale: 0,
      // 相对于自身
      transformOrigin: "center",
      // 动画时间
      duration: 1,
      // 动画曲线
      ease: "bounce.out",
      // 多个元素动画间隔时间
      stagger: 0.5,
    })
    .from(["#footboard1", "#footboard2"], {
      scaleX: 0,
      transformOrigin: "left",
      duration: 1,
      ease: "bounce.out",
    })
    .from("#scooter-head", {
      scaleY: 0,
      transformOrigin: "bottom",
      duration: 1,
      ease: "bounce.out",
    })
    .from(["#head-block", "#footer-block"], {
      scaleX: 0,
      transformOrigin: "right",
      duration: 1,
      ease: "bounce.out",
    });
});
