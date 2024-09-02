const allStories = [
  {
    id: 0,
    username: "Samriddhi",
    img: "./Assets/image (10).jpg",
    videoUrl: "./Assets/video2.mp4",
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
    videoUrl: "./Assets/video5.mp4",
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
    videoUrl: "./Assets/video2.mp4",
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
    videoUrl: "./Assets/video2.mp4",
  },
];

let currentIndex = 0;

const right = document.getElementById("right");
right.addEventListener("click", (e) => {
  let container = document.getElementById("stories-box");
  container.scrollLeft += 300;
  e.preventDefault();
});

const left = document.getElementById("left");
left.addEventListener("click", (e) => {
  let container = document.getElementById("stories-box");
  container.scrollLeft -= 300;
  e.preventDefault();
});

const contentElements = document.querySelectorAll(".content");
contentElements.forEach((content, index) => {
  content.addEventListener("click", () => {
    console.log(`Content clicked, index: ${index}`);
    currentIndex = index;
    createStories(currentIndex);
  });
});


document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.content img');
  
    images.forEach(img => {
      img.addEventListener('click', () => {
        img.style.border= '2px solid grey';
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

  const videoDiv = document.createElement("div");
  videoDiv.classList.add("video-div", "three");

  const leftIcon = document.createElement("i");
  leftIcon.classList.add("fa-solid", "fa-less-than");
  leftIcon.style.color = "#fff";

  const video3 = document.createElement("div");
  video3.classList.add("video3");

  const video = document.createElement("video");
  video.src = story.videoUrl;
  video.autoplay = true;
  video.controls = true;

  // video3.appendChild(video);

  const overlay = document.createElement("div");
  overlay.classList.add("text-overlay");

  const leftOverlay = document.createElement("div");
  leftOverlay.classList.add("left-overlay");

  const dp = document.createElement("img");
  dp.classList.add("dp");
  dp.src = story.img;

  const userName = document.createElement("h3");
  userName.classList.add("username");
  userName.textContent = story.username;

  leftOverlay.appendChild(dp);
  leftOverlay.appendChild(userName);

  const rightOverlay = document.createElement("div");
  rightOverlay.classList.add("right-overlay");

  const pauseIconn = document.createElement("i");
  pauseIconn.classList.add("fa-solid", "fa-pause");
  pauseIconn.style.color = "#fff";

  const elllipse = document.createElement("i");
  elllipse.classList.add("fa-solid", "fa-ellipsis");
  elllipse.style.color = "#fff";

  rightOverlay.appendChild(pauseIconn);
  rightOverlay.appendChild(elllipse);

  overlay.appendChild(leftOverlay);
  overlay.appendChild(rightOverlay);

  video3.appendChild(overlay);
  video3.appendChild(video);

  const rightIcon = document.createElement("i");
  rightIcon.classList.add("fa-solid", "fa-greater-than");
  rightIcon.style.color = "#fff";

  videoDiv.appendChild(leftIcon);
  videoDiv.appendChild(video3);
  videoDiv.appendChild(rightIcon);

  videos.appendChild(videoDiv);
  videoContainer.appendChild(videos);

  document.body.appendChild(videoContainer);

  cross.addEventListener("click", (e) => {
    e.stopPropagation();
    videoContainer.remove();
  });

  let isPaused = false;

  pauseIconn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (isPaused) {
      video.play();
      pauseIconn.classList.remove("fa-play");
      pauseIconn.classList.add("fa-pause");
    } else {
      video.pause();
      pauseIconn.classList.remove("fa-pause");
      pauseIconn.classList.add("fa-play");
    }
    isPaused = !isPaused;
  });

  video.addEventListener("ended", () => {
    if (currentIndex < allStories.length - 1) {
      currentIndex++;
      createStories(currentIndex);
    }
  });

  leftIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    if (currentIndex > 0) {
      currentIndex--;
      createStories(currentIndex);
    } else if (currentIndex === 0) {
      leftIcon.remove();
    }
  });

  rightIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    if (currentIndex < allStories.length - 1) {
      currentIndex++;
      createStories(currentIndex);
    } else if (currentIndex === allStories.length - 1) {
      rightIcon.remove();
    }
  });
};
