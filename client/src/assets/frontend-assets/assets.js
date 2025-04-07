import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img5 from './img5.jpg';
import img6 from './img6.jpg';
import img7 from './img7.jpg';
import img8 from './img8.jpg';
import img9 from './img9.jpg';
import img10 from './img10.jpg';
import img11 from './img11.jpg';
import img12 from './img12.jpg';
import img13 from './img13.jpg';
import img14 from './img14.png';
import song1 from './pod1.mp3';
import song2_1 from './pod2/pod2-1.mp3';
import song2_2 from './pod2/pod2-2.mp3'
import song3 from './pod3/pod3-1.mp3';
import song4 from './pod4/pod4-1.mp3';

export const musicData = {
    songs: [
      {
        id: 0,
        name: "Pod One",
        image: img1,
        file: song1,
        desc: "Put a smile on your face with these happy tunes",
        duration: "3:00",
      },
      {
        id: 1,
        name: "Pod Two",
        image: img2,
        file: song2_1,
        desc: "Put a smile on your face with these happy tunes",
        duration: "2:20",
      },
      {
        id: 2,
        name: "Pod Three",
        image: img3,
        file: song3,
        desc: "Put a smile on your face with these happy tunes",
        duration: "2:32",
      },
      {
        id: 3,
        name: "Pod Four",
        image: img4,
        file: song1,
        desc: "Put a smile on your face with these happy tunes",
        duration: "2:50",
      },
      {
        id: 4,
        name: "Pod Five",
        image: img5,
        file: song2_2,
        desc: "Put a smile on your face with these happy tunes",
        duration: "3:10",
      },
      {
        id: 5,
        name: "Pod Six",
        image: img14,
        file: song3,
        desc: "Put a smile on your face with these happy tunes",
        duration: "2:45",
      },
      {
        id: 6,
        name: "Pod Seven",
        image: img7,
        file: song1,
        desc: "Put a smile on your face with these happy tunes",
        duration: "2:18",
      },
      {
        id: 7,
        name: "Pod Eight",
        image: img11,
        file: song2_1,
        desc: "Put a smile on your face with these happy tunes",
        duration: "2:35",
      },
    ],
    albums: [
      {
        id: 0,
        name: "Most Viewed",
        image: img1,
        desc: "Your weekly update of the most played tracks",
        bgColor: "#2a4365",
        songs: [0, 1, 2],  // Valid song IDs
      },
      {
        id: 1,
        name: "Most Viewed",
        image: img2,
        desc: "Your weekly update of the most played tracks",
        bgColor: "#455A64",
        songs: [3, 4],  // Valid song IDs
      },
      {
        id: 2,
        name: "Most Viewed",
        image: img3,
        desc: "Your weekly update of the most played tracks",
        bgColor: "#3375FF",
        songs: [5],  // Valid song ID
      },
      {
        id: 3,
        name: "Most Viewed",
        image: img4,
        desc: "Your weekly update of the most played tracks",
        bgColor: "#FF33A1",
        songs: [6, 7],  // Valid song IDs
      },
      {
        id: 4,
        name: "Sports",
        image: img5,
        desc: "Your weekly update of the most played tracks",
        bgColor: "#F4D03F",
        songs: [0, 1],  // Valid song IDs
      },
      {
        id: 5,
        name: "Sports",
        image: img6,
        desc: "Your weekly update of the most played tracks",
        bgColor: "#8E44AD",
        songs: [2, 3],  // Valid song IDs
      },
      {
        id: 6,
        name: "Sports",
        image: img7,
        desc: "Your weekly update of the most played tracks",
        bgColor: "#3498DB",
        songs: [4, 5],  // Valid song IDs
      },
      {
        id: 7,
        name: "Sports",
        image: img8,
        desc: "Your weekly update of the most played tracks",
        bgColor: "#E74C3C",
        songs: [6, 7],  // Valid song IDs
      },
      {
        id: 8,
        name: "Education",
        image: img9,
        desc: "Your weekly update of the most played tracks",
        bgColor: "#1ABC9C",
        songs: [0, 3],  // Valid song IDs
      },
      {
        id: 9,
        name: "Education",
        image: img10,
        desc: "Your weekly update of the most played tracks",
        bgColor: "#F39C12",
        songs: [1, 4],  // Valid song IDs
      },
      {
        id: 10,
        name: "Education",
        image: img11,
        desc: "Your weekly update of the most played tracks",
        bgColor: "#2ECC71",
        songs: [2, 5],  // Valid song IDs
      },
      {
        id: 11,
        name: "Education",
        image: img12,
        desc: "Your weekly update of the most played tracks",
        bgColor: "#9B59B6",
        songs: [6],  // Valid song ID
      },
      {
        id: 12,
        name: "Health",
        image: img13,
        desc: "Your weekly update of the most played tracks",
        bgColor: "#34495E",
        songs: [1, 7],  // Valid song IDs
      },
      {
        id: 13,
        name: "Health",
        image: img14,
        desc: "Your weekly update of the most played tracks",
        bgColor: "#16A085",
        songs: [0, 6],  // Valid song IDs
      },
    ]
  };
  