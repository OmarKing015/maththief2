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
      session: "Motion of body in St. line",
      lectures: [
        {
          name: "Explanation Part 1",
          link: "https://iframe.mediadelivery.net/play/33074/b3499da2-c3bb-4226-827f-96a5d5f34939",
        },
        {
          name: "Explanation Part 2",
          link: "https://iframe.mediadelivery.net/play/33074/f6028548-2946-47ea-984a-f7f1a834e5e8",
        },
        {
          name: "Classwork",
          link: "https://iframe.mediadelivery.net/play/33074/4b9a15cb-259e-4fa7-b94d-ca99a705a661",
        },
        {
          name: "Homework",
          link: "https://iframe.mediadelivery.net/play/33074/d87d3cd4-6d02-42c4-a8dd-41602c63699e",
        },
        {
          name: "PDF",
          link: "https://omar-sherbeni.com/student/G2bMQTPtMV3KGLojM7rE/uploads/files/50267_S1%20mechanics.pdf",
        },
      ],
    },
    {
      session: "Vertical motion under the effect of gravity",
      lectures: [
        {
          name: "Explanation",
          link: "https://iframe.mediadelivery.net/play/33074/80e0b962-fdf2-4316-9967-65c3918b09aa",
        },
       
        {
          name: "Classwork & HomeWork",
          link: "https://iframe.mediadelivery.net/play/33074/1a87b94c-b1b9-4b1b-8240-624cac203e15",
        },
        {
          name: "PDF",
          link: "https://omar-sherbeni.com/student/G2bMQTPtMV3KGLojM7rE/uploads/files/42585_S2%20mechanics-1_merged.pdf",
        },
      ],
    },
    // Add more sessions if needed
  ],
};

