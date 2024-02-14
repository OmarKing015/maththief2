interface Lecture {
  name: string;
  link: string;
}

interface Session {
  session: string;
  lectures: Lecture[];
}

interface SessionsData {
  Sessions: Session[];
}

export const myData: SessionsData = {
  Sessions: [
    // {
    //   session: "Session 1",
    //   lectures: [
    //     {
    //       name: "Skills",
    //       link: "https://iframe.mediadelivery.net/play/33074/d19cb330-4bb6-4f9b-adb5-ab32ccc594a7?autoplay=true",
    //     },
    //     {
    //       name: "Explanation",
    //       link: "https://iframe.mediadelivery.net/play/33074/56889c56-be70-46cd-aa14-36855a0b1399?autoplay=true",
    //     },
    //     {
    //       name: "Problems",
    //       link: "https://iframe.mediadelivery.net/play/33074/0efede62-36f0-41f5-a1fe-891b3d6c67de?autoplay=true",
    //     },
    //     {
    //       name: "Classwork",
    //       link: "https://iframe.mediadelivery.net/play/33074/e383b4c3-964c-4835-8504-76567f0f7427?autoplay=true",
    //     },
    //   ],
    // },
    // // Add more sessions if needed
  ],
};

