const allStories = [
  {
    id: 0,
    username: "Samriddhi",
    img: "./Assets/image (10).jpg",
    videoUrl: "./Assets/video6.mp4",
  },
  {
    id: 1,
    username: "Rohan",
    img: "./Assets/image (2).jpg",
    videoUrl: "./Assets/video3.mp4",
  },
  {
    id: 2,
    username: "Akhil",
    img: "./Assets/image (3).jpg",
    videoUrl: "./Assets/video4.mp4",
  },
  {
    id: 3,
    username: "Dheeraj",
    img: "./Assets/image (4).jpg",
    videoUrl: "./Assets/video3.mp4",
  },
  {
    id: 4,
    username: "Ritika",
    img: "./Assets/image (5).jpg",
    videoUrl: "./Assets/video6.mp4",
  },
  {
    id: 5,
    username: "Manash",
    img: "./Assets/image (6).jpg",
    videoUrl: "./Assets/video3.mp4",
  },
  {
    id: 6,
    username: "Parth",
    img: "./Assets/image (7).jpg",
    videoUrl: "./Assets/video3.mp4",
  },
  {
    id: 7,
    username: "Shubha",
    img: "./Assets/image (8).jpg",
    videoUrl: "./Assets/video4.mp4",
  },
  {
    id: 8,
    username: "Amunk",
    img: "./Assets/image (9).jpg",
    videoUrl: "./Assets/video5.mp4",
  },
  {
    id: 9,
    username: "Hitesh",
    img: "./Assets/image (3).jpg",
    videoUrl: "./Assets/video6.mp4",
  },
  {
    id: 10,
    username: "Udit",
    img: "./Assets/image.jpg",
    videoUrl: "./Assets/video3.mp4",
  },
];



let currentIndex = 0;



const right = document.getElementById("right");
const left = document.getElementById("left");

const scrollStories = (direction) => {
let container = document.getElementById("stories-box");
let visibleWidth = container.offsetWidth;
let scrollAmount = visibleWidth; 

if (direction === "right") {
  container.scrollLeft += scrollAmount;
} else if (direction === "left") {
  container.scrollLeft -= scrollAmount; 
}
};

right.addEventListener("click", (e) => {
scrollStories("right");
e.preventDefault();
});

left.addEventListener("click", (e) => {
scrollStories("left");
e.preventDefault();
});


const contentElements = document.querySelectorAll(".content");
contentElements.forEach((content, index) => {
  content.addEventListener("click", () => {
    console.log(`clicked ${index}`);
    currentIndex = index;
    createStories(currentIndex);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.content img');

  images.forEach(img => {
    img.addEventListener('click', () => {
      img.style.border = '2px solid grey';
    });
  });
});



const createStories = (index) => {
  const existingVideoContainer = document.getElementById("video-container");
  if (existingVideoContainer) {
    existingVideoContainer.remove();
  }

  const story = allStories[index];

  const videoContainer = document.createElement("div");
  videoContainer.classList.add("video-container");
  videoContainer.id = "video-container";
  videoContainer.style.display = "block";

  const cross = document.createElement("div");
  cross.classList.add("cross-icon");
  const crossIcon = document.createElement("i");
  crossIcon.classList.add("fa-solid", "fa-x");
  cross.appendChild(crossIcon);
  videoContainer.appendChild(cross);

  const videos = document.createElement("div");
  videos.classList.add("videos");

 
  const videoDiv1 = document.createElement("div");
  videoDiv1.classList.add("video-div", "videos__one");
  const video1 = document.createElement("video");
  video1.src = allStories[index > 0 ? index - 1 : allStories.length - 1].videoUrl;
  video1.controls = true;
  videoDiv1.appendChild(video1);


  // const videoDiv3 = document.createElement("div");
  // videoDiv3.classList.add("video-div", "three");

  const leftIconDiv = document.createElement("div");
  leftIconDiv.classList.add("left-icon-div");

  const leftIcon = document.createElement("i");
  leftIcon.classList.add("fa-solid", "fa-less-than");
  leftIcon.style.color = "#fff";
  leftIconDiv.appendChild(leftIcon);

  const videoDiv3 = document.createElement("div");
  videoDiv3.classList.add("video-div", "videos__three");

  const video3 = document.createElement("video");
  video3.src = story.videoUrl;
  video3.autoplay = true;
  video3.controls = true;

  const overlay = document.createElement("div");
  overlay.classList.add("text-overlay");

  const leftOverlay = document.createElement("div");
  leftOverlay.classList.add("text-overlay__left-overlay");

  const dp = document.createElement("img");
  dp.classList.add("dp");
  dp.src = story.img;

  const userName = document.createElement("h3");
  userName.classList.add("username");
  userName.textContent = story.username;

  leftOverlay.appendChild(dp);
  leftOverlay.appendChild(userName);

  const rightOverlay = document.createElement("div");
  rightOverlay.classList.add("text-overlay__right-overlay");

  // const pauseIconn = document.createElement("i");
  // pauseIconn.classList.add("fa-solid", "fa-pause");
  // pauseIconn.style.color = "#fff";

  const elllipse = document.createElement("i");
  elllipse.classList.add("fa-solid", "fa-ellipsis");
  elllipse.style.color = "#fff";

  // rightOverlay.appendChild(pauseIconn);
  rightOverlay.appendChild(elllipse);

  overlay.appendChild(leftOverlay);
  overlay.appendChild(rightOverlay);

  videoDiv3.appendChild(overlay);
  videoDiv3.appendChild(video3);
  console.log(videoDiv3);




  
  const rightIconDiv = document.createElement("div");
  rightIconDiv.classList.add("right-icon-div");

  const rightIcon = document.createElement("i");
  rightIcon.classList.add("fa-solid", "fa-greater-than");
  rightIcon.style.color = "#fff";
  rightIconDiv.appendChild(rightIcon);



  const videoDiv2 = document.createElement("div");
  videoDiv2.classList.add("video-div", "videos__two");
  const video2 = document.createElement("video");

  for (let i = 0; i < allStories.length; i++) {
    if (index === allStories.length - 1) {
      video2.src = allStories[0].videoUrl; 
    }
     else if (i === index + 1) {
      video2.src = allStories[i].videoUrl; 
    }
  }
  video2.controls = true;
  videoDiv2.appendChild(video2);

  
  videos.appendChild(videoDiv1);
  videos.appendChild(leftIconDiv) ; 
  videos.appendChild(videoDiv3);
  videos.appendChild(rightIconDiv) ; 
  videos.appendChild(videoDiv2);

  videoContainer.appendChild(videos);

  document.body.appendChild(videoContainer);

  const contentElements = document.querySelectorAll(".content");
  contentElements.forEach((content, idx) => {
    if (idx === index) {
      content.querySelector("img").style.border = "2px solid grey";
    }
  });

  cross.addEventListener("click", () => {
    
    videoContainer.remove();
  });

  // pauseIconn.addEventListener("click", (e) => {
  //   e.stopPropagation();
  
  //   if (video3.paused) {
  //     video3.play();
  //     pauseIconn.innerHTML = '<i class="fa-solid fa-play" style="color: rgb(255, 255, 255);"></i>';
  //   } else {
  //     video3.pause();
  //     pauseIconn.innerHTML = '<i class="fa-solid fa-pause" style="color: rgb(255, 255, 255);"></i>';
  //   }
  // });
  


  leftIconDiv.addEventListener("click", () => {

    if (currentIndex > 0) {
      currentIndex--;
      createStories(currentIndex);
    } else {
      videoContainer.remove();
    }
  });

  rightIconDiv.addEventListener("click", () => {
  
    if (currentIndex < allStories.length - 1) {
      currentIndex++;
      createStories(currentIndex);
    } else {
      videoContainer.remove();
    }
  });
};
