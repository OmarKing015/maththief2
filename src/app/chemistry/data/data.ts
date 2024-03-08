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
    {
      session: "The valence bond theory",
      lectures: [
        {
          name: "VBT",
          link: "https://docsend.com/view/eay4bkrpn65rk5kh",
        },
        {
          name: "Hybrid",
          link: "https://docsend.com/view/d2qswfq4m6ns5469",
        },
        {
          name: "Homework",
          link: "https://www.youtube.com/watch?v=YRtK8m78FvY",
        },
        {
          name: "creative 3",
          link: "https://www.youtube.com/watch?v=P-9-JQvXMaQ"
          
        },
        
        {
          name: "creative 4",
          link: "https://www.youtube.com/watch?v=yq__0XA57vQ"
          
        },
      ],
    },
   
    // Add more sessions if needed
  ],
};

