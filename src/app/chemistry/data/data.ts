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
      session: "The Covalent Bond",
      lectures: [
        {
          name: "Octet",
          link: "https://docsend.com/view/63ws5zyhew6cb4gc",
        },
        {
          name: "VSPER 1",
          link: "https://docsend.com/view/q5vgnwmfns6ctr2a",
        },
        {
          name: "VSPER 2",
          link: "https://docsend.com/view/2k2tmk9x3uivun9g",
        },
        {
          name: "HomeWork",
          link: "https://www.youtube.com/watch?v=tlF2-Yeh-k0"

        },

        {
          name: "creative 2",
          link: "https://www.youtube.com/watch?v=nGFOIvLEblc"

        },
      ],
    },
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
          name: "Hybirdiztation Summary",
          link: "https://youtu.be/JULeAjZSHcE?si=bnKpYT9RbtGB3CTE",
        },
        
        {
          name: "Hybirdiztation HW-1",
          link: "https://youtu.be/JULeAjZSHcE?si=bnKpYT9RbtGB3CTE",
        },
        
        {
          name: "Hybirdiztation HW-2",
          link: "https://youtu.be/PrdjjLQiYGo?si=CMjlc6TFE68_ZwC1",
        },
        
        {
          name: "Hybirdiztation HW-3",
          link: "https://youtu.be/92mYtLZWuZQ?si=YnMrjuhMIgRBYR3E",
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
    {
      session: "Unit 4 Introduction",
      lectures: [
        {
          name: "A1 Properties",
          link: "https://docsend.com/view/v5mgdmtt26zgz5c2",
        },
        
      ],
    },
    {
      session: "Types of Bonds",
      lectures: [
        {
          name: "Coordinate Bond",
          link: "https://docsend.com/view/6gqx3hbm4c8ziwi8",
        },
        {
          name: "Hydrogen Bond",
          link: "https://docsend.com/view/bzz7356i85k56seu",
        },
        {
          name: "Metallic Bond",
          link: "https://docsend.com/view/t5hdvtjadfb9sna9",
        }
        ,{
          name: "Homework",
          link: "https://youtu.be/7fFJ1wlD-d4?si=0Ot_m0CPbH9-Ufko",
        }
      ],
    },

    // Add more sessions if needed
  ],
};

