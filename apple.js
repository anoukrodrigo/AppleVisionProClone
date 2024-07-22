function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco()


gsap.to("#page>video",{
    scrollTrigger:{
        trigger:`#page>video`,
        start:`2% top`,
        end:`bottom top`,
        scroller:`#main`
    },
    onStart:()=>{
        document.querySelector("#page>video").play()
    }
})


gsap.to("#page",{
    scrollTrigger:{
        trigger:`#page`,
        start:`top top`,
        end:`bottom top`,
        scroller:`#main`,
        pin:true
    }
})


gsap.to("#page-bottom",{
    scrollTrigger:{
        trigger:`#page-bottom`,
        start:`5% top`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
    },
    opacity:0
})



var tl = gsap.timeline({
    scrollTrigger:{
        trigger:`#page1`,
        start:`top top`,
        scrub:1,
        scroller:`#main`,
        pin:true
    }
})


tl.to("#page1>h1",{
    top:`-50%`
})






var tl1 = gsap.timeline({
    scrollTrigger:{
        trigger:`#page2`,
        start:`top top`,
        scrub:1,
        scroller:`#main`,
        pin:true
    }
})


tl1.to("#page2>h1",{
    top:`-50%`
})




var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:`#page4`,
        start:`top top`,
        scrub:1,
        scroller:`#main`,
        pin:true
    }
})


tl2.to("#page4>#center-page4",{
    top:`-50%`
})



function canvas(){
    const canvas = document.querySelector("#page7>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  0000.jpg
  0001.jpg
  0002.jpg
  0003.jpg
  0004.jpg
  0005.jpg
  0006.jpg
  0007.jpg
  0008.jpg
  0009.jpg
  0010.jpg
  0011.jpg
  0012.jpg
  0013.jpg
  0014.jpg
  0015.jpg
  0016.jpg
  0017.jpg
  0018.jpg
  0019.jpg
  0020.jpg
  0021.jpg
  0022.jpg
  0023.jpg
  0024.jpg
  0025.jpg
  0026.jpg
  0027.jpg
  0028.jpg
  0029.jpg
  0030.jpg
  0031.jpg
  0032.jpg
  0033.jpg
  0034.jpg
  0035.jpg
  0036.jpg
  0037.jpg
  0038.jpg
  0039.jpg
  0040.jpg
  0041.jpg
  0042.jpg
  0043.jpg
  0044.jpg
  0045.jpg
  0046.jpg
  0047.jpg
  0048.jpg
  0049.jpg
  0050.jpg
  0051.jpg
  0052.jpg
  0053.jpg
  0054.jpg
  0055.jpg
  0056.jpg
  0057.jpg
  0058.jpg
  0059.jpg
  0060.jpg
  0061.jpg
  0062.jpg
  0063.jpg
  0064.jpg
  0065.jpg
  0066.jpg
  0067.jpg
  0068.jpg
  0069.jpg
  0070.jpg
  0071.jpg
  0072.jpg
  0073.jpg
  0074.jpg
  0075.jpg
  0076.jpg
  0077.jpg
  0078.jpg
  0079.jpg
  0080.jpg
  0081.jpg
  0082.jpg
  0083.jpg
  0084.jpg
  0085.jpg
  0086.jpg
  0087.jpg
  0088.jpg
  0089.jpg
  0090.jpg
  0091.jpg
  0092.jpg
  0093.jpg
  0094.jpg
  0095.jpg
  0096.jpg
  0097.jpg
  0098.jpg
  0099.jpg
  0100.jpg
  0101.jpg
  0102.jpg
  0103.jpg
  0104.jpg
  0105.jpg
  0106.jpg
  0107.jpg
  0108.jpg
  0109.jpg
  0110.jpg
  0111.jpg
  0112.jpg
  0113.jpg
  0114.jpg
  0115.jpg
  0116.jpg
  0117.jpg
  0118.jpg
  0119.jpg
  0120.jpg
  0121.jpg
  0122.jpg
  0123.jpg
  0124.jpg
  0125.jpg
  0126.jpg
  0127.jpg
  0128.jpg
  0129.jpg
  0130.jpg
  0131.jpg
  0132.jpg
  0133.jpg
  0134.jpg
  0135.jpg
  0136.jpg
  0137.jpg
  0138.jpg
  0139.jpg
  0140.jpg
  0141.jpg
  0142.jpg
  0143.jpg
  0144.jpg
  0145.jpg
  0146.jpg
  0147.jpg
  0148.jpg
  0149.jpg
  0150.jpg
  0151.jpg
  0153.jpg
  0154.jpg
  0155.jpg
  0156.jpg
  0157.jpg
  0158.jpg
  0159.jpg
  0160.jpg
  0161.jpg
  0162.jpg
  0163.jpg
  0164.jpg
  0165.jpg
  0166.jpg
  0167.jpg
  0168.jpg
  0169.jpg
  0170.jpg
  0171.jpg
  0172.jpg
  0173.jpg
  0174.jpg
  0175.jpg
  0176.jpg
  0177.jpg
  0178.jpg
  0179.jpg
  0180.jpg
  0181.jpg
  0182.jpg
  0183.jpg
  0184.jpg
  0185.jpg
  0186.jpg
  0187.jpg
  0188.jpg
  0189.jpg
  0190.jpg
  0191.jpg
  0192.jpg
  0193.jpg
  0194.jpg
  0195.jpg
  0196.jpg
  0197.jpg
  0198.jpg
  0199.jpg
 `;
  return data.split("\n")[index];
}

const frameCount = 198;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page7>canvas`,
    //   set start end according to preference
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.min(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page7>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
//   set start end according to preference
  start: `top top`,
  end: `600% top`,
});
}
canvas();




function canvas1(){
  const canvas = document.querySelector("#page18>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) {
var data = `
Vision00001.png
Vision00002.png
Vision00003.png
Vision00004.png
Vision00005.png
Vision00006.png
Vision00007.png
Vision00008.png
Vision00009.png
Vision00010.png
Vision00011.png
Vision00012.png
Vision00013.png
Vision00014.png
Vision00015.png
Vision00016.png
Vision00017.png
Vision00018.png
Vision00019.png
Vision00020.png
Vision00021.png
Vision00022.png
Vision00023.png
Vision00024.png
Vision00025.png
`;
return data.split("\n")[index];
}

const frameCount = 25;

const images = [];
const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);
}

gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
  scrub: 0.15,
  trigger: `#page18`,
  //   set start end according to preference
  start: `top top`,
  end: `80% top`,
  scroller: `#main`,
},
onUpdate: render,
});

images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.max(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
  img,
  0,
  0,
  img.width,
  img.height,
  centerShift_x,
  centerShift_y,
  img.width * ratio,
  img.height * ratio
);
}
ScrollTrigger.create({

trigger: "#page18",
pin: true,
// markers:true,
scroller: `#main`,
//   set start end according to preference
start: `top top`,
end: `80% top`,
});
}
canvas1();



var tl3 = gsap.timeline({
  scrollTrigger:{
      trigger:`#page21`,
      start:`top top`,
      scrub:1,
      scroller:`#main`,
      pin:true
  }
})


tl3.to("#page21>#troff",{
  opacity:1
})

var tl4 = gsap.timeline({
  scrollTrigger:{
      trigger:`#page22`,
      start:`top top`,
      scrub:1,
      scroller:`#main`,
      pin:true
  }
})


tl4.to("#page22>#snroff",{
  opacity:0
})



gsap.to("#page23>img",{
  scrollTrigger:{
    trigger:`#page23>img`,
    start:`top bottom`,
    end:`bottom 60%`,
    scrub:.5,
    scroller:`#main`
  },
  opacity:1
})